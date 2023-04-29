import React from "react";

const Navbar = ({filterPosts}) => {

    return(
        <div>
            <button onClick={(event) => filterPosts(event.target.value)} value='isDelete'>Deleted post</button>
            <button onClick={(event) => filterPosts(event.target.value)} value='isCompleted'>Completed post</button>
            <button onClick={(event) => filterPosts(event.target.value)} value='isCurrent'>Current post</button> 
        </div>
    )

}

export default Navbar;