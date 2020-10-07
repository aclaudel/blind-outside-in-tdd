import React from 'react';
import DataApi from "../services/DataApi";
import MainSection from "./sections/MainSection";

interface AppState {
  isLoading: boolean,
  items: any[]
}

interface AppProps {
  dataApi: DataApi
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this)
    this.state = {
      isLoading: false,
      items: []
    }
  }

  fetch() {
    this.setState({
      isLoading: true,
      items: []
    })

    this.props.dataApi.getItems()
      .then(items => {
        this.setState({
          isLoading: false,
          items: items
        })
      })
  }

  render() {
    return <MainSection fetchCallback={this.fetch}
                        isLoading={this.state.isLoading}
                        items={this.state.items}/>;
  }
}
