import React from "react";
import QuerySection from "./query/QuerySection";
import LoadingSection from "./loading/LoadingSection";

export default function MainSection(props) {
  if (props.isLoading) {
    return <LoadingSection/>
  }

  return <QuerySection fetchCallback={props.fetchCallback}/>;
}