import { Select, MenuItem } from '@mui/material'

function DestinationInput () {
  return (
    <Select
      displayEmpty
      value=''
      onChange={() => console.log('uwu')}
      sx={{ width: 300, margin: '0.1rem' }}
    >
      <MenuItem disabled value=''>
        <em>Destination</em>
      </MenuItem>
      <MenuItem value={10}>sfldgsndgsd</MenuItem>
      <MenuItem value={20}>Twentydfgsfd</MenuItem>
      <MenuItem value={30}>Thirtysdgsf</MenuItem>
    </Select>
  )
}

export default DestinationInput
