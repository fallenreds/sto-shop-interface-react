/*import React, {useState} from 'react';*/
import './ProductList.css';

import data from '../../goods.json'
import Good from "../Good/Good";
import SimpleSlider from "../../UI/Slider";




const ProductList = () => {

   /* const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const onSearch = (e) => {
        setSearch(e.target.value)
    }

    const onChangeCategory = (e) => {
        setCategory(e.target.value)
    }*/

    return (
        <div className={"form"}>
            <h3>Выбирайте любые подходящие вам товары. Покупайте не выходя из Telegram!</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Поиск'}
                value=/*{search}*/'value'
               /* onChange={onSearch}*/
                />
            <SimpleSlider/>
            <div className={"postlist"}>

                {data.data.map(good=>
                    <Good good={good}/>
                    )}


            </div>

        </div>


    );
};

export default ProductList;

