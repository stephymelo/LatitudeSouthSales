import { useState } from 'react'
import { Menu } from '../Components/Menu/Menu';
import { About } from '../Pages/About/About';
import { Landing } from '../Pages/Landing/Landing';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Routes,
  Outlet,
  useNavigate,
  useLocation
} from "react-router-dom";
import { Footer } from '../Components/Footer/Footer';
import { Approach } from '../Pages/Approach/Approach';
import { Brands } from '../Pages/Brands/Brands';
import { Contact } from '../Pages/Contact/Contact';


interface Routes {
}

export const Routess: React.FC<Routes> = () => {
    return (
<section className='routes'>
<HashRouter>
        <Menu/>
        <Routes>

          <Route path="/" element={<Landing />}>

          </Route>
          <Route path="about" element={<About />}>

          </Route>
          <Route path="approach" element={<Approach />}>

          </Route>
          <Route path="brands" element={<Brands />}>

          </Route>
          <Route path="contact"element={<Contact />}>

          </Route>
        </Routes>
      </HashRouter>
      <Footer/>
</section>
);
}