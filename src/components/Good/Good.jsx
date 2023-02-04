import React, {useEffect, useState} from 'react';
import classes from './Good.module.css'
import {postShoppingCart} from "../../hooks/api";
import {useNavigate} from "react-router-dom";


const Good = (props) => {
    const uid = props.uid
    const buyButton = <button onClick={addToShoppingCart}>Купить</button>
    const toShoppingCartButton = <button onClick={()=>router('/shcart')} style={{background: "rgba(215, 125, 72, 0.3)"}}>В корзину</button>
    const cantBuyButton = <button style={{background: "rgba(255,0,0,0.13)", borderColor:"rgba(255,0,0, 1)"}}>Нет в наличии</button>

    const [buttonState, setButton] = useState(buyButton)




    const router = useNavigate()
    let image = props.good.image[0]
    if(!image){
        image ='https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'
    }


    useEffect(()=>{
        if (props.carts.includes(props.good.id)){
            setButton(toShoppingCartButton)
        }
        if (props.good.residue===0){
            setButton(cantBuyButton)
        }

    },[])


    function addToShoppingCart (){
        setButton(toShoppingCartButton)
        postShoppingCart(uid, props.good.id)

    }



    return (
        <div className={classes.post}>
            <img alt='Фото' src={image }/>

            <div className={classes.title}>
                {props.good.title}<p/>
            </div>

            <div className={classes.cost}>
                {props.good.price[284727]}₴<p/>
            </div>

            {buttonState}
        </div>
    );
};

export default Good;