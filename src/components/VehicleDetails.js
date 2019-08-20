import React from 'react'
import PropTypes from 'prop-types'

const VehiclePage = ({ match }) => (
  <div>
    Vehicle id {match.params.id}
  </div>
)
VehiclePage.propTypes = {
  match: PropTypes.object,
}
export default VehiclePage
