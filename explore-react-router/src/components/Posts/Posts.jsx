import { useLoaderData } from "react-router-dom";

import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData()
    console.log(posts)
    return (
        <div>
            <h2>Here is our client Post</h2>
            <div className="grid grid-cols-3">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;