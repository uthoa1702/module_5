import axios from "axios";

export async function deleteById(id) {
    try {
        await axios.delete("http://localhost:8080/api/admin/orders/"+ id)
    }catch (e) {
        console.log(e)
    }
}


export async function showTop(limit) {
    try {
        const res = await axios.get("http://localhost:8080/order?_sort=total&_order=desc&_limit=" +limit)
        return res.data
    } catch (e) {
        console.log(e)
    }
}


export async function search(values) {
    try {
        const res = await axios.get("http://localhost:8080/order?date_like=" + values.date + "&product_like=" + values.product)
        return res.data
    } catch (e) {
        console.log(e)
    }
}


export async function save(values) {
    try {
        await axios.post("http://localhost:8080/api/admin/create", values)
    } catch (e) {
        console.log(e)
    }
}


export const findAll = async () => {
    try {
        return (await axios.get('http://localhost:8080/api/admin/orders')).data;
    } catch (e) {
        console.log(e)
    }
}