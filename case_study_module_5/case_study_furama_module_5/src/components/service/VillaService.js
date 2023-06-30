import axios from "axios";

export async function deleteById(id) {
    try {
        const res = await axios.delete("http://localhost:1702/facilities/"+id)
        return res.data
    }catch (e) {
        console.log(e)
    }
}


export async function update(values) {
    try {
        const res = await axios.put("http://localhost:1702/facilities/" +values.id, values)
        return res.data
    }catch (e) {
        console.log(e)
    }
}


export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:1702/facilities?type=Villa&_sort=id&_order=desc")
        return result.data
    } catch (e) {
        console.log(e)
    }
}

export const save = async (values) => {
    try {
        const result = await axios.post("http://localhost:1702/facilities", values)
        return result.data
    }catch (e) {
        console.log(e)
    }
}


export const findById = async (id) => {
    try {
        const result = await axios.get("http://localhost:1702/facilities/" +id)
        return result.data
    }catch (e) {
        console.log(e)
    }
}

