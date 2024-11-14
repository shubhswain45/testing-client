import { graphql } from "@/gql"


export const createPostMutation = graphql(`#graphql
    mutation CreatePost($payload: createPostData!) {
        createPost(payload: $payload) {
            id  
            imgURL
            content
        }
    }
`)

export const deletePostMutation = graphql(`#graphql
    mutation DeletePost($postId: String!) {
        deletePost(postId: $postId)
    }
`)

export const likePostMutation = graphql(`#graphql
    mutation LikePost($postId: String!) {
  likePost(postId: $postId)
}
`)

export const commentPostMutation = graphql(`#graphql
mutation CommentPost($payload: commentPostData!) {
  commentPost(payload: $payload) {
    id
    content
    postId

        author {
            id
            profileImageURL
            username
            }
  }
}
`)


export const deleteCommentPostMutation = graphql(`#graphql
   mutation DeleteCommentPost($commentId: String!) {
  deleteCommentPost(commentId: $commentId)
}
`)

export const bookMarkPostMutation = graphql(`#graphql
    mutation BookMarkPost($postId: String!) {
  bookMarkPost(postId: $postId)
}
`)