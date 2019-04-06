import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

class SushiContainer extends React.Component {
  state = {
    start: 0,
    end: 4,
    pageNumber: 1
  };
  // bonus, if else condition will make the page go back to the first four.
  // to make the plates stay empty, ...?
  nextSushi = () => {
    if (this.state.pageNumber <= 25) {
      this.setState({
        start: this.state.start + 4,
        end: this.state.end + 4,
        pageNumber: this.state.pageNumber + 1
      });
    } else {
      this.setState({
        start: 0,
        end: 4,
        pageNumber: 1
      });
    }
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
