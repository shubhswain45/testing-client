import { graphqlClient } from "@/clients/api";
import { getFeedPostsQuery } from "@/graphql/query/post";

export const fetchFeedPosts = async () => {  
    const { getFeedPosts } = await graphqlClient.request(getFeedPostsQuery);
    return getFeedPosts;
};
