import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import DeleteStudents from './Pages/DeleteStudents';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Notfound from './Pages/Notfound';
import RegisterStudent from './Pages/RegisterStudent';
import UpdateStudent from './Pages/UpdateStudent';
import ViewStudent from './Pages/ViewStudent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div >

    
       <BrowserRouter>
   <Navbar/> 
     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/student/update' element={<UpdateStudent/>}/>
      <Route path='/student/delete' element={<DeleteStudents/>}/>
      <Route path='/student/register' element={<RegisterStudent/>}/>
    
      <Route path='/student/view' element={<ViewStudent/>}/>
    <Route path='/student/view/:id' element={<ViewStudent/>}/>
      <Route path='*' element={<Notfound/>}/>
      
     </Routes>
     <Footer/>
   
   </BrowserRouter>
      
    </div>
  );
}

export default App;
