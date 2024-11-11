import { GraphQLClient } from 'graphql-request';

export const createGraphqlClient = (token?: string) => {
    return new GraphQLClient('https://app-server-mngz.onrender.com/graphql', {
        headers: () => ({
            Authorization: `Bearer ${token}`
        }),
        credentials: "include"
    });
}
