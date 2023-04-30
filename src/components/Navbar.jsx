import React from "react";
import './styles/Navbar.css'
const Navbar = ({filterPosts}) => {

    return(
        <div className="navbar">
            <button onClick={(event) => filterPosts(event.target.value)} value='isDelete'>Удаленные задачи</button>
            <button onClick={(event) => filterPosts(event.target.value)} value='isCompleted'>Сделанные задачи</button>
            <button onClick={(event) => filterPosts(event.target.value)} value='isCurrent'>Действующие задачи</button> 
        </div>
    )

}

export default Navbar;