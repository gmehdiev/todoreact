import React from "react";
import Button from "./ui/Button";

const Post = ({post,remove,clicked}) => {

    return(
        <div>
            <div>{post.id}</div>
            <div>{post.post}</div>
            <div>{post.isDelete}</div>
            {/* <button value='isDelete' onClick={(event)=>{
                remove(post, event.target.value)
                clicked(Date.now())}}>remove</button>
            <button value='isCompleted' onClick={(event)=>{
                remove(post, event.target.value) 
                clicked(Date.now())}}>complete</button> */}
            <Button value='isDelete' onClick={(event)=>{
                remove(post, event.target.value) 
                clicked(Date.now())}}>remove</Button>   
            <Button value='isCompleted' onClick={(event)=>{
                remove(post, event.target.value) 
                clicked(Date.now())}}>complete</Button>
        </div>
    )

}

export default Post;