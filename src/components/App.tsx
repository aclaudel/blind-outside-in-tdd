import React from 'react';
import MainSection from "./MainSection";
import DataApi from "../services/DataApi";

interface AppState {
    isLoggedIn: boolean,
    isLoading: boolean,
    items: any[]
}

interface AppProps {
    dataApi: DataApi
}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this)
        this.state = {
            isLoggedIn: false,
            isLoading: false,
            items: []
        }
    }

    login() {
        this.setState({
            isLoggedIn: true,
            isLoading: true
        })

        this.props.dataApi.getItems()
            .then(items => {
                this.setState({
                    isLoggedIn: true,
                    isLoading: false,
                    items: items
                })
            })
    }

    render() {
        return <MainSection isLoggedIn={this.state.isLoggedIn}
                            isLoading={this.state.isLoading}
                            items={this.state.items}/>;
    }
}
