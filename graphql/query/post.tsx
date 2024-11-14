import { graphql } from "@/gql"

export const getFeedPostsQuery = graphql(`#graphql
    query GetFeedPosts {
        getFeedPosts {
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