"use client";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginWithGoogleMutation } from "@/graphql/mutation/auth";
import { createGraphqlClient } from "@/clients/api";
import { useCurrentUser } from "@/hooks/auth";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

export default function LoginForm() {
  const router = useRouter();
  const { data, isLoading } = useCurrentUser();
  const queryClient = useQueryClient();

  // Redirect if the user is already logged in
  useEffect(() => {
    if (data?.getCurrentUser) {
      router.replace("/dashboard");
    }
  }, [data, router]);

  const handleLoginWithGoogle = async (cred: CredentialResponse) => {
    const googleToken = cred.credential;
    if (!googleToken) {
      return toast.error("Google token not found");
    }

    const graphqlClient = createGraphqlClient();
    const { loginWithGoogle } = await graphqlClient.request(loginWithGoogleMutation, {
      token: googleToken,
    });

    console.log(loginWithGoogle);
    

    // Get the QueryClient instance from React Query

    // Invalidate and remove the cached data for 'currentUser' query
    queryClient.removeQueries({queryKey: ['currentUser']});  // This will remove the cached data for the currentUser query
    // Alternatively, if you want to invalidate but not immediately refetch, use:
    // queryClient.invalidateQueries(['currentUser']); 
    toast.success("Verified Success");

    router.replace("/dashboard")

  };

  if (isLoading || data?.getCurrentUser) {
    // Show a simple spinning effect (no border)
    return (
      <div className="flex justify-center items-center">
        <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
      </div>

    );
  }

  return (
    <div className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl dark:text-black">
          Please log in to continue.
        </h1>
        <div className="mt-4 w-full flex justify-center">
          {/* Center the button */}
          <GoogleLogin onSuccess={handleLoginWithGoogle} />
        </div>
      </div>
    </div>
  );
}
