import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

const PostList = ({posts, remove, value}) => {
    const [buttonClick, setButtonClick] = useState('')
    const [currentPost, setCurrentPost] = useState([]);
    const buttonClicked = (time) => {
        setButtonClick(time);
    }

    useEffect(()=> {
        axios
        .get("http://localhost:3001/todolist")
        .then((response) => {
            console.log(response.data)
            const data = response.data.filter((post)=> post[value] == true)
            setCurrentPost(data);
          // console.log(!!photo[prop.selectedMajor+prop.capsuleName]);
        })
        .catch((error) => {
          console.log(error);
        });
    },[value, posts, buttonClick])

    
    // useEffect(()=>{
    //     console.log(buttonClick)
    //     console.log(value)
    //     const data = posts.filter((post)=> post[value] == true)
    //     setCurrentPost(data)
    // },[value, posts, buttonClick]) 

    return(
        <div>
            <div>{value}</div>
            {currentPost.map((post) => <Post key={post.key} remove={remove} clicked={buttonClicked} post={post}/>)}
        </div>
    )

}

export default PostList;