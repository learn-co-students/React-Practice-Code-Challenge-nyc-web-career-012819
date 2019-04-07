import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    amount: 100,
    plates: []
  }

  handlePrice = (sushi) => {
    let plateArr = [...this.state.plates];
    plateArr.push(sushi)

    this.setState({amount: (this.state.amount - sushi.price), plates: plateArr})

  }


  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushisArr => {
      this.setState({sushis: sushisArr})
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          handlePrice={this.handlePrice}
          sushis={this.state.sushis}
          amount={this.state.amount}
          plates={this.state.plates}
        />
        <Table
          plates={this.state.plates}
          amount={this.state.amount}
        />
      </div>
    );
  }
}

export default App;
