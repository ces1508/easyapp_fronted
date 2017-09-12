import React, { Component } from 'react';
import Api from '../../api'
import ListApps from '../../components/listapps'

class App extends Component {
  constructor () {
    super()
    this.state = {
      apps: []
    }
  }
  async componentDidMount() {
    let apps = await Api.getApps()
    this.setState({ apps })
  }

  render() {
    return (
      <div className="App">
        <a href = '/apps/new/' className = 'btn btn-success'>
          crear una app
        </a>
        {
          this.state.apps.length > 0 ? (
            <ListApps apps = {this.state.apps} match = {this.props.match} />
          )
        : <h1> aun no tiens niguna app creada, que esperas para crear un una  </h1>
        }
      </div>
    );
  }
}

export default App;
