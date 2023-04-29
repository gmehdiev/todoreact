import { useState } from "react";
import PostList from "./components/PostList";


function App() {

  const filterPosts = (value) => {
    setFilterPost(value)
  }

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      post,
      isDelete: false,
      isCompleted: false,
      isCurrent: true
    }
    setPosts([...posts, newPost])
    console.log(posts)
  }


  const removePost = (post, value) => {
    const index = posts.find(p => p.id == post.id)
    index[value] = !index[value];
    console.log(posts)
  }

  const [filterPost, setFilterPost] = useState();
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState('');
  return (
    <div>
      <button onClick={(event) => filterPosts(event.target.value)} value='isDelete'>Deleted post</button>
      <button onClick={(event) => filterPosts(event.target.value)} value='isCompleted'>Completed post</button>
      <button onClick={(event) => filterPosts(event.target.value)} value='isCurrent'>Current post</button>
      <form>
        <input onChange={e => setPost(e.target.value)} type="text" placeholder="текст"/>
        <button onClick={addNewPost}>отправить</button>
      </form>
      <PostList value={filterPost || 'isCurrent'} remove={removePost} posts={posts}/>
    </div>
  );
}

export default App;
