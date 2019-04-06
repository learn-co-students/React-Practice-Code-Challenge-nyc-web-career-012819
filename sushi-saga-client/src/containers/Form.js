import React, { Fragment } from 'react'

class Form extends React.Component {

  state = {
    value:''
  };

  changeHandler = (event) => {
    this.setState({value: event.target.value})
  }

  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.value !== "") {
      this.props.sendValue(this.state.value)
      this.setState({value: ''})

    }
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input id="inputValue" type="number" name="name" onChange={this.changeHandler} value={this.state.value} placeholder="Add money"/>
        <input type="submit" />
      </form>
    )
  }
}

export default Form
