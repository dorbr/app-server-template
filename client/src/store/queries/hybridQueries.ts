import { gql } from "@apollo/client";

const GET_HELLO_AND_NAME = gql`
  query hello {
    hello
    name @client
  }
`;
export { GET_HELLO_AND_NAME };
