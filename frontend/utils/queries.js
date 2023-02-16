import { gql } from '@apollo/client';
//query to retrieve a list of words from the game's dictionary
export const QUERY_WORDS = gql`
  query getWords {
    words {
      _id
      word
    }
  }

`;
//query for user display
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
    }
  }
`;
