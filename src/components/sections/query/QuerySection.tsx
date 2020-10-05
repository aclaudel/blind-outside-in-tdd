import React from "react";

export default function QuerySection(props) {
    return <div onClick={() => props.fetchCallback()} data-testid="fetch-button"/>
}