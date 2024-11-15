import { createGraphqlClient } from "@/clients/api"
import { getUserProfileQuery } from "@/graphql/query/user"
import { unstable_noStore as noStore } from "next/cache";

export const getUserProfile = async (username: string) => {
    noStore()
    const graphqlClient = createGraphqlClient()
    const {getUserProfile} = await graphqlClient.request(getUserProfileQuery, { username })
    return getUserProfile
}