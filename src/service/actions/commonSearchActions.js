import {COMMON_SEARCH} from '../constants'
import Axios from 'axios'

export const commonSearch = (search) =>{
    return (dispatch) => {
        return Axios.get(search).then((response) =>{
            console.log("action in commonSearch",response)
            dispatch({
                type : COMMON_SEARCH,
                data : response.data
            })
        })
    }
}