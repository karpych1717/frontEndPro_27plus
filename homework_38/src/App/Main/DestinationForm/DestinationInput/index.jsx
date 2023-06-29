import { Select, MenuItem } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import actions from '../../../../storage/actions'

function DestinationInput (props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.fetchDestinations())
  }, [])

  const destinations = useSelector(state => state.destinations.items)

  return (
    <Select
      {...props.input}
      displayEmpty
      defaultValue=''
      sx={{ width: 300, margin: '0.1rem' }}
    >
      <MenuItem disabled value=''>
        <em>Destination</em>
      </MenuItem>

      {destinations.map(item =>
        <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>
      )}
    </Select>
  )
}

export default DestinationInput
