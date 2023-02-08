import React from 'react';
import classes from "./SuccessPage.module.css";
const SuccessPage = (props) => {

    const tg = window.Telegram.WebApp
    return (
        <div className={classes.success}>
            <img src={require('../../succes_logo.png')} alt={'sfdsd'}/>
           <div>
               Вы успешно создали заказ. Для того что бы просмотреть статус заказа или его оплатить, нажмите на кнопку статус заказов 📦
           </div>
            <button onClick={tg.close} className={classes.success_btn}>Cтатус заказов 📦</button>
        </div>
    );
};

export default SuccessPage;