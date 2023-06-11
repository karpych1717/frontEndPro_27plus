import { useSelector } from 'react-redux'
import styles from './styles.module.css'

function Card (props) {
  const responce = useSelector(store => store.body)
  console.log(responce)
  console.log(typeof responce.data)

  return (
    <div className={styles.responceContainer}>
      <span className={styles.meta}>{responce.request}</span>
      <span className={styles.code}>{JSON.stringify(responce.data, null, 2)}</span>
    </div>
  )
}

export default Card
