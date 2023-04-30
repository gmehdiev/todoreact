import React from "react";
import Button from "./ui/button/Button";
import './styles/PostButtons.css'
import returnIcon from '../img/icons/returnIcon.png';
import doneIcon from '../img/icons/done.svg';
import deleteIcon from '../img/icons/deleteIcon.svg';


const PostButtons = ({post,remove,clicked}) => {

    if(post.isCurrent) {
        return(
            <div className="flex">
            <Button className="post-button" value='isCompleted' onClick={(event)=>{
                remove(post, event.target.value) 
                clicked(Date.now())}}>Сделанно</Button>
            <Button className="post-button" value='isDelete' onClick={(event)=>{
                remove(post, event.target.value) 
                clicked(Date.now())}}>Удалить</Button>  
            </div>
        )
    }

    if(post.isDelete) {
        return(
            <div className="flex">
            <Button className="post-button" value='isDelete' onClick={(event)=>{
                remove(post, event.target.value) 
                clicked(Date.now())}}>Вернуть</Button>   
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