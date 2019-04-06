import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './containers/Form';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushiArray: [],
    amount: 100,
    eatenSushi: []
  };

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushis => {
      this.setState({sushiArray: sushis })
    })
  }

  priceHandler = (sushi) => {
    let platesArray = [...this.state.eatenSushi];
    platesArray.push(sushi)
    this.setState({amount: this.state.amount-sushi.price, eatenSushi:platesArray})
  }

  sendValue = (value) => {
    this.setState({amount: this.state.amount+parseInt(value)})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushis={this.state.sushiArray} priceHandler={this.priceHandler} amount={this.state.amount}/>

        <Table amount={this.state.amount} eatenSushi={this.state.eatenSushi}/>

        <Form sendValue={this.sendValue}/>
      </div>
    );
  }
}

export default App;
