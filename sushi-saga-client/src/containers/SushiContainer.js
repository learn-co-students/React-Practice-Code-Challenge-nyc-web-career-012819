import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state ={
    start: 0,
    end: 4
  };

  clickHandler = (event) => {
    if (this.state.start === 96 && this.state.end === 100) {
      this.setState({start: 0, end: 4})
    } else {
      this.setState({start: this.state.start+4, end: this.state.end+4})
    }
  }

  render() {
    const sushis = this.props.sushis.map(sushi => {
      return <Sushi key ={sushi.id} sushi={sushi} priceHandler={this.props.priceHandler} amount={this.props.amount}/>
    })

    return (
      <Fragment>
        <div className="belt">
          {sushis.slice(this.state.start,this.state.end)}
          <MoreButton clickHandler={this.clickHandler}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
