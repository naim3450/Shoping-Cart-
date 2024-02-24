import React, { useEffect, useReducer } from 'react'
import RemoveContext from './RemoveContext'
import { reducer } from './reducer'
import { dataa } from './data'



const initialState = {
    item: dataa,
    totalItem: 0,
    totalAmount: 0,
    // totalAmount: 0,
}

const RemoveState = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // For remove item
    const Removerbtn = (id) => {
        return dispatch({
            type: 'REMOVE_BTN',
            payload: id,
        })
    }
    // For remove item

    // For Clear_Cart
    const Clear_Cart = () => {
        return dispatch({
            type: "CLEAR_CART"
        })
    }
    // For Clear_Cart

    // For Increment
    const Increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        })
    }
    // For Increment

    // For Decrement
    const Decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id,
        })
    }
    // For Decrement


    // That part work for update data 
    useEffect(() => {
        dispatch({ type: "GET_TOTAL" })
    }, [state.item])
    // That part work for update data 


    return (
        <RemoveContext.Provider value={{ ...state, Removerbtn, Clear_Cart, Increment, Decrement }}>
            {children}
        </RemoveContext.Provider>
    )
}

export default RemoveState
