import { createGraphqlClient } from "@/clients/api";
import { getFeedPostsQuery } from "@/graphql/query/post";
import { cookies } from 'next/headers';

export const fetchFeedPosts = async (token?: string) => {  
    // Access cookies from the request in the server component context
  
    // Create GraphQL client with token from cookies
    const graphqlClient = createGraphqlClient(token);

    // Fetch the feed posts using the client
    const { getFeedPosts } = await graphqlClient.request(getFeedPostsQuery);
    return getFeedPosts;
};
