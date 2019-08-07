import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const VehiclesList = ({ vehicles }) => (
  <Router>
      <ul>
        {
          vehicles.map(({ vehicleId, images, name }) => {
            const imgs = images ? JSON.parse(images) : null
            return (
              <li key={vehicleId}>
                <Link to={'/vehicle'}>
                  {
                    imgs && <img src={imgs.preview} alt="" />
                  }
                  <p>{ name }</p>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </Router>
)
VehiclesList.propTypes = {
  vehicles: PropTypes.array,
}

export default VehiclesList
