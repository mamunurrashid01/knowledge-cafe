import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';
const Blogs = ({addBookMarkshandle}) => {
    const [blogs, setBlogs] = useState([]);

            useEffect( () => {
                fetch('Blog.json')
                .then(res => res.json())
                .then(data => setBlogs(data))
            }, [])
    return (
        <div className="w-2/3">
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    addBookMarkshandle ={addBookMarkshandle}
                    blog={blog}>
                    </Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    addBookMarkshandle: PropTypes.func,

}
export default Blogs;