export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CLEAR_TODO = 'CLEAR_TODO'

const initialState = {
    todoList: [{
        id: new Date().getTime(),
        text: "", 
        complated: false
    }]
}

export  const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case first:
            return { ...state, ...payload }

        default:
            return state
    }
}
