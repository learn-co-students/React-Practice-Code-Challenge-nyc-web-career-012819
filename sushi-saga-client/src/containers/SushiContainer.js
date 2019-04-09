import React, { Component, Fragment } from 'react';
import Sushi from '../components/Sushi';
import MoreButton from '../components/MoreButton';

class SushiContainer extends Component {
  state = {
    currentIndex: 0,
  }

  incrementCurrentIndex = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 4,
    });
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {
            this.props.sushis
              .slice(this.state.currentIndex, this.state.currentIndex + 4)
              .map(sushi => 
                <Sushi 
                  key={sushi.id} 
                  attr={sushi} 
                  clickHandler={this.props.handleEatenSushi} 
                  isEaten={this.props.eatenSushis.includes(sushi.id) ? true : false}
                />
              )
          }
          <MoreButton clickHandler={this.incrementCurrentIndex} />
        </div>
      </Fragment>
    );
  }
}

export default SushiContainer;