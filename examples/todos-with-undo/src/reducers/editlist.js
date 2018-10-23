const editlist = (state = [], action) => {
    console.log(action)
    switch (action.type) {
      case 'EDIT_TODO':
        return {
            id:action.id,
            text:action.text,
            flag: true
        }
      case 'CHANGE_TYPE':
        return{
            flag:false
        }
      default:
        return state
    }
  }
  
  export default editlist
  