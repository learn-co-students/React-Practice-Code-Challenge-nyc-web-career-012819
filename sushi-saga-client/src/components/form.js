import React, { Component } from 'react'

class Form extends Component {

  state = {
    amount: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.updateAmount(this.state.amount)
    this.setState({
      amount: ''
    })
  }

  changeHandler = event => {
    const r = /\d/
    const s = event.target.value
    event.persist()
    const strToNum = parseInt(event.target.value)
    if (r.test(strToNum)) {
      console.log('hi');
      this.setState({
        amount: parseInt(event.target.value)
      })
    } else {
      this.setState({
        amount: ''
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add More Money: </label>
        <input placeholder="$$$" onChange={this.changeHandler} name="amount" value={this.state.amount}/>
        <button>submit</button>
      </form>
    )
  }
}

export default Form
