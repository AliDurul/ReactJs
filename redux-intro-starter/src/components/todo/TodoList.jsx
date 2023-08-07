import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"

const TodoList = () => {

  const {todoList} = useSelector((state)=>state.todoReducer)

/* 
  const handleClearList = () => {
    dispatch(clearTodo())
  } */

  return (
    <div>
      <div>
        {todoList?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button  className="clear-button">
          Clear
        </button>
      </div>
    </div>
  )
}

export default TodoList
