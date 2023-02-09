import axios from "axios";


const base_url = "http://127.0.0.1:8000/"// "https://139.162.218.167/"



function sortResude(item) {
    if (item.residue>0) {
        return -1;
    }
    if(item.residue===0){
        return 1
    }
}


export function getGoods(props) {
    axios.get(base_url+'api/v1/goods').then(

        response=>{
            props.setGoods(response.data.data.sort((item)=>sortResude(item)))
        }
    )
}



export function getShoppingCart(props, telegramId) {
    axios.get(
        base_url+'api/v1/shoppingcart/'+telegramId)

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
        })

        .then(response=>{
        return response.status
    })
}

export function deleteShoppingCart(CartId) {
    axios.delete(
        base_url + 'api/v1/shoppingcart/'+CartId)

        .then(response=>{
        console.log(response.status)
    })
}

export function updateShoppingCart(CartId, count) {
    axios.patch(
        base_url + 'api/v1/shoppingcart/'+CartId,
        {"count":count})

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
        }
    )

        .then(response=>{
            return response.status
        })
}