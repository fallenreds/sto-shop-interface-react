import React from 'react';
/*import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";*/
import classes from "./Header.module.css"



const Header = () => {
    /*const {user, onClose} = useTelegram();*/
    const hostname = window.location.hostname
    function goShoppingCart() {
        window.location.assign('/shcart');
    }
    function goProductlist() {
        window.location.assign('/');
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