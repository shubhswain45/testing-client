"use client";
import { GraphQLClient } from 'graphql-request';

const isClient = typeof window !== "undefined";
const token = isClient ? window.localStorage.getItem("__moments_token") : null;

export const graphqlClient = new GraphQLClient('http://localhost:4000/graphql', {
    headers: () => ({
        Authorization: token ? `Bearer ${token}` : 'undefined',
    }),
});
