import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData()
    console.log(post)
    const {body,id} = post;
    const navigate = useNavigate()

    const handelGoBack = () =>{
      navigate(-1)
    }

    return (
        <div>
            <h2>Id: {id}</h2>
            <h2>Body: {body}</h2>
            <button onClick={handelGoBack}>Go Home</button>
            
        </div>
    );
};

export default PostDetails;