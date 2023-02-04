import React, {useEffect, useState} from 'react';
import classes from "./ShopingCartList.module.css";
import ShopingCart from "../ShopingCart/ShopingCart";
import {getGoods, getShoppingCart} from "../../hooks/api";
import {useNavigate} from "react-router-dom";

const ShopingCartList = (props) => {
    const router = useNavigate()
    const uid = props.uid
    const [shoppingCartState, setShoppingCart] = useState([])

    const setGoods = props.setGoods
    const goodsState = props.goodsState


    useEffect(()=>{
       getGoods({setGoods})
    },[])

    useEffect(()=>{
        getShoppingCart({setShoppingCart}, uid)
    },[])



    function removeCart(id){
        setShoppingCart(shoppingCartState.filter(item=>item.id !== id))
    }

    return (

        <div className={classes.shoppingCartList}>

            {shoppingCartState.map(info=>

                <ShopingCart cart={info} goodsState={goodsState} removeCart={removeCart}/>
            )}
            <button onClick={()=>router('/form')} className={classes.makeOrder}>Сделать Заказ</button>
        </div>
    );
};

export default ShopingCartList;