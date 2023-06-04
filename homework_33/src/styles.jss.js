import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  '@global': {
    body: {
      backgroundColor: 'black',
      margin: '0'
    }
  },
  toDoApp: {
    backgroundColor: 'rgb(0, 0, 60)',
    color: 'rgb(79, 163, 88)',
    margin: '1em 2em',
    padding: '1em 2em'
  },
  mainHeader: { fontSize: '5em' },
  toDoForm: { display: 'flex', margin: '1em 0' },
  mainInput: {
    flex: 1,
    fontSize: '1em',
    border: 'none',
    padding: '0.5em',
    margin: '0.3em'
  },
  invalidField: { backgroundColor: 'rgb(255, 74, 74)' },
  inputButton: {
    fontSize: '1em',
    backgroundColor: 'rgb(73, 180, 145)',
    border: 'none',
    padding: '0.5em',
    margin: '0.3em',
    '&hover': { backgroundColor: 'rgb(137, 204, 182)' },
    '&active': { backgroundColor: 'rgb(0, 255, 170)' }
  },
  toDoItem: {
    display: 'flex',
    backgroundColor: 'rgb(0, 0, 100)',
    color: 'rgb(207, 255, 201)',
    borderRadius: '0.5em',
    padding: '0.5em 0.8em',
    margin: '0.5em 1em'
  },
  itemSpan: { flex: 1 },
  textInput: { flex: 1 },
  itemButton: { margin: '0.1em' },
  striked: { textDecoration: 'line-through' }
})

export default useStyles
