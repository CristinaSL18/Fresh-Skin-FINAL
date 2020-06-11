import React from 'react';
import Title from "./Title";
import Slides from "./Slides";
import BannerTop from "./BannerTop";
import Gallery from "./Gallery";


class Inicio extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Title name="Bienvenidos" />
                <Slides/>
                <BannerTop/>
                <Title name="Conocenos" />
                <Gallery/>
            </React.Fragment>
        )
    }
}

export default Inicio;
