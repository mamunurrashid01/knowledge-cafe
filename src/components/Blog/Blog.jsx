import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, addBookMarkshandle, handleReadinTime }) => {
    const {title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-10'>
            <img src={cover} alt="" />
            <div className='flex justify-between items-center mt-4'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img  className='w-24' src={author_img} alt="" />
                    </div>
                    <div className='ml-4'>
                    <h4 className='text-xl font-semibold'>{author}</h4>
                    <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} mins read</span>
                    <button onClick={() => addBookMarkshandle(blog)} 
                     className='ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-3xl font-medium'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href='' > #{hash}</a></span>)
                }
            </p>
            <button onClick={() =>handleReadinTime(reading_time)} className='text-fuchsia-600'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    addBookMarkshandle: PropTypes.func,
    handleReadinTime:PropTypes.func,
}
export default Blog;