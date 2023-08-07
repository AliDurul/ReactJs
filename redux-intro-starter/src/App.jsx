import "./App.css"
import Counter from "./components/counter/Counter"
import Todo from "./components/todo/Todo"
import { Provider } from "react-redux"
import { store } from "./store"



function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  )
}

export default App
