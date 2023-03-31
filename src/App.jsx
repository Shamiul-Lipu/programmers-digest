import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import './App.css'
import Card from './component/BlogCard/Card'
import Header from './component/Header/Header'
import Sidebar from './component/Sidebar/Sidebar'
import 'react-toastify/dist/ReactToastify.css'
import Blog from './component/BlogQuestions/Blog'

function App() {
  const [data, setData] = useState([]);
  const [readTime, setReadingTime] = useState([]);
  const [time, setTime] = useState([])
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
  // const addTime = (readingTime) => {
  //   const previousTime = JSON.parse(localStorage.getItem('readingTime'));
  //   if (previousTime) {
  //     const total = readingTime + previousTime;
  //     localStorage.setItem('readingTime', total);
  //     setReadingTime(total)
  //   }
  //   else {
  //     localStorage.setItem('readingTime', readingTime)
  //     setReadingTime(readingTime)
  //   }
  // }
  const addTime = (readingTime) => {
    let previousTime = [...readTime, readingTime];
    const newTime = previousTime.reduce((a, c) => a + c, 0)
    setReadingTime(previousTime);
    setTime(newTime)
    // console.log("sdf", previousTime, newTime);
  }


  // add bookmark blog
  const addBookmark = (id, blogTitle) => {
    const arr = [...bookmarked, id, blogTitle]
    // toast
    const found = bookmarked.find(e => e === id)
    if (found == id) {
      toast("You Have Already Bookmarked This Blog!");
      return;
    }
    const blogs = [...blogTitl, blogTitle]
    setBlogTitle(blogs)
    setBookmarked(arr);
  }


  return (
    <div className="App container mx-auto">
      <Header></Header>
      <div className='grid sm:grid-cols-1 md:flex px-2'>
        <div className='sm:w-3/4 md:w-full'>
          {
            data.map(singleData => <Card addBookmark={addBookmark} addTime={addTime} singleData={singleData} key={singleData.id} />)
          }
        </div>
        <div className='sm:w-3/4 md:w-2/4 p-2'>
          <Sidebar bookmarked={bookmarked} blogTitl={blogTitl} time={time} ></Sidebar>
        </div>
      </div>
      <div>
        <Blog></Blog>
      </div>
      <ToastContainer></ToastContainer>
    </div >
  )
}

export default App
