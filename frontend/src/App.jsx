import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:8000/api/hello/')
      .then(res => res.json())
      .then(data => setMessage(data.message))
  }, [])

  return <div><header>{message}</header></div>
}

export default App;
