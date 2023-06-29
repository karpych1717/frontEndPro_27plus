import { useSelector } from 'react-redux'

function Hotels () {
  const hotels = useSelector(state => state.hotels.items)

  return (
    <div>
      {hotels.map(hotel =>
        <div key={hotel.id}>
          <img width='100' height='100' alt='hotel pic' />
          <span>{hotel.name}</span>
        </div>
      )}
    </div>
  )
}

export default Hotels
