import {BULK_EDIT} from '../constants'

export const bulkEdit =(data)=>{
    console.warn("action in bulk edit",data)
    return {
        type:BULK_EDIT,
        data:data
    }
}
