import { createGraphqlClient } from "@/clients/api"
import { getUserPostsQuery } from "@/graphql/query/post"
import { getUserProfileQuery } from "@/graphql/query/user"

export const getUserProfile = async (username: string) => {
    const graphqlClient = createGraphqlClient()
    const {getUserProfile} = await graphqlClient.request(getUserProfileQuery, { username })
    return getUserProfile
}

export const getUserPosts = async (username: string) => {
    const graphqlClient = createGraphqlClient()
    const {getUserPosts} = await graphqlClient.request(getUserPostsQuery, { username })
    return getUserPosts
}


