import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Slides from "./components/Slides";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import BannerTop from "./components/BannerTop";
import Title from "./components/Title";
import Contact from "./components/Contact";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route exact path="/Inicio" component={Inicio} />
                    <Route exact path="/productos" component={ProductList} />
                    <Route path="/details" component={Details} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/Contacto" component={Contact} />
                    <Route component={Default} />
                </Switch>
                <Modal />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default App;

