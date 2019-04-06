import React, { Fragment } from 'react'

class Sushi extends React.Component {
  state = {
    isEaten: false,
  };

  eventHandlers = () => {
    if (this.props.amount >= this.props.sushi.price && this.state.isEaten === false) {
      this.sushiHandler()
      this.props.priceHandler(this.props.sushi)
    }
  }

  sushiHandler = () => {
    this.setState({isEaten: true})
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.eventHandlers}>
          {this.state.isEaten ? null : <img src={this.props.sushi.img_url} width="100%" />
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
