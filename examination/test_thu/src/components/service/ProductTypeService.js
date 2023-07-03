import axios from "axios";


export const findAll = async () => {
    try {
        const res = await axios.get("http://localhost:8080/productType");
        return res.data
    }catch (e) {
        console.log(e)
    }
}