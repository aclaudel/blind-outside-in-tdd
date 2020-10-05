import React from "react";

export default function QuerySection(props) {
    return <div onClick={() => props.queryCallback()} data-testid="query-button"/>
}