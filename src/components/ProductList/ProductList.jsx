import './ProductList.css';
import category from "../../category.json";
import Good from "../Good/Good";
import SimpleSlider from "../../UI/Slider";
import {useEffect, useState} from "react";
import {getGoods, getShoppingCart} from "../../hooks/api";






const ProductList = (props) => {
    const uid = props.uid


    const [categoryState, setCategory] = useState(null)
    const [shoppingCartState, setShoppingCart] = useState(props.shoppingCartState)
    const [goodsState, setGoods] = useState([])

    useEffect(()=>{
        getShoppingCart({setShoppingCart}, uid)
    },[categoryState, props.searchState, uid])

    useEffect(()=>{
        getGoods({setGoods})


    },[])
    function textFiltering (searchText) {
        // eslint-disable-next-line
        return goodsState.filter(
            (item)=>{
                if(item.title.toLowerCase().includes(searchText.toLowerCase())) {
                    return true
                }
            }
        )
    }

    // eslint-disable-next-line
    const cartsGoods = shoppingCartState.filter(item=> item.telegram_id === uid).map(item=>item.good_id)

    function categoryFilter(categoryId) {
        setCategory(categoryId)
    }
    function restartCategory() {
        categoryFilter(null)
    }

    let categoryLabel = categoryState === null ? "Все товары":
                        category.data.find(item=>item.id === categoryState).title



    function filterGoodByCategory() {
        if(props.searchState){

            return textFiltering(props.searchState)
        }
        if(categoryState === null){
            return goodsState
        }
        // eslint-disable-next-line
        return goodsState.filter(item=>item.category.id===categoryState)


    }

    const tg = window.Telegram.WebApp
    return (
        <div className={"form"}>
            тут тг: {tg.initdataunsafe?.user?.id}
            <SimpleSlider category={categoryFilter} setSearch={props.setSearch} />
            <div className={"maintext"}>
                <h3>{categoryLabel}<button  onClick={restartCategory} style={{background:"none", border: "none"}}>❎</button></h3>

            </div>

            <div className={"postlist"}> 

                {filterGoodByCategory().map(good=> <Good
                        good={good} carts={cartsGoods} uid={uid}
                        />
                    )}


            </div>

        </div>


    );
};

export default ProductList;

