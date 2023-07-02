import axios from "axios";

export async function search(values) {
    try {
        const res = await axios.get("http://localhost:8080/product?name_like=" + values.name + "&type_like=" + values.type );
        return res.data
    }catch (e) {
        console.log(e)
    }
}


export async function findById(id) {
    try {
        const res = await axios.get("http://localhost:8080/product/"+ id)
        return res.data
    }catch (e) {
        console.log(e)
    }
}


export async function update(values) {
    try {
        await axios.put("http://localhost:8080/product/"+ values.id, values)
    }catch (e) {
        console.log(e)
    }
}


export async function deleteById(id) {
    try {
        await axios.delete("http://localhost:8080/product/"+ id)
    }catch (e) {
        console.log(e)
    }
}


export async function save(values) {
    try {
        await axios.post("http://localhost:8080/product", values)
    } catch (e) {
        console.log(e)
    }
}


export const findAll = async () => {
    try {
        const res = await axios.get("http://localhost:8080/product")
        return res.data
    } catch (e) {
        console.log(e)
    }
}
