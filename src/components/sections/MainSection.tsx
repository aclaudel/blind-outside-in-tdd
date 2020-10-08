import React from "react";
import QuerySection from "./query/QuerySection";

export default function MainSection(props) {
  return <QuerySection fetchCallback={props.fetchCallback}/>;
}