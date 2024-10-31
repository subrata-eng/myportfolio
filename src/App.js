import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/aboutus';
import Skill from './components/skills';
import Home from './components/home';
import Contact from './components/contact';
import ProjectsPage from './components/projectsPage';
import Academics from './components/academics';
import Footer from './components/footer';

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/academics' element={<Academics/>}/>
     <Route path='/skills' element={<Skill/>}/>
     <Route path='/projectsPage' element={<ProjectsPage/>}/>
     <Route path='/contact' element={<Contact/>}/>

     </Routes>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
