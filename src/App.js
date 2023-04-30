import { useState } from "react";
import PostList from "./components/PostList";
import Button from "./components/ui/button/Button";
import Navbar from "./components/Navbar";
import './App.css'
import axios from "axios";

function App() {

  const filterPosts = (value) => {
    setFilterPost(value)
  }

  const addNewPost = (e) => {
    e.preventDefault()

    if (post.trim().length === 0){
      alert("введите задачу")
      setPost('')
      return
    }

    const newPost = {
      key: Date.now(),
      date: new Date().toLocaleDateString("en-GB"),
      post,
      isDelete: false,
      isCompleted: false,
      isCurrent: true
    }
    setPosts([...posts, newPost])
    console.log(posts)
    postData(newPost)
    setPost('')
  }

  async function removePost(post, value) {
    try {
      console.log(post._id)
      console.log(value)
      const index = {...post}
      index[value] = !index[value];
      index.isCurrent = !index.isCurrent;
      const response = await axios.patch(`http://localhost:3001/todolists/${post._id}`, index);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }



  // const removePost = (post, value) => {
  //   const index = {...post}
  //   index[value] = !index[value];
  //   index.isCurrent = !index.isCurrent;
  //   console.log(post)
  //   console.log(index)
  // }

  const [filterPost, setFilterPost] = useState();
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState('');

  async function postData(data) {
    try{
      const response = await axios.post('http://localhost:3001/biba', data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Navbar filterPosts={filterPosts}/>
      <form>
        <input value={post} onChange={e => setPost(e.target.value)} type="text" placeholder="текст" required/>
        <button onClick={(event) => {filterPosts(event.target.value); addNewPost(event)} } value={'isCurrent'}>отправить</button>
      </form>
      <PostList value={filterPost || 'isCurrent'} remove={removePost} posts={posts}/>
    </div>
  );
}

export default App;
