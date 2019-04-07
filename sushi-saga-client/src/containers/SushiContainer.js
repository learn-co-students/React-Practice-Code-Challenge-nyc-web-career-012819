import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    sushi: [],
    count: 0
  }

  componentDidMount() {
    fetch(this.props.api)
    .then(res => res.json())
    .then(sushi => this.setState({ sushi }))
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({
      count: this.state.count + 4
    })
  }

  render() {

    let sushi = this.state.sushi.slice(this.state.count, (this.state.count + 4)).map(sushiObj => (
      <Sushi key={sushiObj.id} sushi={sushiObj} total={this.props.total} handlePrice={this.props.handlePrice}/>
    ))

    return (
      <Fragment>
        <div className="belt">
          {sushi}
          <MoreButton handleClick={this.handleClick}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
