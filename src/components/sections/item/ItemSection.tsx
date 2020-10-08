import React from "react";
import {Alert, Card} from "react-bootstrap";

export default function ItemSection(props) {
  return (
    <div>
      {props.items.map(item =>
        <div data-testid="item" key={item.id} />)}
    </div>
  );
}
