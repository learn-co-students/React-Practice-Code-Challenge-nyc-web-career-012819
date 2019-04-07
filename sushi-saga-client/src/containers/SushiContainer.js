import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {
          /*
             Render Sushi components here!
          */
          props.sushis.map(sushi => <Sushi key={sushi.id} {...sushi} eaten={props.eaten}
          eatSushi={props.eatSushi} />)
        }
        <MoreButton fetchSushi={props.fetchSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
