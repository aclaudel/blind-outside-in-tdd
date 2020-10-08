import React from "react";
import {Spinner} from "react-bootstrap";

export default function LoadingSection(props) {
  if (props.coolio) {
    return <Spinner animation="grow" variant="danger"/>
  }

  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}