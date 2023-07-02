import axios from "axios";

export async function save(values) {
    try {
        const res = await axios.post("http://localhost:1702/contracts",values)
    }catch (e) {
        console.log(e)
    }
}


export const findAll = async () => {
    try {
        const res = await axios.get("http://localhost:1702/contracts?_sort=id&_order=desc")
        return res.data
    }catch (e) {
        console.log(e)
    }
}