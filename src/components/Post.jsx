import React from "react";

const Post = ({post,remove}) => {

    return(
        <div>
            <div>{post.id}</div>
            <div>{post.post}</div>
            <div>{post.isDelete}</div>
            <button value='isDelete' onClick={(event)=> remove(post, event.target.value)}>remove</button>
            <button value='isCompleted' onClick={(event)=> remove(post, event.target.value)}>complete</button>
        </div>
    )

}

export default Post;