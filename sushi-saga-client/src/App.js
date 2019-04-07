import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
let num = 1



class App extends Component {

  state = {
    eaten: [],
    sushis: [],
    balance: 100
  }

  eatSushi = (props) =>{
    let sushiPrice = props.price
    if (this.state.eaten.includes(props.id)){
      console.log('already eaten')
    } else if (this.state.balance < sushiPrice) {
      console.log("no money and already eaten")
    } else {
      let eatenSushi = props.id
      let newArray = [...this.state.eaten, eatenSushi]
      this.setState({eaten: newArray})
      let newBalance = this.state.balance - sushiPrice
      this.setState({balance: newBalance})
    }
  }

  componentDidMount(){
    this.fetchSushi()
  }

  fetchSushi = (e) =>{
    fetch(`http://localhost:3000/sushis/?_limit=4&_page=${num}`)
    .then(res => res.json())
    .then(json => this.setState({ sushis: json }))
    num += 1
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} fetchSushi={this.fetchSushi}
        eaten={this.state.eaten}
        eatSushi={this.eatSushi}/>
      <Table eaten={this.state.eaten} balance={this.state.balance} />
      </div>
    );
  }
}

export default App;
