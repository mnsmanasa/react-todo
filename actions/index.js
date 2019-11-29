let nextTodoId = 0

export const addTodo = (text,description) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,description
})

export const toggleTodo = id =>{
  type:'TOGGLE_TODO',
  id
}