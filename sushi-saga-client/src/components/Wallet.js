import React from 'react'

class Wallet extends React.Component {

  state = {
    input: ""
  }



  handleChange = (e) => {
    this.setState({input: e.target.value});
  }

  handleClick = (e) => {
    e.preventDefault();
    let { input } = this.state;
    this.props.addFunds(parseInt(input));
    this.setState({input: ""})
  }


  render () {
    return (
      <React.Fragment>
        <form className="wallet">
          <input onChange={this.handleChange} value={this.state.input}></input>
          <br/>
          <button onClick={this.handleClick} type="submit">Add Funds</button>
        </form>
      </React.Fragment>
    )
  }
}

export default Wallet;
