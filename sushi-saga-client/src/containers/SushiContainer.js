import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const fourSushisArr = props.sushis.map(sushiObj => {
      return <Sushi key={sushiObj.id} cash={props.cash} sushi={sushiObj} eaten={props.eaten}/>
    })

  return (
    <Fragment>
      <div className="belt">
        {
          fourSushisArr
        }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
