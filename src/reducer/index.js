const rootReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USERINPUT':
            return [
                ...state,
                {
                    id: action.id,
                    input: action.input
                }
            ]
        default:
            return state
    }
}

export default rootReducer;