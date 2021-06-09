import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { useAppDispatch } from '../../app/hooks'

interface CounterState {
  value: number
}

const initialState: CounterState = { value: 0 }

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },

    decrement: state => {
      state.value -= 1
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

type IncrementAsync = (amount: number) => (dispatch: ReturnType<typeof useAppDispatch>) => Promise<void>

export const incrementAsync: IncrementAsync = amount => async dispatch => {
  const sleep = (ms: number): Promise<void> => new Promise(r => setTimeout(r, ms))
  await sleep(1000)
  dispatch(incrementByAmount(amount))
}


export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
