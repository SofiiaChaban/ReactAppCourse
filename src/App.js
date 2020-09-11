import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div>
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">
            <img className="logo" src="/assets/images/dish.png" href="/"/>
            RESTaurant</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
