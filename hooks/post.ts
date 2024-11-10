import { CreatePostData } from "@/gql/graphql";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { graphqlClient } from "@/clients/api";
import { createPostMutation } from "@/graphql/mutation/post";

export const useCreatePost = () => {
    const router = useRouter()

    return useMutation({
        mutationFn: async (postData: CreatePostData) => {
            try {
                const { createPost } = await graphqlClient.request(createPostMutation, { payload: postData });
                return createPost;
            } catch (error: any) {
                throw new Error(error.message || "Something went wrong");
            }
        },

        onSuccess: (data) => {
            toast.success("Post created successfully");
            router.back()
        }, 

        onError: (error: any) => {
            toast.error(error.message);
        }
    });
}