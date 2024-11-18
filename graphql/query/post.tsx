import { graphql } from "@/gql"

export const getFeedPostsQuery = graphql(`#graphql
  query GetFeedPosts($payload: paginationPayload!) {
  getFeedPosts(payload: $payload) {
     posts{
            id  
            imgURL
            content
            author {
            id
            profileImageURL
            email
            username
            fullName
            isVerified
            }

            totalLikeCount
            bookmarked
            userHasLiked
       }
       nextCursor
       hasMore
  }
}
`)

export const getPostCommentsQuery = graphql(`#graphql
    query GetPostComments($postId: String!) {
  getPostComments(postId: $postId) {
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

export const getUserPostsQuery = graphql(`#graphql
query GetUserPosts($username: String!) {
  getUserPosts(username: $username) {
    id  
            imgURL
            content

            author {
            id
            profileImageURL
            email
            username
            fullName
            isVerified
            }

            totalLikeCount
            bookmarked
            userHasLiked 
  }
}
`)


export const getPostByIdQuery = graphql(`#graphql
query GetPostById($postId: String!) {
  getPostById(postId: $postId) {
    id
    content
    imgURL
    author {
      id
      username
      profileImageURL
    }
    totalLikeCount
    totalCommentCount
    bookmarked
    userHasLiked
    comments {
      id
      content
      author {
        id
        username
        profileImageURL
      }
    }
  }
}`)