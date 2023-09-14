
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/header/Header'
import Bookmarks from './components/main/Bookmarks'

function App() {
const [bookmarks, setBookmarks] = useState([]);
const [readingTime, setReadingTime] = useState(0);

const addBookMarkshandle = blog =>{
const newBookmarks = [...bookmarks, blog];
setBookmarks(newBookmarks);
}
const handleReadinTime = time => {
  setReadingTime( readingTime + time);
}
  return (
    <>
      <Header></Header>
      <div className='md:flex justify-between'>
      <Blogs addBookMarkshandle={addBookMarkshandle} handleReadinTime={handleReadinTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
