"use client";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
import { loginWithGoogleMutation } from "@/graphql/mutation/auth";
import { createGraphqlClient } from "@/clients/api";

export default function LoginForm() {
  // const router = useRouter()

  const handleLoginWithGoogle = async (cred: CredentialResponse) => {
    const googleToken = cred.credential
    if (!googleToken) {
      return toast.error("Google token not found")
    }

    const graphqlClient = createGraphqlClient()
    const {loginWithGoogle} = await graphqlClient.request(loginWithGoogleMutation, {token: googleToken})
    toast.success("Verified Success")

    if(loginWithGoogle){
        window.localStorage.setItem("__moments_token", loginWithGoogle)
    }

    console.log(loginWithGoogle);

  }
  
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
