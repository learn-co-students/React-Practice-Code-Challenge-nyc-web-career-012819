import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    currentSushi: [],
    budget: 100,
    number: ""
  };

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(sushis => this.setState({ sushis }));
  }

  handleClick = sushi => {
    console.log(sushi);
    this.setState({
      ...this.state,
      currentSushi: [...this.state.currentSushi, sushi],
      budget: this.state.budget - sushi.price
    });
  };

  handleChange = e => {
    if (!isNaN(parseInt(e.target.value))) {
      this.setState(
        {
          ...this.state,
          number: parseInt(e.target.value)
        },
        () => console.log(this.state.number)
      );
    } else {
      this.setState(
        {
          ...this.state,
          number: ""
        },
        alert("number only")
      );
    }
  };
  // bonus: adding more money
  handleSubmit = e => {
    e.preventDefault();
    this.setState(
      {
        ...this.state,
        budget: this.state.budget + this.state.number
      },
      () => {
        this.setState({
          ...this.state,
          number: ""
        });
      }
    );
  };

  render() {
    // console.log(this.state.currentSushi);)
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button>Add Budget</button>
        </form>
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
