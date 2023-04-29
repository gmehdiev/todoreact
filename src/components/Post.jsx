import React from "react";
import Button from "./ui/Button";
import PostButtons from "./PostButtons";

const Post = ({post,remove,clicked}) => {



    return(
        <div>
            <div>{post.id}</div>
            <div>{post.post}</div>
            <div></div>
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