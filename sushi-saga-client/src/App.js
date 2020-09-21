import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiList: [],
    money: 100,
    eaten: []
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushi => this.setState({sushiList: sushi}))
  }

  addToEaten = (obj) => {
    if (this.state.money >= obj.price) {
      this.setState({
        eaten: [...this.state.eaten, obj],
        money: this.state.money - obj.price
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiList={this.state.sushiList} addToEaten={this.addToEaten} eatenList={this.state.eaten}/>
        <Table money={this.state.money} eatenList={this.state.eaten} />
      </div>
    );
  }
}

export default App;