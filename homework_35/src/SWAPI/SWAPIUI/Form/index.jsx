import styles from './styles.module.css'

import { useDispatch } from 'react-redux'
import { swapiSlice } from '../../store'

const defaultRequest = '/people/1/'

function Form () {
  const dispatch = useDispatch()

  function handleSubmit (event) {
    event.preventDefault()

    const request = event.target[0].value || defaultRequest

    fetch(new URL(`/api/${request}`, 'https://swapi.dev'), { method: 'GET' })
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }

        throw new Error('Something went wrong')
      })
      .then(data => {
        dispatch(swapiSlice.actions.fill({ request, data }))
      })
      .catch(error => {
        dispatch(swapiSlice.actions.fill({ request, data: error.message }))
      })

    event.target[0].value = ''
  }

  return (
    <form className={styles.swapi_form} onSubmit={handleSubmit}>
      <label className={styles.swapi_label}>
        <span>https://swapi.dev/api</span>
        <input className={styles.swapi_input} type='text' name='url' placeholder={defaultRequest} />
      </label>
      <button type='submit'>Get info</button>
    </form>
  )
}

export default Form
