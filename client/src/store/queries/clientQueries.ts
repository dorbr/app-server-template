import { gql } from "@apollo/client";
const GET_COUNT = gql`
  query getCount {
    count @client
  }
`;

export { GET_COUNT };
