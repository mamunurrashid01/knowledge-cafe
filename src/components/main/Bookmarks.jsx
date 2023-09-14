import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="w-1/3 ml-5 px-8 pt-4 bg-gray-200">
            <div className="mb-3">
            <h1 className="bg-slate-100 rounded-lg pl-4 py-3 text-xl text-purple-600 ">Total reading times: {readingTime} mins</h1>
            </div>
            <h1 className="bg-slate-100 rounded-lg pl-4 py-3 text-xl font-semibold text-purple-600">Bookmarked blogs: {bookmarks.length}</h1>
           <div className="h-auto">
           {
                bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
           </div>
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number,
}
export default Bookmarks;