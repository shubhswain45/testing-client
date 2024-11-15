import { createGraphqlClient } from "@/clients/api"
import { getUserProfileQuery } from "@/graphql/query/user"

export const getUserProfile = async (username: string) => {
    const graphqlClient = createGraphqlClient()
    const {getUserProfile} = await graphqlClient.request(getUserProfileQuery, { username })
    return getUserProfile
}