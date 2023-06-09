import React from "react";
import Button from "./ui/button/Button";
import PostButtons from "./PostButtons";


import './styles/Post.css'
const Post = ({post,remove,clicked}) => {



    return(
        <div className="post">
            <div className="date-and-title">
            <div>{post.date}</div>
            <div className="postTitle">{post.post}</div>
            </div>
            <PostButtons post={post} value='isDelete' remove={remove} clicked={clicked}
                />
            {/* <Button value='isDelete' onClick={(event)=>{
                remove(post, event.target.value) 
                clicked(Date.now())}}>remove</Button>   
            <Button value='isCompleted' onClick={(event)=>{
                remove(post, event.target.value) 
                clicked(Date.now())}}>complete</Button> */}
        </div>
    )

}

export default Post;