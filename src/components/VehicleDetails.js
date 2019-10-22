import React from 'react'
import PropTypes from 'prop-types'
import VehicleStats from '../containers/VehicleStats'

const VehiclePage = ({ match }) => (
  <div>
    Vehicle id {match.params.id}
    <VehicleStats vehicleId={match.params.id} />
  </div>
)
VehiclePage.propTypes = {
  match: PropTypes.object,
}
export default VehiclePage
