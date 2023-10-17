import { Link, useNavigate } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const Post = ({post}) => {
    // eslint-disable-next-line react/prop-types
    const {id,title} = post
    const navigate = useNavigate()

    const handelShowDetail = () =>{
      navigate(`/post/${id}`)
    }
    return (
        <div className="border p-6 bg-red-500 rounded-lg">
            <h4>Id: {id}</h4>
            <h1>Title: {title}</h1>
            <Link to = {`/post/${id}`}>
                <button>Post Details</button>
            </Link> 
            <button onClick={handelShowDetail} className="ml-6">Click To See details</button>
        </div>
    );
};

export default Post;