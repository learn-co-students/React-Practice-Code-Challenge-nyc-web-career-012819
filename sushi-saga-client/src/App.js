import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    currentSushi: [],
    budget: 100
  };

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(sushis => this.setState({ sushis }));
  }

  handleClick = sushi => {
    this.setState({
      ...this.state,
      currentSushi: [...this.state.currentSushi, sushi],
      budget: this.state.budget - sushi.price
    });
  };

  render() {
    console.log(this.state.currentSushi);
    return (
      <div className="app">
        <SushiContainer
          allSushis={this.state.sushis}
          handleClick={this.handleClick}
          budget={this.state.budget}
        />
        <Table sushi={this.state.currentSushi} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;
