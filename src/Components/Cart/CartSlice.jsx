import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem('cartTotal') ? JSON.parse(localStorage.getItem('cartTotal')) : [],
}

export const counterSlice = createSlice({
  name: 'cartDetails',
  initialState,
  reducers: {
    cartTotal: (state, action) => {
      const index = state.value.findIndex((item) => item.id == action.payload.id);
      if(index == -1) {
        state.value.push(action.payload);
      }
    },
  },
})


export const { cartTotal, updateCartItem } = counterSlice.actions

export default counterSlice.reducer