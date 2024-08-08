import { createSlice} from '@reduxjs/toolkit'

function findTheIndex(state,action) {
    const indexNumber = state.findIndex((item) => item.id === action.payload.id)
    return indexNumber
}
const slice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addCartItem(state,action) {
            const indexNumber = findTheIndex(state,action)
            if(indexNumber === -1) {
                state.push({...action.payload, quantity : 1})
            }
            else{
                state[indexNumber].quantity += 1
            }
        },
        increaseCartItem(state,action) {
            const indexNumber = findTheIndex(state,action)
            state[indexNumber].quantity += 1
        },
        decreaseCartItem(state,action) {
            const indexNumber = findTheIndex(state,action)
            state[indexNumber].quantity -= 1
            if(state[indexNumber].quantity === 0) {
                state.splice(indexNumber,1)
            }
        },
        removeCartItem(state,action) {
            const indexNumber = findTheIndex(state,action)
            state.splice(indexNumber,1)
        },
        updateAllcartItems(state,action) {
            state.loading = false
            state.push(action.payload)
            state.error = ''
        },
        cartItemsError(state,action) {
            state.loading = false
            state.error = 'Something went wrong'
        }
    }
})
export const {
    addCartItem,
    increaseCartItem,
    decreaseCartItem,
    removeCartItem,
    updateAllcartItems,
    cartItemsError
} = slice.actions

export default slice.reducer


  