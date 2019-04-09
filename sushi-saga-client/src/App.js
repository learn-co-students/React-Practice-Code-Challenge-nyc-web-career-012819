import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    starting: 0,
    ending: 4,
    wallet: 100
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => this.setState({sushis: data}))
  }

  moreSushi = () => {
    if (this.state.starting === 96) {
      this.setState({starting: 0})
      this.setState({ending: 4})
    } else {
      this.setState({starting: this.state.starting + 4})
      this.setState({ending: this.state.ending + 4})
    }
  }

  eatenSushi = (sushi) => {
    let newArr = [...this.state.eaten, sushi]
    this.setState({eaten: newArr})
  }

  subtractWallet = (price) => {
    this.setState({wallet: this.state.wallet - price})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis.slice(this.state.starting, this.state.ending)}
          moreSushi={this.moreSushi}
          eaten={this.eatenSushi}
          subtractWallet={this.subtractWallet}
          wallet={this.state.wallet}
        />
        <Table wallet={this.state.wallet} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;