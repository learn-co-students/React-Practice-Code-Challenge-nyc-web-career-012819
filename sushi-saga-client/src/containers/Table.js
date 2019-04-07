import React, { Fragment } from 'react'

class Table extends React.Component {

  renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  render() {
    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${this.props.total} remaining!
        </h1>
        <div className="table">
          <div className="stack">
            {this.renderPlates(this.props.plates)}
          </div>
        </div>
      </Fragment>
    )
  }

}

export default Table
