import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Home from "./Home"
import Album from "./Album"
import Picture from "./Picture"

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/album/:id" component={Album} />
        <Route path="/picture/:id" component={Picture} />
      </div>
    </Router>
  )
}
