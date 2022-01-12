import React from "react";
import { useQuery } from "@apollo/client";

import { GET_COUNT } from "../store/queries/clientQueries";

function Counter() {
  const { data } = useQuery(GET_COUNT);
  console.log(data);
  return <div className="Counter text-emerald-400">{data.count}</div>;
}

export default Counter;
