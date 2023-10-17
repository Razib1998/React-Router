import { Link } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const Post = ({post}) => {
    // eslint-disable-next-line react/prop-types
    const {id,title} = post
    return (
        <div className="border p-6 bg-red-500 rounded-lg">
            <h4>Id: {id}</h4>
            <h1>Title: {title}</h1>
            <Link to = {`/post/${id}`}>
                <button>Post Details</button>
            </Link>
        </div>
    );
};

export default Post;