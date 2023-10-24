import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from './pages/home/Home';
import Abount from './pages/abount/Abount';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';



function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/abount' element={< Abount />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
