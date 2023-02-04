import React, {useState} from 'react';
import classes from "../ShopingCart/ShopingCart.module.css";
import {deleteShoppingCart, updateShoppingCart} from "../../hooks/api";

const test_price = 298792
const prod_price = 284727
const ShopingCart = (props) => {

    const [count, setCount] = useState(props.cart.count);
    const good = props.goodsState.filter(item=>item.id===props.cart.good_id)[0]
    let cart_id = props.cart.id

    function deleteCart(){
        deleteShoppingCart(cart_id)
        props.removeCart(cart_id)
    }

    function incrementCount() {
        if(count+1 <= good.residue){
            setCount(count+1)
            updateShoppingCart(cart_id, count+1)
        }
    }
    function decrementCount() {
        if(count-1>0){
            setCount(count-1)
            updateShoppingCart(cart_id, count-1)
        }

    }



    let image = good.image[0]
    if(!image){
        image ='https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'
    }
    return (
        <div className={classes.shoppingCart}>
            <img src={image} alt='asdadfas'/>
            <div className={classes.info}>
                <div className={classes.maintext}>{good.title}</div>
                <div className={classes.price}>{good.price[284727]}₴</div>
                <div className={classes.counter}>
                    <button onClick={decrementCount}>-</button>
                    <span>{count}</span>
                    <button onClick={incrementCount}>+</button>
                </div>
                <div >В наличии: {good.residue}</div>

                <div className={classes.finalprice}>

                    <div className={classes.finaltext}>
                        К оплате:
                    </div>

                    {good.price[prod_price]*count} ₴
                </div>
            </div>
            <button
                style={{color: "red", marginLeft: "auto", marginBottom:"auto", background:"None", border: "None"}}
                onClick={deleteCart}
                >
                Удалить
                </button>
        </div>
    );
};

export default ShopingCart;