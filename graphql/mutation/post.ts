import { graphql } from "@/gql";

export const createPostMutation = graphql(`#graphql
    mutation CreatePost($payload: createPostData!) {
        createPost(payload: $payload) {
            id  
            imgURL
            content
        }
    }
`)