import { GraphQLClient } from 'graphql-request';

export const createGraphqlClient = (token?: string) => {
    return new GraphQLClient('https://testing-server-cwbn.onrender.com/graphql', {
        credentials: "include"
    });
}
