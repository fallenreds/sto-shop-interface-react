import axios from "axios";


const base_url = "http://185.220.205.200:8000/"

export function getGoods(props) {
    axios.get(base_url+'goods').then(
        response=>{
            props.setGoods(response.data.data)
        }
    )
}

