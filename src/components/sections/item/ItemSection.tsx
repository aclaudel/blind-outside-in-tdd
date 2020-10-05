import React from "react";
import {Card} from "react-bootstrap";

export default function ItemSection(props) {
    return <div>
        {props.items.map(item =>
            <Card data-testid="item" key={item.id} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{item.id}</Card.Title>
                    <Card.Text>
                        This is {item.name}
                    </Card.Text>
                </Card.Body>
            </Card>)}
    </div>
}