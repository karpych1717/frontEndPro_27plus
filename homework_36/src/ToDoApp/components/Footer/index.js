import { useDispatch, useSelector } from 'react-redux'
import { selectAmount } from '../../../storage/selectors'
import { thunkClearAll } from '../../../storage/thunks'

import styles from './styles.module.css'

function Footer () {
  const amount = useSelector(selectAmount)
  const dispatch = useDispatch()

  return (
    <div className={styles.footer}>
      <span>You have {amount}</span>
      <br />
      <button onClick={handleClearAll}>Clear all</button>
    </div>
  )

  function handleClearAll () {
    dispatch(thunkClearAll)
  }
}

export default Footer
