import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from '@heroicons/react/24/outline'
import { Link, Route, Routes } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './app/hooks'
import {
  decrementCounter,
  incrementCounter,
  selectCounter,
} from './app/slices/counter-slice'

export default function App() {
  const counter = useAppSelector(selectCounter)
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-4">
      <div className="flex items-center gap-2">
        Count is <span className="text-3xl">{counter}</span>
      </div>

      <div className="flex flex-row-reverse gap-4">
        <button className="btn" onClick={() => dispatch(incrementCounter())}>
          <ArrowUpCircleIcon width={32} />
          Increment
        </button>
        <button className="btn" onClick={() => dispatch(decrementCounter())}>
          <ArrowDownCircleIcon width={32} />
          Decrement
        </button>
      </div>

      <Link to="/other" className="text-blue-900 underline hover:text-blue-700">
        Link to other page
      </Link>
      <Link to="/" className="text-blue-900 underline hover:text-blue-700">
        Link to Home
      </Link>

      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/other" element={<p>Other page</p>} />
      </Routes>
    </div>
  )
}
