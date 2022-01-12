import { InMemoryCache } from "@apollo/client";
import { nameVariable, countVariable } from "./cacheVariables";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        name: {
          read() {
            return nameVariable();
          },
        },
        count: {
          read() {
            return countVariable();
          },
        },
      },
    },
  },
});
