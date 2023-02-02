import './ProductList.css';
import category from "../../category.json";
import Good from "../Good/Good";
import SimpleSlider from "../../UI/Slider";
import {useEffect, useState} from "react";
import {getGoods, getShoppingCart} from "../../hooks/api";






const ProductList = () => {
    const uid = 516842877


    const [categoryState, setCategory] = useState(null)
    const [shoppingCartState, setShoppingCart] = useState([])
    const [goodsState, setGoods] = useState([])

    useEffect(()=>{
        getShoppingCart({setShoppingCart}, uid)
    },[setShoppingCart])

    useEffect(()=>{
        getGoods({setGoods})
    },[setGoods])

    const cartsGoods = shoppingCartState.filter(item=> item.telegram_id === uid).map(item=>item.good_id)

    function categoryFilter(categoryId) {
        setCategory(categoryId)
    }
    function restartCategory() {
        categoryFilter(null)
    }

    let categoryLabel = categoryState === null ? "Все товары":
                        category.data.find(item=>item.id === categoryState).title



    //
    // let filterGoodByCategory = categoryState === null ? data.data: data.data.filter(item=>item.category.id===categoryState)

    function filterGoodByCategory() {
        if(categoryState === null){
            return goodsState
        }
        return goodsState.filter(item=>item.category.id===categoryState)
    }


    return (
        <div className={"form"}>
            <SimpleSlider category={categoryFilter}/>
            <div className={"maintext"}>
                <h3>{categoryLabel}<button  onClick={restartCategory} style={{background:"none", border: "none"}}>❎</button></h3>

            </div>

            <div className={"postlist"}> 

                {filterGoodByCategory().map(good=> <Good
                        good={good} carts={cartsGoods}
                        />
                    )}


            </div>

        </div>


    );
};

export default ProductList;

