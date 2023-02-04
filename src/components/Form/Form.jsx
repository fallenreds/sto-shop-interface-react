import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";
import ShopingCartList from "../ShopingCartList/ShopingCartList";
import {deleteShoppingCart, getShoppingCart, postOrder} from "../../hooks/api";
import {useNavigate} from "react-router-dom";

const Form = (props) => {
    let uid = props.uid

    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [prepayment, setPrepayment] = useState(false);
    const [description, setDescription] = useState('');
    const {tg} = useTelegram();

    const [shoppingCartState, setShoppingCart] = useState([])

    useEffect(()=>{
        getShoppingCart({setShoppingCart}, uid)
    },[])

    // const onSendData = useCallback(() => {
    //     const data = {
    //         name,
    //         lastname,
    //         phone,
    //         address,
    //         prepayment,
    //
    //     }
    //     tg.sendData(JSON.stringify(data));
    // }, [address, lastname, name, phone, tg])
    //
    // useEffect(() => {
    //     tg.onEvent('mainButtonClicked', onSendData)
    //     return () => {
    //         tg.offEvent('mainButtonClicked', onSendData)
    //     }
    // }, [onSendData, tg])

    // useEffect(() => {
    //     tg.MainButton.setParams({
    //         text: 'Отправить данные'
    //     })
    // }, [tg.MainButton])
    //
    // useEffect(() => {
    //     if(!name || !lastname || !phone || !address) {
    //         tg.MainButton.hide();
    //     } else {
    //         tg.MainButton.show();
    //     }
    // }, [name, lastname, phone, address, tg.MainButton])

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeLastName = (e) => {
        setLastName(e.target.value)
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const onChangeAddress = (e) => {
        setAddress(e.target.value)
    }
    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }
    const onChangePrepayment = (e) => {
        if (e.target.value ===1){
            setPrepayment(false)
        }
        else{
            setPrepayment(true)
        }
    }
    const router = useNavigate()
    function create_order() {
         postOrder(props.uid,
            shoppingCartState,
            name,
            lastname,
            prepayment,
            phone,
            address,
            description
            )
         shoppingCartState.map(item=>deleteShoppingCart(item.id))
         router('/')
    }
    function showSubmit() {
        if(name && lastname && phone && address) {
            return   <button onClick={create_order} className={'makeOrder'}>Оформить заказ</button>
        }
    }

    return (
        <div className={"form"}>
            <form>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="name"
                placeholder={'Имя'}
                value={name}
                onChange={onChangeName}
                required
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Фамилия'}
                value={lastname}
                onChange={onChangeLastName}
                required
            />
            <input
                className={'input'}
                id="phone"
                name="phone"
                pattern="^\+?3?8?(0\d{9})$"
                type="tel"
                placeholder={'Номер телефона +380'}
                value={phone}
                onChange={onChangePhone}
                required
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Адресс, отделение Новой Почты'}
                value={address}
                onChange={onChangeAddress}
                required
            />
                <input
                    className={'input'}
                    type="text"
                    placeholder={'Комментрарий к отправке'}
                    value={description}
                    onChange={onChangeDescription}
                    required
                />
                <select className={'input'} name="prepayment" onChange={onChangePrepayment}>
                    <option value="1">Наложеный платеж</option>
                    <option value="2">Предоплата</option>
                </select>
                {showSubmit()}
            </form>
        </div>
    );
};

export default Form;