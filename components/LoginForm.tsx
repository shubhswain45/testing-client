"use client";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginForm() {
  const router = useRouter()

  const handleLoginWithGoogle = async (cred: CredentialResponse) => {
    const googleToken = cred.credential
    if (!googleToken) {
      return toast.error("Google token not found")
    }

    console.log(cred);


    const { loginWithGoogle } = await graphqlClient.request(loginWithGoogleMutation, { token: googleToken })
    localStorage.setItem("__moments_token", loginWithGoogle || "")
    router.replace("/dashboard")
    toast.success("Verified success")
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const idk = await graphqlClient.request(sayHelloQuery);
        // Do something with sayHello
        console.log(idk);
        
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`mb-3 text-2xl dark:text-black`}>
          Please log in to continue.
        </h1>
        <div className="mt-4 w-full flex justify-center"> {/* Center the button */}
          <GoogleLogin onSuccess={handleLoginWithGoogle} />
        </div>
      </div>
    </div>
  );
}
