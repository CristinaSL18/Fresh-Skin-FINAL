import React from "react";
import logo from "../LOGO.png";


const Footer = () =>{
    return(
        <div className="App">
            <footer className= "footer is-primary">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <p>Cristina Sánchez Lara</p>
                        </div>
                        <div className="column has-text-right">
                            <a className="icon" href="#"><i className="fa fa-facebook"></i></a>
                            <a className="icon" href="#"><i className="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
}
export default Footer;
