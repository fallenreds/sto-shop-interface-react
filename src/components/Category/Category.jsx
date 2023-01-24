import React from 'react';
import classes from "./Category.module.css";
const Category = (props) => {
    return (
        <div className={classes.category}>
            <img src="../../images/category-logo/acura.jpg" alt ='img' />
            Категория
        </div>
    );
};

export default Category;
