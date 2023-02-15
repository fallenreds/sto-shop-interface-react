import React from 'react';
import classes from "./Header.module.css"
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const router = useNavigate()
    // function goShoppingCart() {
    //     window.Telegram.WebApp.openLink('')
    // }
    // function goProductlist() {
    //     window.Telegram.WebApp.openLink('/')
    // }
    const onSearch = (e) => {
        props.setSearch(e.target.value)
    }


    return (
        <div className={classes.header}>
            <input
                className={classes.input}
                type="text"
                placeholder={'Пошук'}
                defaultValue=''
                onChange={onSearch}
                value={props.searchState}
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