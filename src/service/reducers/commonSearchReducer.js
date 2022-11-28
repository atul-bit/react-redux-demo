import { COMMON_SEARCH } from '../constants'
const initialState = {
    searchData : []
}
export default function commonSearchResult(state = [], action) {
    switch (action.type) {
        case COMMON_SEARCH:
            console.warn("reducer for common search",action,state)
            return [
                {searchData: action.data}
            ]
        default:
            return state
    }


}
