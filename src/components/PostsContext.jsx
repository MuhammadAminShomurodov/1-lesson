import  { createContext, useState, useEffect } from 'react';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data.slice(0, 10)))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <PostsContext.Provider value={{ posts, deletePost }}>
      {children}
    </PostsContext.Provider>
  );
};
