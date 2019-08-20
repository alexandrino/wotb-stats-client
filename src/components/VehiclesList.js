import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import VehicleDetails from './VehicleDetails'

const List = styled.ul`
  display: flex;
  flex-flow: wrap;
`
const ListItem = styled.li`
  list-style: none;
  text-align: center;
  width: 33%;
  & img {
    width: 200px;
  }
  & a {
    text-decoration: none;
  }
  & p {
    margin: 0;
  }
`


const VehiclesList = ({ vehicles, match }) => (
  <Router>
      <Route path={`${match.path}/:id`} component={VehicleDetails} />
      <List>
        {
          vehicles.map(({ vehicleId, images, name }) => {
            const imgs = images ? JSON.parse(images) : null
            return (
              <ListItem key={vehicleId}>
                <Link to={`${match.url}/${vehicleId}`}>
                  {
                    imgs && <img src={imgs.preview} alt="" />
                  }
                  <p>{ name }</p>
                </Link>
              </ListItem>
            )
          })
        }
      </List>
    </Router>
)
VehiclesList.propTypes = {
  vehicles: PropTypes.array,
}

export default VehiclesList
