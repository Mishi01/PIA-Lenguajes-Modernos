import Post from "../post/Post";
import "./posts.css";

const apiUrl = process.env.REACT_APP_BACKEND_URL;

// ...

fetch(`${apiUrl}/endpoint`)
  .then(response => response.json())
  .then(data => {
  })
  .catch(error => {
  });

export default function Posts({posts}) {
  return (
    <div className="posts">
      {posts.map(p=>
        <Post post = {p}/>        
        )}

    </div>
  );
}
