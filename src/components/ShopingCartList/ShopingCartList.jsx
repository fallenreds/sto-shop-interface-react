import React, {useEffect, useState} from 'react';
import classes from "./ShopingCartList.module.css";
import ShopingCart from "../ShopingCart/ShopingCart";
import {getGoods, getShoppingCart} from "../../hooks/api";




const ShopingCartList = () => {
    const uid = 516842877
    const [goodsState, setGoods] = useState([])
    const [shoppingCartState, setShoppingCart] = useState([])



    useEffect(()=>{
       getGoods({setGoods})
    },[setGoods])

    useEffect(()=>{
        getShoppingCart({setShoppingCart}, uid)
    },[setShoppingCart])






    function removeCart(id){
        setShoppingCart(shoppingCartState.filter(item=>item.id !== id))
    }

    return (
        <div className={classes.shoppingCartList}>

            {shoppingCartState.map(info=>
                <ShopingCart cart={info} goodsState={goodsState} removeCart={removeCart}/>
            )}
            <button className={classes.makeOrder}>Сделать Заказ</button>
        </div>
    );
};

export default ShopingCartList;