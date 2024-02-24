export const reducer = (state, action) => {

    // For remove item
    if (action.type == "REMOVE_BTN") {
        return {
            ...state,
            item: state.item.filter((currentElm) => {
                return currentElm.id !== action.payload
            })
        }
    }
    // For remove item

    // For Clear_Cart
    if (action.type == "CLEAR_CART") {
        return {
            ...state,
            item: []
        }
    }
    // For Clear_Cart

    // For Increment
    if (action.type == "INCREMENT") {
        return {
            ...state,
            item: state.item.map((currentElm) => {
                if (currentElm.id == action.payload) {
                    return {
                        ...currentElm,
                        quantity: currentElm.quantity + 1
                    }
                }
                return currentElm;
            })
        }
    }
    // For Increment

    // For Decrement
    if (action.type == "DECREMENT") {
        return {
            ...state,
            item: state.item.map((currentElm) => {
                if (currentElm.id == action.payload) {
                    return {
                        ...currentElm,
                        quantity: currentElm.quantity--
                    }
                }
                return currentElm;
            }).filter((GetRemove) => {
                return (
                    GetRemove.quantity !== 0
                )
            })
        }
    }
    // For Decrement

    // That part work for update data
    if (action.type === "GET_TOTAL") {
        let { totalItem,totalAmount } = state.item.reduce((accumlator, curValue) => {

            let { quantity } = curValue
            let { price } = curValue

            accumlator.totalItem += quantity

            let updatemount = price*quantity

            accumlator.totalAmount += updatemount
            return accumlator

        }, {
            totalItem: 0,
            totalAmount: 0,
        })
        //   {totalItem: 0} this part my initialValu
        return {
            ...state, 
            totalItem,
            totalAmount,
        };
    }
    // That part work for update data
}

