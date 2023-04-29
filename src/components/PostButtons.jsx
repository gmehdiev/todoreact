import React from "react";
import Button from "./ui/Button";

const PostButtons = ({post,remove,clicked}) => {

    if(post.isCurrent) {
        return(
            <div>
            <Button value='isDelete' onClick={(event)=>{
                remove(post, event.target.value) 
                clicked(Date.now())}}>remove</Button>   
            <Button value='isCompleted' onClick={(event)=>{
                remove(post, event.target.value) 
                clicked(Date.now())}}>complete</Button>
            </div>
        )
    }

    if(post.isDelete) {
        return(
            <div>
            <Button value='isDelete' onClick={(event)=>{
                remove(post, event.target.value) 
                clicked(Date.now())}}>return</Button>   
            </div>
        )
    }


    // return(
    //     <div>
    //         <Button value='isDelete' onClick={(event)=>{
    //             remove(post, event.target.value) 
    //             clicked(Date.now())}}>remove</Button>   
    //         <Button value='isCompleted' onClick={(event)=>{
    //             remove(post, event.target.value) 
    //             clicked(Date.now())}}>complete</Button>
    //     </div>
    // )

}

export default PostButtons;