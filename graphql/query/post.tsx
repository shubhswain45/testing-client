import { graphql } from "@/gql";

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

            _count {
                likes
            }

            hasLiked
        }
    }
`)