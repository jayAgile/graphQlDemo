import { gql } from "@apollo/client";

// Mutation Query like a post method in api
export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      jwt
    }
  }
`;