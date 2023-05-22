import { gql } from "@apollo/client";

// Mutation Query
export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      jwt
    }
  }
`;