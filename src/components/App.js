import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from '../pages/HomePage'
import StatsPage from '../pages/StatsPage'
import VehiclesPage from '../pages/PlayerVehicles'

const Container = styled.div`
  width: 100%;
`
const List = styled.ul`
  display: flex;
  & li {
    margin: 0 20px;
  }
`

const App = () => (
  <Container>
    <h1>World of Tanks blitz Stats</h1>
    <Router>
      <List>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/stats">Stats</Link></li>
        <li><Link to="/vehicles">Vehicles</Link></li>
      </List>
      <Route path="/" exact component={HomePage} />
      <Route path="/stats" component={StatsPage} />
      <Route path="/vehicles" component={VehiclesPage} />
    </Router>
  </Container>
)

export default App
