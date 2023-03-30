import { useEffect, useState } from 'react'
import './App.css'
import Card from './component/BlogCard/Card'
import Header from './component/Header/Header'
import Sidebar from './component/Sidebar/Sidebar'

function App() {
  const [data, setData] = useState([]);

  // fetching json data
  useEffect(() => {
    fetch(`data.json`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <div className='grid grid-cols-2'>
        <div className=''>
          {
            data.map(singleData => <Card singleData={singleData} key={singleData.id} />)
          }
        </div>
        <div>
          <Sidebar></Sidebar>
        </div>
      </div>
    </div >
  )
}

export default App
