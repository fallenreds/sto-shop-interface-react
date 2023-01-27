import React, {useState} from 'react';
import classes from "../ShopingCart/ShopingCart.module.css";
import GoodData from  "../../goods.json"


const ShopingCart = (props) => {

    const good = GoodData.data.filter(item=>
        {
            return item.id === props.cart.good_id;
        }
    )[0]


    const [count, setCount] = useState(props.cart.count);

    function incrementCount() {
        if(count+1 <= good.residue){
             setCount(count+1)
        }
    }
    function decrementCount() {
        if(count-1>0){
            setCount(count-1)
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
                <div lassName={classes.info}>В наличии: {good.residue}</div>

                <div className={classes.finalprice}>

                    <div className={classes.finaltext}>
                        К оплате:
                    </div>

                    {good.price[284727]*count} ₴
                </div>
            </div>
        </div>
    );
};

export default ShopingCart;