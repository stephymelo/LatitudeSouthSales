import { useState } from 'react'
import './Styles/styles.css';
import { Menu } from './Components/Menu/Menu';
import { About } from './Pages/About/About';
import { Landing } from './Pages/Landing/Landing';




import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Routes,
  Outlet,
  useNavigate,
  useLocation
} from "react-router-dom";
import { Footer } from './Components/Footer/Footer';


function App() {


  return (
    <div className="App">
      

      <HashRouter>
        <Menu/>
        <Routes>

          <Route path="/" element={<Landing />}>

          </Route>
          <Route path="approach" element={<About />}>

          </Route>
          <Route path="brands">

          </Route>
          <Route path="contact">

          </Route>
        </Routes>
      </HashRouter>
      <Footer/>

    </div>
  )
}

export default App
