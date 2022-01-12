import { gql } from "@apollo/client";

const helloQuery = gql`
  query hello {
    hello
  }
`;
export { helloQuery };
