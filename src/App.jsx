import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import './App.css'
import Card from './component/BlogCard/Card'
import Header from './component/Header/Header'
import Sidebar from './component/Sidebar/Sidebar'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [data, setData] = useState([]);
  const [readingTime, setReadingTime] = useState([]);
  const [bookmarked, setBookmarked] = useState([])
  const [blogTitl, setBlogTitle] = useState([])

  // fetching json data
  useEffect(() => {
    fetch(`data.json`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  // const previousTime = [];
  // add reading time
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


  // add bookmark blog
  const addBookmark = (id, blogTitle) => {
    const arr = [...bookmarked, id, blogTitle]

    const found = bookmarked.find(e => e === id)
    if (found == id) {
      toast("Wow so easy!");
      return;
    }
    const blogs = [...blogTitl, blogTitle]
    setBlogTitle(blogs)
    setBookmarked(arr);
  }


  return (
    <div className="App">
      <Header></Header>
      <div className='grid grid-cols-2'>
        <div className=''>
          {
            data.map(singleData => <Card addBookmark={addBookmark} addTime={addTime} singleData={singleData} key={singleData.id} />)
          }
        </div>
        <div>
          <Sidebar bookmarked={bookmarked} blogTitl={blogTitl} readingTime={readingTime} ></Sidebar>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div >
  )
}

export default App
