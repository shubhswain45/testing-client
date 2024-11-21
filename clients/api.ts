import { GraphQLClient } from 'graphql-request';

export const createGraphqlClient = (token?: string) => {
    return new GraphQLClient('https://moments-server-2.onrender.com/graphql', {
        credentials: "include"
    });
}
