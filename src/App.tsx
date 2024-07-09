import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import { PostContextProvider} from './Contexts/PostProvider';
import SingleBlog from './Components/SingleBlog';
import Projects from './Components/Projects';


function App() {
  

  return (
    <PostContextProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/projects' element={<Projects />}></Route> 
          <Route path="/blogs/:id" element={<SingleBlog />}></Route>
      </Routes>
    </Router>
    </PostContextProvider>
  );
}

export default App
