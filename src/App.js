import {useEffect, useState} from "react"
import './App.css';
import NavBar from './components/navbar';

import Posts from './components/posts';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [posts, setPosts] = useState(localStorage.getItem("posts")||[])
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
    
  }, [posts])
  return (
    <div className="App">
      <NavBar posts={posts} setPosts={setPosts} />  
      <Posts posts={posts} setPosts={setPosts}/>
    </div>
  );
}

export default App;
