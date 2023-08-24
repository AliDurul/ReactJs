import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todoList: [
    {id: nanoid(), text:'study redux toolkit', completed:false},
  ]
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state,action) => {
      state.todoList.push( {id: nanoid(), text:action.payload, completed:false})
    },
    clearTodo: (state) => {
      state.todoList = []
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(item=> item.id !== action.payload)
    }
  }
});






export const {addTodo,clearTodo,deleteTodo} = todoSlice.actions

export default todoSlice.reducer