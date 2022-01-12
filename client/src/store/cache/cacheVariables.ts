import { makeVar } from "@apollo/client";

const countVariable = makeVar(0);
const nameVariable = makeVar("UNKNOWN NAME");

export { nameVariable, countVariable };
