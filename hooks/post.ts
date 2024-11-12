import { CreatePostData, Post } from "@/gql/graphql";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createPostMutation, likePostMutation } from "@/graphql/mutation/post";
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
            const { getFeedPosts } = await graphqlClient.request(getFeedPostsQuery)
            return getFeedPosts
        }
    })
}

export const useLikePost = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (postId: string) => {
            try {
                const graphqlClient = createGraphqlClient()
                const { likePost } = await graphqlClient.request(likePostMutation, { postId });
                return { likePost, postId };
            } catch (error: any) {
                throw new Error(error.message || "Something went wrong");
            }
        },



        onSuccess: (data) => {
            if (data.likePost == true) {
                queryClient.setQueryData(
                    ["feedPosts"], // query key
                    (oldData: [Post] | undefined) => {
                        return oldData?.map((post) => {
                            // Check if post id matches the liked post's id
                            if (data.postId === post.id) {
                                const prevLikes = post.totalLikeCount || 0; // Safely access likes
                                return {
                                    ...post,
                                    userHasLiked: true,
                                    totalLikeCount: prevLikes + 1
                                };
                            } else {
                                return post; // Return unchanged post if id does not match
                            }
                        });
                    }
                );
                toast.success("like successfully");
            } else {
                queryClient.setQueryData(
                    ["feedPosts"], // query key
                    (oldData: [Post] | undefined) => {
                        return oldData?.map((post) => {
                            // Check if post id matches the unliked post's id
                            if (data.postId === post.id) {
                                const prevLikes = post.totalLikeCount || 0; // Safely access likes
                                return {
                                    ...post,
                                    userHasLiked: false, // Set hasLiked to false
                                    totalLikeCount: prevLikes > 0 ? prevLikes - 1 : 0,
                                };
                            } else {
                                return post; // Return unchanged post if id does not match
                            }
                        });
                    }
                );
                toast.success("unlike successfully");
            }
        },



        onError: (error: any) => {
            toast.error(error.message);
        }
    });
}