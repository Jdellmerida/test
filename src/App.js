
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Course from './pages/Course';
import Footer from './components/Footer';
import {BrowserRouter, Routes , Route} from 'react-router-dom';




function App () {
return (
<div className='App'>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/About' element={<About/>} />
  <Route path='/Course' element={<Course/>} />
  <Route path='/Contact' element={<Contact/>} />
</Routes>
<Footer/>

</BrowserRouter>
</div>



)

}
 
  
   

export default App;
