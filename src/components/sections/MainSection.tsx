import React from "react";
import LoginSection from "./login/LoginSection";
import LoadingSection from "./loading/LoadingSection";
import ItemSection from "./item/ItemSection";

export default function MainSection(props) {

    if (props.isLoggedIn && props.isLoading) {
        return <LoadingSection />
    }

    if (props.isLoggedIn && !props.isLoading) {
        return <ItemSection items={props.items} />
    }

    return <LoginSection loginCallback={props.loginCallback}/>;
}