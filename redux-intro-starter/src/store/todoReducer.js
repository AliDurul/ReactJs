const ADD = "ADD";
const DEL = "DEL";
const TOG = "TOG";
const CLR = "CLR";

export const addTodo = (payload) => ({ type: ADD, payload });
export const deleteTodo = (payload) => ({ type: DEL, payload });
export const clearTodo = () => ({ type: CLR });
export const toggleTodo = (payload) => ({ type: TOG , payload});

const initialState = {
  todoList: [
    { id: new Date().getTime(), text: "work redux", completed: false },
  ],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case DEL:
      return { 
        todoList : state.todoList.filter(item=> item.id !== payload)
      };
    case TOG:
      return {
        todoList: state.todoList.map((item) =>
          item.id === payload ? { ...item, completed: !item.completed } : item
        ),
      };
    case CLR:
      return {
        todoList: [],
      };

    default:
      return state;
  }
};
