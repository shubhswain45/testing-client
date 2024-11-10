import { createGraphqlClient } from "@/clients/api";
import { getFeedPostsQuery } from "@/graphql/query/post";
import { cookies } from 'next/headers';

export const fetchFeedPosts = async () => {  
    // Access cookies from the request in the server component context
    const cookieStore = await cookies();
    const token = cookieStore.get("__moments_token")?.value || undefined;  // Use undefined if there's no token

    // Create GraphQL client with token from cookies
    const graphqlClient = createGraphqlClient(token);

    // Fetch the feed posts using the client
    const { getFeedPosts } = await graphqlClient.request(getFeedPostsQuery);
    return getFeedPosts;
};
