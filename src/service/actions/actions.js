//Actions are used to store the data in redux store
//importing name of the key stored in the store

import {ADD_TO_CART, REMOVE_FROM_CART,COMMON_SEARCH} from '../constants'
import Axios from 'axios'

//name of the function to store the data in redux store with its type name and data

export const addToCart =(data)=>{
    console.warn("action in add to cart",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}

export const removeFromCart =()=>{
    console.warn("action in remove cart")
    return {
        type:REMOVE_FROM_CART,
    }
}





