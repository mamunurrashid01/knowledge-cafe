import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-slate-50 my-2 rounded-lg pl-4 py-3">
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object,
}
export default Bookmark;