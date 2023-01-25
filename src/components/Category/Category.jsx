import React from 'react';
import classes from "./Category.module.css";
const Category = (...props) => {

    let image = props[0].category.image
    console.log('../../images/category-logo/'+image)
    const rq = require('../../images/category-logo/'+image)

    return (
        <div className={classes.category}>
            <img src={rq} alt ='img' />
            {props[0].category.title}

        </div>
    );
};

export default Category;
