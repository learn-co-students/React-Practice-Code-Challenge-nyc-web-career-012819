import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
let start = 0
let end = 4
class App extends Component {

  state = {
    sushis: [],
    fourSushis: [],
    sushisEaten: [],
    cash: 100
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => {
        this.setState({sushis: sushis})
        this.setState({fourSushis: sushis.slice(0,4)})

      })
  }

  moreSushi = () => {
    this.setState({fourSushis: this.state.sushis.slice(start+=4,end+=4)})
  }

  nowEaten = (sushi) => {
    if (sushi.target.id !== "") {

      const fourSushiArr = this.state.fourSushis
      const clickedSushiPrice = fourSushiArr.filter(sushiObj => sushiObj.img_url === sushi.target.src)[0].price

      if (this.state.cash >= clickedSushiPrice) {
        this.setState(prevState => ({
          sushisEaten: [...prevState.sushisEaten, sushi.target.id],
          cash: prevState.cash - clickedSushiPrice
        }))
      }
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eaten={this.nowEaten} cash={this.state.cash} sushis={this.state.fourSushis} moreSushi={this.moreSushi}/>
        <Table eaten={this.state.sushisEaten} cash={this.state.cash}/>
      </div>
    );
  }
}

export default App;
