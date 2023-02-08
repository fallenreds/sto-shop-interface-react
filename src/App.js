import './App.css';
import {useEffect, useState} from "react";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import ShopingCartList from "./components/ShopingCartList/ShopingCartList";
import {getGoods, getShoppingCart} from "./hooks/api";
import SuccessPage from "./components/SuccessPage/SuccessPage";


function App() {
    const tg = window.Telegram.WebApp
    let uid = tg.initDataUnsafe?.user?.id
    if(!uid){
        uid = 516842877
    }
    const [goodsState, setGoods] = useState([])
    const [shoppingCartState, setShoppingCart] = useState([])
    const [searchState, setSearch] = useState('')

    useEffect(()=>{
        getShoppingCart({setShoppingCart}, uid)
    },[])

    useEffect(()=>{
        getGoods({setGoods})
    },[])



    return(
        <div className="App">
            <Header searchState={searchState} setSearch={setSearch}/>
                <Routes>
                    <Route index element={<ProductList shoppingCartState={shoppingCartState} uid={uid} searchState={searchState} setSearch={setSearch}/>}/>



                    <Route path={'form'} element={<Form uid={uid}/>}/>
                    <Route path={'shcart'} element={<ShopingCartList goodsState={goodsState} setGoods={setGoods} uid={uid}/>}/>
                    <Route path={'successpage'} element={<SuccessPage tg={tg}/>}/>

                </Routes>
        </div>
    );
}

export default App