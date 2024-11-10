import { CreatePostData } from "@/gql/graphql";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createPostMutation } from "@/graphql/mutation/post";
import { createGraphqlClient } from "@/clients/api";
import { getFeedPostsQuery } from "@/graphql/query/post";

export const useCreatePost = () => {
    const router = useRouter()

    return useMutation({
        mutationFn: async (postData: CreatePostData) => {
            try {
                const graphqlClient = createGraphqlClient()
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

export const useFetchFeedPosts = () => {
    return useQuery({
        queryKey: ['feedPosts'],
        queryFn: async () => {
            const graphqlClient = createGraphqlClient()
            const {getFeedPosts} = await graphqlClient.request(getFeedPostsQuery)
            return getFeedPosts
        }
    })
}