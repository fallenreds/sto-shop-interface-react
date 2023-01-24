/*import React, {useState} from 'react';*/
import './ProductList.css';
import data from '../../goods.json'
import Good from "../Good/Good";






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
            <select value='category'/*{category}*/ /*onChange={onChangeCategory}*/ className={'select'}>
                <option value='1'>Категория 1</option>
                <option value='2'>Категория 2</option>
                <option value='3'>Категория 1.1</option>
                <option value='3'>Категория 1.2</option>
            </select>

            <div className={"postlist"}>

                {data.data.map(good=>
                    <Good good={good}/>
                    )}


            </div>

        </div>


    );
};

export default ProductList;

