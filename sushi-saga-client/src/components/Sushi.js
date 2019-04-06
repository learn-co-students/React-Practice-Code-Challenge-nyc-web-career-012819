import React, { Component } from 'react'

class Sushi extends Component {
  state = {
    clicked: false
  }

  clickHandler = e => {
    e.persist()
    const { price } = this.props.sushi
    if (e.target.id !== "" && this.props.cash >= price) {
    this.setState({clicked:true}, () => this.props.eaten(e))
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.clickHandler}>
          {this.state.clicked ? '': <img id={this.props.sushi.id} alt='' src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
