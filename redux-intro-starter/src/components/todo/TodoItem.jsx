import okLogo from "../../assets/ok.png"
import deleteLogo from "../../assets/delete.png"
import { useDispatch } from "react-redux"
import { deleteTodo, toggleTodo } from "../../store/todoReducer"

const TodoItem = ({ completed, text, id }) => {

  const dispatch = useDispatch()


  const handleToggle = (id) => {
    dispatch(toggleTodo(id))
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "orange",
    borderRadius: "5px",
  }

  return (
    <div style={styled} className="todo-list">
      <h2 className="todoText">{text}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
            onClick={()=>handleToggle(id)}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            onClick={()=>handleDelete(id)}
          />
        </span>
      </div>
    </div>
  )
}

export default TodoItem
