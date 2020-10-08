import React from "react";

export default function QuerySection(props) {
  return <div data-testid="fetch-button" onClick={props.fetchCallback}/>
}