import React from 'react';
import classes from "./SuccessPage.module.css";
const SuccessPage = (props) => {
    return (
        <div className={classes.success}>
            <img src={require('../../succes_logo.png')} alt={'sfdsd'}/>
           <div>
               Вы успешно создали заказ. Для того что бы просмотреть стататуз заказа или его оплатить, нажмите на кнопку статус заказов 📦
           </div>
            <button onClick={props.tg.close()} className={classes.success_btn}>Cтатус заказов 📦</button>
        </div>
    );
};

export default SuccessPage;