import { graphql } from "@/gql";

export const loginWithGoogleMutation = graphql(`#graphql
mutation LoginWithGoogle($token: String!) {
  loginWithGoogle(token: $token)
}
`)