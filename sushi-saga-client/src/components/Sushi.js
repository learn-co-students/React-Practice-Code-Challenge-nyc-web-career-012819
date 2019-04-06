import React, { Fragment } from "react";

class Sushi extends React.Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    if (this.props.budget - this.props.price >= 0 && !this.state.clicked) {
      this.setState({ clicked: true });
      this.props.handleClick(this.props);
    }
  };

  render() {
    // console.log("Sushi", this.props.id, this.props.name);
    return (
      <div className="sushi">
        <div className="plate" onClick={this.handleClick}>
          {this.state.clicked ? null : (
            <img src={this.props.img_url} width="100%" />
          )}
        </div>
        <h4 className="sushi-details">
          {this.props.name} - ${this.props.price}
        </h4>
      </div>
    );
  }
}

export default Sushi;
