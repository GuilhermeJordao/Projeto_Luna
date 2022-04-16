import React from 'react';
import { AiFillHome } from "react-icons/ai";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/' className='home-button'>
          <a href="" className="logo">
            <img className="logo" src='https://i.imgur.com/viuDvJk.png' alt="" width={230}/>
          </a>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
           Mangás 
          </NavLink>
          <NavLink to='/services' activeStyle>
            Recém-Adicionados
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Ajuda
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Cadastrar-se
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Fazer Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;