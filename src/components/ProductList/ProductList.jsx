/*import React, {useState} from 'react';*/
import './ProductList.css';

import data from '../../goods.json'
import Good from "../Good/Good";
import SimpleSlider from "../../UI/Slider";
import {useState} from "react";




const ProductList = (props) => {

    const [categoryState, setCategory] = useState(null)
    function categoryFilter(categoryId) {
        setCategory(categoryId)
    }


    let filterGoodByCategory = categoryState === null ? data.data: data.data.filter(item=>item.category.id===categoryState)

    console.log(filterGoodByCategory)
    return (
        <div className={"form"}>
            <SimpleSlider category={categoryFilter}/>
            <div className={"maintext"}><h3>Все товары</h3></div>
            <div className={"postlist"}>

                {filterGoodByCategory.map(good=> <Good
                        good={good}
                        />
                    )}


            </div>

        </div>


    );
};

export default ProductList;

