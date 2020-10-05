import React from "react";
import LoadingSection from "./loading/LoadingSection";
import ItemSection from "./item/ItemSection";
import QuerySection from "./query/QuerySection";

export default function MainSection(props) {

    if (props.isLoading) {
        return <LoadingSection />
    }

    if (!props.isLoading && props.items.length > 0) {
        return <ItemSection items={props.items} />
    }

    return <QuerySection fetchCallback={props.fetchCallback}/>;
}