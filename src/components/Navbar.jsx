import React from "react";
import './styles/Navbar.css'
const Navbar = ({filterPosts}) => {

    return(
        <div className="navbar">
            <button onClick={(event) => filterPosts(event.target.value)} value='isDelete'>Deleted post</button>
            <button onClick={(event) => filterPosts(event.target.value)} value='isCompleted'>Completed post</button>
            <button onClick={(event) => filterPosts(event.target.value)} value='isCurrent'>Current post</button> 
        </div>
    )

}

export default Navbar;