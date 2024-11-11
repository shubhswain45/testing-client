import { graphql } from "@/gql";


export const createPostMutation = graphql(`#graphql
    mutation CreatePost($payload: createPostData!) {
        createPost(payload: $payload) {
            id  
            imgURL
            content
        }
    }
`)

export const likePostMutation = graphql(`#graphql
    mutation LikePost($postId: String!) {
  likePost(postId: $postId)
}
`)