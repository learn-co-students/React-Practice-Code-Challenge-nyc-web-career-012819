import React from 'react'

const MoreButton = (props) => {
    return <button onClick={()=> props.fetchSushi()}>
            More sushi!
          </button>
}

export default MoreButton
