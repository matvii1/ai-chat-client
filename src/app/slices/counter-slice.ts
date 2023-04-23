import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface InitialState {
  counter: number
}

const initialState: InitialState = {
  counter: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter(state) {
      state.counter += 1
    },
    decrementCounter(state) {
      state.counter -= 1
    },
  },
})

export const selectCounter = (state: RootState) => state.counterSlice.counter
export const { incrementCounter, decrementCounter } = counterSlice.actions
export default counterSlice.reducer
