import React, { useState } from "react";
import Post from "./Post";

const PostList = ({posts, remove, value}) => {

    const [currentPost, setCurrentPost] = useState([]);

    useState(()=>{
        console.log(value)
        const data = posts.filter((post)=> post[value] == true)
        console.log(`asdasd${data}`)
        setCurrentPost(data)
    },[value]) 

    return(
        <div>
            {currentPost.map((post) => <Post remove={remove} post={post}/>)}
        </div>
    )

}

export default PostList;