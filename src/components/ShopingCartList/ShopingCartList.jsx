import React from 'react';
import classes from "./ShopingCartList.module.css";
import CartData from "../../shopping_cart.json";
import {useTelegram} from "../../hooks/useTelegram";
import ShopingCart from "../ShopingCart/ShopingCart";



const ShopingCartList = () => {
    const uid = /*516842877*/ useTelegram().uid
    let shoppingCartData = CartData
    let userCarts = shoppingCartData.filter(function(shoppingCartData) {
        return  shoppingCartData.telegram_id === uid;
    });


    return (
        <div className={classes.shoppingCartList}>

            {userCarts.map(info=>
                <ShopingCart cart={info}/>
            )}
        </div>
    );
};

export default ShopingCartList;