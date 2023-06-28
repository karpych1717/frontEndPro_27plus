import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

function DestinationInput () {
  return (
    <Select
      labelId='demo-simple-select-label'
      id='demo-simple-select'
      value={10}
      label='Age'
      onChange={() => console.log('uwu')}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  )
}

export default DestinationInput
