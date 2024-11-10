import { createGraphqlClient } from "@/clients/api"
import { getCurrentUserQuery } from "@/graphql/query/auth"
import { useQuery } from "@tanstack/react-query"

export const useCurrentUser = () => {
    return useQuery({
        queryKey: ['currentUser'],
        queryFn: async () => {
            const graphqlClient = createGraphqlClient()
            const data = await graphqlClient.request(getCurrentUserQuery)
            return data
        }
    })
}
