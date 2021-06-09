import { useAppDispatch, useAppSelector } from '../../app/hooks'
// import { RootState } from '../../app/store'
import { decrement, incrementAsync, selectCount } from './counterSlice'

export function Counter (): React.ReactElement {
  const count = useAppSelector(selectCount)
  // const countPlusTwo = useAppSelector(state => state.counter.value + 2)
  const dispatch = useAppDispatch()

  function handleIncrement () {
    dispatch(incrementAsync(1))
  }

  function handleDecrement () {
    dispatch(decrement())
  }

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
