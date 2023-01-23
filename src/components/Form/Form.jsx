import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {


    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [phone, setPhone] = useState('380');
    const [address, setAddress] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [tg, tg.MainButton])

    useEffect(() => {
        if(!name || !lastname || !phone || !address) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [name, lastname, phone, address, tg.MainButton])


    const onSendData = useCallback(()=>{
        const data = {
            name,
            lastname,
            phone,
            address
        }
        tg.sendData(JSON.stringify(data))
        tg.close()
    }, [name, lastname, phone, address, tg])

    useEffect(() => {
       tg.onEvent('mainButtonClicked',onSendData)
    }, [onSendData, tg])

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeLastName = (e) => {
        setLastName(e.target.value)
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }


    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }
    const onChangeAddress = (e) => {
        setAddress(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="name"
                placeholder={'Имя'}
                value={name}
                onChange={onChangeName}

            />
            <input
                className={'input'}
                type="lastname"
                placeholder={'Фамилия'}
                value={lastname}
                onChange={onChangeLastName}

            />
            <input
                className={'input'}
                type="number"
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
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
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