import React, { Component } from "react";
import Slider from "react-slick";
import Category from "../components/Category/Category";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <div>
                Audi
                <Slider {...settings}>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                </Slider>
            </div>
        );
    }
}
