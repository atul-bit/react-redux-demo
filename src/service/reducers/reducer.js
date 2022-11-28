import { ADD_TO_CART,REMOVE_FROM_CART,COMMON_SEARCH } from '../constants'
const initialState = {
    cardData: [],
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("reducer of add to cart",action,state)
            return [
                ...state,
                {cardData: action.data}
            ]
        case REMOVE_FROM_CART:
            console.warn("reducer for remove cart",action,state)
            state.pop();
            return [
                ...state,
            ]
        default:
            return state
    }


}
