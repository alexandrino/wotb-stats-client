import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './HomePage'
import VehiclePage from './VehiclePage'

const Container = styled.div`
  width: 100%;
`

const App = () => (
  <Container>
    <h1>App</h1>
    <Router>
      <Link to="/">Home</Link>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/vehicle" component={VehiclePage} />
    </Router>
  </Container>
)

export default App
