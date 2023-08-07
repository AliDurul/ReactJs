const ADD = "ADD";
const DEL = "DEL";
const TOG = "TOG";
const CLR = "CLR";

export const addTodo = (payload) => ({ type: ADD, payload});
export const deleteTodo = () => ({ type: DEL });
export const clearTodo = () => ({ type: CLR });
export const toggleTodo = () => ({ type: TOG });

const initialState = {
  todoList: [
    { id: new Date().getTime(), text: "work redux", completed: false },
  ],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return { 
        todoList: [...state.todoList , { id: new Date().getTime(), text: payload, completed: false }]
       };
    case DEL:
      return { count: state.count - 1 };
    case TOG:
      return { count: 0 };
    case CLR:
      return { count: 0 };

    default:
      return state;
  }
};
