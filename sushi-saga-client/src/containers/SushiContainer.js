import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    startPos: 0,
    endPos: 4
  }

  handleClick = () => {
    if(this.state.endPos >= this.props.sushis.length){
      this.setState({startPos: 0, endPos: 4})
    } else {
      this.setState({startPos: (this.state.startPos + 4), endPos: (this.state.endPos + 4)})
    }
  }


  render(){

    const sushis = this.props.sushis.map((sushiObj) => {
      if (this.props.plates.includes(sushiObj)) {
        return <div className="plate" >{null}</div>;
      } else {
        return <Sushi
          key={sushiObj.id}
          sushi={sushiObj}
          handlePrice={this.props.handlePrice}
          amount={this.props.amount}
          />
      }
    })

    return (
      <Fragment>
        <div className="belt">
          {sushis.slice(this.state.startPos, this.state.endPos)}
          <MoreButton handleClick={this.handleClick} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
