import axios from "axios";


export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:1702/customerType")
        return result.data
    }catch (e) {
        console.log(e)
    }
}


export const findById = async (id) => {
    try {
        const result = await axios.get("http://localhost:1702/customerType/" + id)
        return result.data
    }catch (e) {
        console.log(e)
    }
}