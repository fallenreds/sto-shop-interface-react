import React from 'react';
import classes from "./Category.module.css";
const Category = (props) => {
    return (
        <div className={classes.category}>
            <img src={require('../../images/category-logo/bmw.jpg')} alt ='img' />
            Категория
        </div>
    );
};

export default Category;
