import React from "react";
import {Button} from "react-bootstrap";

export default function QuerySection(props) {
  return <Button data-testid="fetch-button" onClick={props.fetchCallback}>
    GET IT
  </Button>
}