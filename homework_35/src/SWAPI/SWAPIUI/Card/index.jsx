import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.css'

import { swapiSlice } from '../../store'

function Card (props) {
  const responce = useSelector(store => store.body)
  const dispatch = useDispatch()

  function handleClear () {
    dispatch(swapiSlice.actions.clear())
  }

  return (
    <div className={styles.responceContainer}>
      <span className={styles.meta}>{responce.request}</span>
      <span className={styles.code}>{JSON.stringify(responce.data, null, 2)}</span>
      <button type='button' className={styles.clearButton} onClick={handleClear}>Clear</button>
    </div>
  )
}

export default Card
