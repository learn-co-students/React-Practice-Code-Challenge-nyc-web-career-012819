import React, { Fragment } from 'react';

const Sushi = (props) => { 
  return (
    <Fragment>
      <div className="sushi">
        <div className="plate" onClick={() => props.clickHandler(props.attr.id, props.attr.price)}>
          { props.isEaten ? null : <img src={props.attr.img_url} width="100%" alt="sushi" /> }
        </div>
        <h4 className="sushi-details">{props.attr.name} - ${props.attr.price}</h4>
      </div>
    </Fragment>
  )
}

export default Sushi;