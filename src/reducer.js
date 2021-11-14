export const initialState = {
    cartCount: 0
}

export const actionTypes = {
    ADD_ITEM: "ADD_ITEM"
}

const reducer = (state, action) => {
    console.log(action)
    debugger
    switch(action.type){
        case "ADD_ITEM":
            return {
                ...state,
                cartCount: state.cartCount + action.cartCount
            }
        default: return state
    }
    
}

export default reducer