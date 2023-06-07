import styles from './styles.module.css'

function ToDoItem (props) {
  return (
    <div className={styles.toDoItem}>
      <span
        className={styles.itemSpan}
      >
        {props.body.task}
      </span>
    </div>
  )
}

export default ToDoItem
