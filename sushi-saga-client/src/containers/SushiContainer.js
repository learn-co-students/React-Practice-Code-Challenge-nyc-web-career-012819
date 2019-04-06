import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {


  render() {
    const fourSushisArr = this.props.sushis.map(sushiObj => {
        return <Sushi key={sushiObj.id} cash={this.props.cash} sushi={sushiObj} eaten={this.props.eaten}/>
      })

    return (
      <Fragment>
        <div className="belt">
          {
            fourSushisArr
          }
          <MoreButton moreSushi={this.props.moreSushi}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
