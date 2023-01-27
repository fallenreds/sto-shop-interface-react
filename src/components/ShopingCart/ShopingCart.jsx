import React from 'react';
import classes from "../ShopingCart/ShopingCart.module.css";
import GoodData from  "../../goods.json"


const ShopingCart = (props) => {

    var good = GoodData.data.filter(item=>
        {
            if(item.id===props.cart.good_id){
                return true
            }
        }
    )[0]

    let image = good.image[0]
    if(!image){
        image ='https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'
    }
    return (
        <div className={classes.shoppingCart}>
            <img src={image}/>
            <div className={classes.info}>
                <div className={classes.maintext}>{good.title}</div>
                <div className={classes.price}>{good.price[284727]}₴</div>
                <div className={classes.counter}>
                    <button>-</button>
                    <span>{props.cart.count}</span>
                    <button>+</button>
                </div>
            </div>
        </div>
    );
};

export default ShopingCart;