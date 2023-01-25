import React, { Component } from "react";
import Slider from "react-slick";
import Category from "../components/Category/Category";
import category_data from '../category.json'
import classes from './slider.module.css'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            arrows: true,
            variableWidth: true,
            dots: false,
            infinite: true,
            speed: 500,
            swipeToSlide: true,

            slidesToScroll: 1
        };



        // let get_parents = category_data.data.map(function(ct) {
        //     if(!ct.parent_id){
        //         return ct;
        //     }
        //
        // });

        function get_сhildrens (parent_id) {
            return category_data.data.filter((ct)=>ct.parent_id === parent_id)
        }



        console.log(get_сhildrens(754099))
        return (

            <div className={classes.upslider}>
                {category_data.data.map(category => {
                    if(category.parent_id === undefined) {
                        const child = get_сhildrens(category.id)
                        return (

                            <div>
                                {category.title}
                                <Slider {...settings}>
                                    {
                                        child.map(category => <Category category={category}/>)
                                    }
                                </Slider>
                            </div>


                        )
                    }
                    else{
                        return null
                    }
                })}
            </div>

        );
    }
}
