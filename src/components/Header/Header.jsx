import React from 'react';
/*import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";*/
import classes from "./Header.module.css"
// import ProductList from "../ProductList/ProductList";
// import shopingCartList from "../ShopingCartList/ShopingCartList";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const router = useNavigate()
    // function goShoppingCart() {
    //     window.Telegram.WebApp.openLink('')
    // }
    // function goProductlist() {
    //     window.Telegram.WebApp.openLink('/')
    // }
    return (
        <div className={classes.header}>
            <input
                className={classes.input}
                type="text"
                placeholder={'Поиск'}
                value=''
                /* onChange={onSearch}*/
            />
            <div className={classes.shopping_cart}>
                <button onClick={()=>router('/')}><img src={require("../../product-list.png")} alt ='img'/></button>
            </div>
            <div className={classes.shopping_cart}>
                <button onClick={()=>router('/shcart')}><img src={require("../../shopping_cart_incon.png")} alt ='img'/></button>
            </div>

        </div>
    );
};

export default Header;