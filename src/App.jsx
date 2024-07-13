import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PostsProvider } from './components/PostsContext';
import Header from './components/Header';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contact = () => <div>Contact</div>;
const Posts = () => <div>Posts</div>;

const App = () => {
  return (
    <PostsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Router>
    </PostsProvider>
  );
};

export default App;
