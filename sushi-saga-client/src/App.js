import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    plates: [],
    total: 100
  }

  handlePrice = (price) => {
    this.setState({
      total: this.state.total - price
    })
    let morePlates = [...this.state.plates, 'plate']
    this.setState({
      plates: morePlates
    })
    return price
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  api={API} total={this.state.total} handlePrice={this.handlePrice}/>
        <Table total={this.state.total} plates={this.state.plates} handlePrice={this.handlePrice}/>
      </div>
    );
  }
}

export default App;
