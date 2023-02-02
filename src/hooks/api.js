import axios from "axios";


const base_url = "https://139.162.218.167/" //"http://localhost:8000/"





export function getGoods(props) {
    axios.get(base_url+'api/v1/goods').then(

        response=>{
            props.setGoods(response.data.data)
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
