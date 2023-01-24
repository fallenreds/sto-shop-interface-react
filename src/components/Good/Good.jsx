import React from 'react';
import classes from './Good.module.css'


const Good = (...props) => {
    let image = props[0].good.image[0]
    if(!image){
        image ='https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'
    }
    console.log(image)
    return (
        <div className={classes.post}>
            <img alt='Фото' src={image }/>
            {props[0].good.title}<p/>
            <button>Купить</button>
        </div>
    );
};

export default Good;