import {combineReducers} from 'redux'
import cardItems from './reducer'
import commonSearchResult from './commonSearchReducer'
import bulkEdit from './bulkEdit'
export default combineReducers({
    cardItems,
    commonSearchResult,
    bulkEdit
})