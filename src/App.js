import './App.css';
import {useEffect, useState} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import ShopingCartList from "./components/ShopingCartList/ShopingCartList";
import {getGoods, getShoppingCart} from "./hooks/api";

const tg = window.Telegram.WebApp;
function App() {

    let uid = tg.initDataUnsafe?.user?.id
    if(!uid){
        uid = 516842877
    }

    const [goodsState, setGoods] = useState([])
    const [shoppingCartState, setShoppingCart] = useState([])

    useEffect(()=>{
        getShoppingCart({setShoppingCart}, uid)
    },[])

    useEffect(()=>{
        getGoods({setGoods})
    },[])



    return(
        <div className="App">
            <Header />
                <Routes>
                    <Route index element={<ProductList shoppingCartState={shoppingCartState} uid={uid}/>}/>



                    <Route path={'form'} element={<Form uid={uid}/>}/>
                    <Route path={'shcart'} element={<ShopingCartList goodsState={goodsState} setGoods={setGoods} uid={uid}/>}/>
                </Routes>
        </div>
    );
}

export default App