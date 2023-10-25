import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from './pages/home/Home';
import Abount from './pages/abount/Abount';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Register from './pages/register/Register';



function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={< Home/>} />
          <Route path='/login' element={< Login />} />
          <Route path='/register' element={< Register />} />
          <Route path='/abount' element={< Abount />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
