/*import React, {useState} from 'react';*/
import './ProductList.css';
import Button from "../Button/Button";




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
                <div className={'post'}>
                    <img alt='Фото' src="https://storage.remonline.app/warehouse_images/fb41c9db9d3f48e39875e63b15dfe530_500_500.jpeg?"/>
                    Название какого-то товара<p/>
                    <Button>В корзину</Button>
                </div>
                <div className={'post'}>
                    <img alt='Фото' src="https://storage.remonline.app/warehouse_images/9f1204e21c4f4beeaaeb5a25faaf26b0_500_500.jpeg?"/>
                    Название какого-то товара
                    <Button>В корзину</Button>
                </div>


            </div>


        </div>


    );
};

export default ProductList;

