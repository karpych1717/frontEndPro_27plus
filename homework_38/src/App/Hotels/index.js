import { useSelector } from 'react-redux'
import { Box } from '@mui/system'

function Hotels () {
  const hotels = useSelector(state => state.hotels.items)

  return (
    <Box sx={{ paddind: '1rem', margin: '1rem 5rem' }}>
      {hotels.map(hotel =>
        <div key={hotel.id}>
          <img width='100' height='100' alt='hotel pic' />
          <span>{hotel.name}</span>
        </div>
      )}
    </Box>
  )
}

export default Hotels
