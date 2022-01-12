import React from "react";
import { useQuery } from "@apollo/client";

import { Counter, ControlPanel } from "./";

import { GET_HELLO_AND_NAME } from "../store/queries/hybridQueries";

function Header() {
  const { loading, error, data } = useQuery(GET_HELLO_AND_NAME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="Header">
      {data.hello + " " + data.name}
      <Counter />
      <ControlPanel />
    </div>
  );
}

export default Header;
