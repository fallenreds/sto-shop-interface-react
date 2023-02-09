import axios from "axios";

const https = require('https');
const httpsAgent = new https.Agent({ rejectUnauthorized: false })
const base_url =  "https://139.162.218.167/" //"http://127.0.0.1:8000/"



function sortResude(item) {
    if (item.residue>0) {
        return -1;
    }
    if(item.residue===0){
        return 1
    }
}


export function getGoods(props) {
    axios.get(base_url+'api/v1/goods', { httpsAgent: httpsAgent }).then(

        response=>{
            props.setGoods(response.data.data.sort((item)=>sortResude(item)))
        }
    )
}



export function getShoppingCart(props, telegramId) {
    axios.get(
        base_url+'api/v1/shoppingcart/'+telegramId, { httpsAgent: httpsAgent })

        .then(
        response=>{
            props.setShoppingCart(response.data)
        }
    )
}


export function postShoppingCart(telegramId, goodId) {
    axios.post(
        base_url + 'api/v1/shoppingcart/',
        {
            "telegram_id": telegramId,
            "good_id": goodId,

        },{ httpsAgent: httpsAgent })

        .then(response=>{
        return response.status
    })
}

export function deleteShoppingCart(CartId) {
    axios.delete(
        base_url + 'api/v1/shoppingcart/'+CartId,{ httpsAgent: httpsAgent })

        .then(response=>{
        console.log(response.status)
    })
}

export function updateShoppingCart(CartId, count) {
    axios.patch(
        base_url + 'api/v1/shoppingcart/'+CartId,
        {"count":count},{ httpsAgent: httpsAgent })

        .then(response=>{
            console.log(response.status)
        })
}

export function postOrder(telegramId,
                          goodsList,
                          name,
                          lastName,
                          prepayment,
                          phone,
                          address,
                          description,
                          ) {
    axios.post(
        base_url + 'api/v1/order/',
        {
            "telegram_id": telegramId,
            "goods_list": goodsList,
            "name": name,
            "last_name": lastName,
            "prepayment":  prepayment,
            "phone": phone,
            "nova_post_address": address,
            "description":description
        },{ httpsAgent: httpsAgent }
    )

        .then(response=>{
            return response.status
        })
}
