import React from 'react'
import { connect } from 'react-redux'
import { addTodo, saveTodo, changeLabel } from '../actions'
import PropTypes from 'prop-types'


const mapStateToProps = (state) => ({
 id:state.editlist.id,
 text:state.editlist.text,
 flag:state.editlist.flag  
})

let AddTodo = ({ dispatch, id=0, text='', flag = false}) => {
  let input
  let btnLabel
  btnLabel = flag === true ? 'Save' : 'Add Todo'
   
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }

          if (flag === true){
            dispatch(saveTodo(input.value, id))
            dispatch(changeLabel())
          }else{
            dispatch(addTodo(input.value))     
          }
          input.value = ''
 

      }}>
        <input ref={node => {
          input = node
          if(input != null){
            input.value = text
          }
        }} />
        <button type="submit">
          {btnLabel}
        </button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
id:PropTypes.number.isRequired,
text:PropTypes.string.isRequired,
flag:PropTypes.bool.isRequired
}


AddTodo = connect(
  mapStateToProps
)(AddTodo)

export default AddTodo
