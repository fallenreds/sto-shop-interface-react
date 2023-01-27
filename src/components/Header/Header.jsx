import React from 'react';
/*import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";*/
// import classes from "./Header.module.css"
// import ProductList from "../ProductList/ProductList";
// import shopingCartList from "../ShopingCartList/ShopingCartList";
import {Link} from "react-router-dom";



const Header = () => {
    /*const {user, onClose} = useTelegram();*/
    function goShoppingCart() {
        <Link to='/shcart'/>
    }
    function goProductlist() {
        <Link to='/'/>
    }
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
                <button onClick={goProductlist}><img src={require("../../product-list.png")} alt ='img'/></button>
            </div>
            <div className={classes.shopping_cart}>
                <button onClick={goShoppingCart}><img src={require("../../shopping_cart_incon.png")} alt ='img'/></button>
            </div>

        </div>
    );
};

export default Header;