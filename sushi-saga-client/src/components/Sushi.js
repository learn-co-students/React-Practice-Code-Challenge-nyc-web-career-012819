import React, { Fragment } from 'react'

class Sushi extends React.Component {

  state = {
    eaten: false
  }

  handleClick = (event) => {
    if (this.props.total >= this.props.sushi.price) {
      this.setState({
        eaten: true
      })
      this.props.handlePrice(this.props.sushi.price)
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.handleClick}>
          {this.state.eaten ? null : <img src={this.props.sushi.img_url} alt="" width="100%" />}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
