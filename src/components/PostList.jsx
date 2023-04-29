import React, { useEffect, useState } from "react";
import Post from "./Post";

const PostList = ({posts, remove, value}) => {
    const [buttonClick, setButtonClick] = useState('')
    const [currentPost, setCurrentPost] = useState([]);
    const buttonClicked = (time) => {
        setButtonClick(time);
    }

    
    useEffect(()=>{
        console.log(buttonClick)
        console.log(value)
        const data = posts.filter((post)=> post[value] == true)
        setCurrentPost(data)
    },[value, posts, buttonClick]) 

    return(
        <div>
            {currentPost.map((post) => <Post remove={remove} clicked={buttonClicked} post={post}/>)}
        </div>
    )

}

export default PostList;