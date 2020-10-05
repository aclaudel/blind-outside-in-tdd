import React from "react";
import {Button} from "react-bootstrap";

export default function QuerySection(props) {
    return <Button onClick={() => props.fetchCallback()} data-testid="fetch-button">
        GET IT
    </Button>
}