/*import React, {useState} from 'react';*/
import './ProductList.css';
import category from "../../category.json";
import data from '../../goods.json'
import Good from "../Good/Good";
import SimpleSlider from "../../UI/Slider";
import {useState} from "react";




const ProductList = () => {

    const [categoryState, setCategory] = useState(null)
    function categoryFilter(categoryId) {
        setCategory(categoryId)
    }
    function restartCategory() {
        categoryFilter(null)
    }

    let categoryLabel = categoryState === null ? "Все товары":
                        category.data.find(item=>item.id === categoryState).title




    let filterGoodByCategory = categoryState === null ? data.data: data.data.filter(item=>item.category.id===categoryState)

    return (
        <div className={"form"}>
            <SimpleSlider category={categoryFilter}/>
            <div className={"maintext"}>
                <h3>{categoryLabel}<button  onClick={restartCategory} style={{background:"none", border: "none"}}>❎</button></h3>

            </div>

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

