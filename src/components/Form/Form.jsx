import React, {useEffect, useState} from 'react';
import './Form.css';
import {deleteShoppingCart, getGoods, getShoppingCart, postOrder} from "../../hooks/api";
import {useNavigate} from "react-router-dom";
const prod_price = 284727
const Form = (props) => {
    let uid = props.uid

    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [prepayment, setPrepayment] = useState(false);
    const [description, setDescription] = useState('');
    const [formSuccess, setFormSuccess] = useState(false);

    const [goods, setGoods] = useState('');
    useEffect(()=>{
        getGoods({setGoods})
    },[])


    function getGoodById(good_id){
        // eslint-disable-next-line
        return goods.find((item)=>{

            if(item.id===good_id){

                return true
            }
        })
    }
    const [shoppingCartState, setShoppingCart] = useState([])

    useEffect(()=>{
        getShoppingCart({setShoppingCart}, uid)
    },[uid])
    function getOrderSum (){
        let suma = 0
        // eslint-disable-next-line
        shoppingCartState.map((item)=>{
            suma = suma+getGoodById(item.good_id).price[prod_price]*item.count
        })
        return suma
    }
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
        console.log(uid)
        shoppingCartState.map(item=>deleteShoppingCart(item.id))
        setFormSuccess(true)
        if(formSuccess){
            router('/successpage')
        }

    }
    function showSubmit() {
        if(name && lastname && phone && address) {
            return   <button onClick={create_order} className={'makeOrder'}>Оформить заказ</button>
        }
    }

    // function isSuccess() {
    //     if(formSuccess===true){
    //         return <>
    //             Вы успешно создали заказ. Для того что бы просмотреть стататуз заказа или его оплатить, нажмите на кнопку статус заказов 📦
    //         </>
    //     }
    // }

    return (
        <div className={"form"}>
            <form>
            <h3 style={{textAlign:"center"}}>Введите ваши данные</h3>
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

                <div className={'topay'}>
                    Сума к оплате: {getOrderSum()}₴
                </div>

                {showSubmit()}
            </form>
        </div>
    );
};

export default Form;