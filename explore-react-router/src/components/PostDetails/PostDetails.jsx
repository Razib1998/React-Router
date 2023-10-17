import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData()
    console.log(post)
    const {body} = post;

    return (
        <div>
            <h2>Body: {body}</h2>
        </div>
    );
};

export default PostDetails;