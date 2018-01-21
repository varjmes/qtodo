import React, { Component, Fragment } from "react"
import "../css/App.css"

import Header from "./Header"
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Fragment>
    )
  }
}

export default App
