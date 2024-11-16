import { createGraphqlClient } from "@/clients/api"
import { getPostByIdQuery, getUserPostsQuery } from "@/graphql/query/post"
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


export const getPostById = async (postId: string) => {
    const graphqlClient = createGraphqlClient()
    const {getPostById} = await graphqlClient.request(getPostByIdQuery, { postId })
    return getPostById
}
