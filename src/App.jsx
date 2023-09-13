
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/header/Header'
import Bookmarks from './components/main/Bookmarks'

function App() {
const [bookmarks, setBookmarks] = useState([]);

const addBookMarkshandle = blog =>{
const newBookmarks = [...bookmarks, blog];
setBookmarks(newBookmarks);
}
  return (
    <>
      <Header></Header>
      <div className='md:flex justify-between'>
      <Blogs addBookMarkshandle={addBookMarkshandle}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
