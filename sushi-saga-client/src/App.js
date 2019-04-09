import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API_URL = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushi: [],
    eatenIds: [],
    balance: 1000,
  }

  componentDidMount() {
    fetch(API_URL)
      .then(response => response.json())
      .then(json => this.setState({
        sushi: json,
      }));
  }

  handleEatenSushi = (id, price) => {
    if (!this.state.eatenIds.includes(id)) {
      this.setState({
        eatenIds: [...this.state.eatenIds, id],
        balance: this.state.balance - price,
      });
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.state.sushi} 
          handleEatenSushi={this.handleEatenSushi} 
          eatenSushis={this.state.eatenIds}
        />
        <Table plates={this.state.eatenIds} balance={this.state.balance} />
      </div>
    );
  }
}

export default App;