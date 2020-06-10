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


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Title name="Bienvenidos" />
                <Slides/>
                <BannerTop/>
                <Title name="Conocenos" />
                <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/details" component={Details} />
                    <Route path="/cart" component={Cart} />
                    <Route component={Default} />
                </Switch>
                <Contact/>
                <Modal />

            </React.Fragment>
        );
    }
}

export default App;

