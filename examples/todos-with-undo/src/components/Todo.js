import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, onEditClick }) => (
  <div>
  <span
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </span>
  <button onClick={onEditClick}>Edit</button>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,  
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
