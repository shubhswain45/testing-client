import { graphql } from "@/gql";

export const getUserProfileQuery = graphql(`#graphql
query GetUserProfile($username: String!) {
  getUserProfile(username: $username) {
    id
    username
    fullName
    profileImageURL
    bio
    totalPosts
    totalFollowers
    totalFollowings
    followed
  }
}
`)
