import { useEffect, useState } from 'react'
import './App.css'
import Card from './component/BlogCard/Card'
import Header from './component/Header/Header'
import Sidebar from './component/Sidebar/Sidebar'

function App() {
  const [data, setData] = useState([]);
  const [readingTime, setReadingTime] = useState([])

  // fetching json data
  useEffect(() => {
    fetch(`data.json`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  // const previousTime = [];

  const addTime = (readingTime) => {
    const previousTime = JSON.parse(localStorage.getItem('readingTime'));
    if (previousTime) {
      const total = readingTime + previousTime;
      localStorage.setItem('readingTime', total);
      setReadingTime(total)
    }
    else {
      localStorage.setItem('readingTime', readingTime)
      setReadingTime(readingTime)
    }
    // setReadingTime(readingTime)
  }


  return (
    <div className="App">
      <Header></Header>
      <div className='grid grid-cols-2'>
        <div className=''>
          {
            data.map(singleData => <Card addTime={addTime} singleData={singleData} key={singleData.id} />)
          }
        </div>
        <div>
          <Sidebar readingTime={readingTime}></Sidebar>
        </div>
      </div>
    </div >
  )
}

export default App
