import { GraphQLClient } from 'graphql-request';

export const createGraphqlClient = (token?: string) => {
    return new GraphQLClient('https://my-app-vlwq.onrender.com/graphql', {
        credentials: "include"
    });
}
