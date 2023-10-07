import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Navbar from './Navbar.js'
import Home from './pages/Home'
import About from './pages/About'
import Achievement from './pages/Achievement'
import Project from './pages/Project'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/achievements' element={<Achievement></Achievement>}></Route>
        <Route path='/projects' element={<Project></Project>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
