import React, {Component} from 'react'
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap';


class Header extends Component {

    render(){
        return(
            <>
             <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand href="/">
                    <img className="logo" src="/assets/images/dish.png" href="/"/>
                    RESTaurant</NavbarBrand>
                </div>
            </Navbar>
            <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>RESTaurant</h1>
                        <p>We believe the choices we make about what we eat, where it comes from and how it’s prepared have a direct and powerful impact on the health of individuals, communities and the environment.</p>
                    </div>
                </div>
            </div>
            </Jumbotron>
            </>
        );
    }
}

export default Header;
