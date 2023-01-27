import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import ShopingCartList from "./components/ShopingCartList/ShopingCartList";


function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [tg, onToggleButton])



    return(
        <div className="App">
            <Header />
                <Routes>
                    <Route index element={<ProductList />}/>
                    <Route path={'form'} element={<Form />}/>
                    <Route path={'shcart'} element={<ShopingCartList />}/>
                </Routes>
        </div>
    );
}

export default App