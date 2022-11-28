import { BULK_EDIT } from '../constants'
const initialState = {
    bulkEditData : []
}
export default function bulkEdit(state = [], action) {
    switch (action.type) {
        case BULK_EDIT:
            console.warn("reducer for bulk edit ",action,state)
            return [
                {bulkEditData: action.data}
            ]
        default:
            return state
    }


}
