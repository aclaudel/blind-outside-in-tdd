import React from "react";
import {Spinner} from "react-bootstrap";

export default function LoadingSection(props) {
    return <Spinner data-testid="loading-icon" animation="border" role="status">
        <span className="sr-only">Loading...</span>
    </Spinner>
}