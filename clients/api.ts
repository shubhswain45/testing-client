import { GraphQLClient } from 'graphql-request';

const isClient = typeof window !== "undefined";
const token = isClient ? window.localStorage.getItem("__moments_token") : null;

export const createGraphqlClient = (token?: string) => {
    return new GraphQLClient('https://app-server-mngz.onrender.com/graphql', {
        headers: () => ({
            Authorization: `Bearer ${token}`
        }),
        credentials: "include"
    });
}
