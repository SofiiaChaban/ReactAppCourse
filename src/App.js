import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES}from './shared/dishes';


class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes:DISHES
    };
  }

  render(){
    return (
      <div>
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">
              <img className="logo" src="/assets/images/dish.png" href="/"/>
              RESTaurant</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
}
}
export default App;
