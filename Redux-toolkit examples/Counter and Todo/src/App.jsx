import { Provider } from "react-redux"
import "./App.css"
import Counter from "./components/counter/Counter"
import Todo from "./components/todo/Todo"
import { store } from "./app/store"

function App() {
  return (
    <div className="app">
      <Provider store={store} >
        <Counter />
        <Todo />
      </Provider>
    </div>
  )
}

export default App
