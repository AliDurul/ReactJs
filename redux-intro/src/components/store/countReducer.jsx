
export const INC = 'INC'
export const DEC = 'DEC'
export const CLR = 'CLR'


const initialState = {
    count: 0

}


export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return { count: state.count + 1 }
        case DEC:
            return { count: state.count - 1 }
        case CLR:
            return { count: 0 }

        default:
            return state
    }
}