import { useDispatch, useSelector } from "react-redux"
import TodoItem from "./TodoItem"
import { clearTodo } from "../../features/todoSlice"

const TodoList = () => {
  const dispatch = useDispatch()

  const { todoList } = useSelector(state => state.todo)

  const handleClearList = () => dispatch(clearTodo())


  return (
    <div>
      <div>
        {todoList?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        {
          todoList.length !== 0 &&  <button onClick={handleClearList} className="clear-button">
            Clear
          </button>
        }
      </div>
    </div>
  )
}

export default TodoList
