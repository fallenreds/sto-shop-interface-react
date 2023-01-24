import React, { Component } from "react";
import Slider from "react-slick";
import Category from "../components/Category/Category";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            variableWidth: true,
            dots: false,
            infinite: true,
            speed: 500,
            swipeToSlide: true,

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
