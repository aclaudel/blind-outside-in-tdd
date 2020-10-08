import React from 'react';
import MainSection from "./sections/MainSection";

export default class App extends React.Component<any, any> {
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
  }

  render() {
    return <MainSection
      isLoading={this.state.isLoading}
      items={this.state.items}
      fetchCallback={this.fetch}/>;
  }
}
