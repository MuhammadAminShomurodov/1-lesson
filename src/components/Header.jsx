import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "./PostsContext";
import "./Header.css";

const Header = () => {
  const { posts, deletePost } = useContext(PostsContext);

  return (
    <div className="Header">
        <div className="header-background">

        <div className="header-all">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/posts">Posts: {posts.length}</Link>
        </div>
        </div>
      <div className="container">
        <div className="container">
          <div className="posts-container">
            {posts.map((post) => (
              <div className="post-card" key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
