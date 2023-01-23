import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {

    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [phone, setPhone] = useState('380');
    const [address, setAddress] = useState('');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            name,
            lastname,
            phone,
            address
        }
        tg.sendData(JSON.stringify(data));
    }, [address, lastname, name, phone, tg])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData, tg])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [tg.MainButton])

    useEffect(() => {
        if(!name || !lastname || !phone || !address) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [name, lastname, phone, address, tg.MainButton])

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

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Имя'}
                value={name}
                onChange={onChangeName}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Фамилия'}
                value={lastname}
                onChange={onChangeLastName}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Номер телефона 380'}
                value={phone}
                onChange={onChangePhone}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Адресс, отделение Новой Почты'}
                value={address}
                onChange={onChangeAddress}
            />
            <div className={'shopping_cart'}>
            <p>Тут</p>
            <p>Будет</p>
            <p>Добавленые</p>
            <p>Товары</p>
            <p>Тут</p>
            <p>Будет</p>
            <p>Добавленые</p>
            <p>Товары</p>
            <p>Товары</p>
            <p>Товары</p>
            <p>Товары</p>


        </div>
        </div>
    );
};

export default Form;