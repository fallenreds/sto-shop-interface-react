import React from 'react';
import classes from "./Category.module.css";
const Category = (props) => {
    return (
        <div className={classes.category}>
            <img alt ='' src="https://i.etsystatic.com/20556998/r/il/45e102/2835384837/il_570xN.2835384837_cwi9.jpg"/>
            Категория
        </div>
    );
};

export default Category;
