import { useState } from 'react'
import Routers from './routes/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routers />
    </div>
  )
}

export default App
