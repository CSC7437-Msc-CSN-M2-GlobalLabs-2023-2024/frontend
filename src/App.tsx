import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col place-content-center place-items-center gap-16 w-full">
      <p>Welcome to the global lab frontend template!</p>
      <button className="flex bg-blue-400 w-fit p-2 rounded-lg" onClick={() => setCount(count + 1)}>Click me {count}</button>
    </div>
  )
}

export default App
