import React from "react";

export default function ItemSection(props) {
    return <div>
        {props.items.map(item =>
            <div data-testid="item" key={item.id}/>)}
    </div>
}