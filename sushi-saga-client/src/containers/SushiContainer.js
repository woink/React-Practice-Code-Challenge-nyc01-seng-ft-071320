import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    sushIndex1: 0,
    sushIndex2: 4
  }

  renderSushi = () => {
    return this.props.sushiList.map(el =>
      <Sushi key={el.id} sush={el} eatenList={this.props.eatenList} addToEaten={this.props.addToEaten} />
    )
  }

  incrementSushiIndex = () => {
    this.setState(() => ({
      sushIndex1: this.state.sushIndex1 + 4,
      sushIndex2: this.state.sushIndex2 + 4
    }))
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.renderSushi().slice(this.state.sushIndex1, this.state.sushIndex2)}
          <MoreButton incrementSushiIndex={this.incrementSushiIndex}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer