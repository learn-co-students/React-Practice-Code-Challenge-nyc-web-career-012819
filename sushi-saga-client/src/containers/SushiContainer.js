import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  let sushis = props.sushis.map(sushiObj => (
    <Sushi
      key={sushiObj.id}
      sushi={sushiObj}
      eaten={props.eaten}
      wallet={props.wallet}
      subtractWallet={props.subtractWallet}
    />))
  return (
    <Fragment>
      <div className="belt">
        {sushis}
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer