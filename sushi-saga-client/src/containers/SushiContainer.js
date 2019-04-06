import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

class SushiContainer extends React.Component {
  state = {
    start: 0,
    end: 4
  };

  nextSushi = () => {
    this.setState({
      start: this.state.start + 4,
      end: this.state.end + 4
    });
  };

  render() {
    let sushis = this.props.allSushis
      .slice(this.state.start, this.state.end)
      .map(sushiObj => (
        <Sushi
          key={sushiObj.id}
          budget={this.props.budget}
          handleClick={this.props.handleClick}
          {...sushiObj}
        />
      ));
    return (
      <Fragment>
        <div className="belt">
          {sushis}
          <MoreButton nextSushi={this.nextSushi} />
        </div>
      </Fragment>
    );
  }
}

export default SushiContainer;
