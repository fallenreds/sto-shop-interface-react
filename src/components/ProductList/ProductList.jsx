import './ProductList.module.css';
import category from "../../category.json";
import Good from "../Good/Good";
import SimpleSlider from "../../UI/Slider";
import {useEffect, useState} from "react";
import {checkAuth, checkAuthenticated, getGoods, getShoppingCart} from "../../hooks/api";
import classes from "./ProductList.module.css";






const ProductList = (props) => {

    const uid = props.uid

    const [categoryState, setCategory] = useState(null)
    const [shoppingCartState, setShoppingCart] = useState(props.shoppingCartState)
    const [goodsState, setGoods] = useState([])
    const [authenticated, setAuthenticated] = useState()
    const [client, setClient] = useState()


    useEffect(()=>{
        getShoppingCart({setShoppingCart}, uid)
    },[categoryState, props.searchState, uid])

    useEffect(()=>{
        getGoods({setGoods})
    },[])



    useEffect(()=>{
        checkAuth({uid}).then(
            response=>{
                if(response.status===true){

                    setAuthenticated(true)
                    setClient(response.client_data)
                }
            }
        )
    },[])



    function showClientInfo(){
        if(authenticated===true){
            return <div style={{marginTop:"45px", fontSize:"18px", fontFamily:"Montserrat", textAlign:"center"}}>
                Ласкаво просимо, {client.name} {client.last_name}
            </div>
        }
    }



    function textFiltering (searchText) {
        // eslint-disable-next-line
        return goodsState.filter(
            // eslint-disable-next-line
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

    let categoryLabel = categoryState === null ? "Усі товари ":
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

    //const tg = window.Telegram.WebApp
    return (
        <div className={classes.form}>
            {showClientInfo()}
            <SimpleSlider category={categoryFilter} setSearch={props.setSearch} />
            <div className={classes.maintext}>
                <h3>{categoryLabel}<button  onClick={restartCategory} style={{background:"none", border: "none"}}>❎</button></h3>

            </div>

            <div className={classes.postlist}>
                {filterGoodByCategory().map(good=> <Good
                        good={good} carts={cartsGoods} uid={uid}
                        />
                    )}


            </div>

        </div>


    );
};

export default ProductList;

