import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // 1. The Add Action
        addItem: (state, action) => {
            state.items.push(action.payload)

        },
        removeItem: (state, action) => {
            state.items.splice(action.payload, 1)


        }
    }
})


export const { addItem, removeItem } = cartSlice.actions


export default cartSlice.reducer
