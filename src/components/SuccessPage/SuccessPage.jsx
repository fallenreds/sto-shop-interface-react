import React from 'react';
import classes from "./SuccessPage.module.css";
const SuccessPage = (props) => {

    const tg = window.Telegram.WebApp
    return (
        <div className={classes.success}>
            <img src={require('../../succes_logo.png')} alt={'sfdsd'}/>
           <div style={{textAlign:"center"}}>
               Ви успішно створили замовлення. Для того, щоб переглянути статус замовлення або його сплатити, натисніть на кнопку статус замовлень 📦
           </div>
            <button onClick={tg.close} className={classes.success_btn}>Cтатус замовлень 📦</button>
        </div>
    );
};

export default SuccessPage;