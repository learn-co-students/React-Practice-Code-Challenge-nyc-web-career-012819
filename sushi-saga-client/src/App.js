import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    total: 50,
    plates: []
  }

  handlePrice = price => {
    this.setState({total: (this.state.total - price)})
    let addPlates = [...this.state.plates, 'plate']
    this.setState({plates: addPlates})
    return price
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  api={API} handlePrice={this.handlePrice} total={this.state.total}/>
        <Table price={this.handlePrice} total={this.state.total} plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;
