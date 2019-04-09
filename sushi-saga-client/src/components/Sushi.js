import React, { Component } from 'react'

class Sushi extends Component {
  state = {
    beenEaten: false
  }

  clickHandler = () => {
    this.setState({beenEaten: true})
    this.props.eaten(this.props.sushi)
    this.props.subtractWallet(this.props.sushi.price)
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" onClick={this.props.wallet < this.props.sushi.price ? null : this.clickHandler}>
          {this.state.beenEaten ? null : <img src={this.props.sushi.img_url} alt="" width="100%"/>}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi