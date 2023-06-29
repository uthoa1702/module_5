import axios from "axios";


export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:1702/customer?_sort=id&_order=desc")
        return result.data
    } catch (e) {
        console.log(e)
    }
}


export const findById = async (id) => {
    try {
        const result = await axios.get("http://localhost:1702/customer/" +id)
        return result.data
    } catch (e) {
        console.log(e)
    }
}

export const save = async (customer) => {
    try {
        const result = await axios.post("http://localhost:1702/customer", customer)
        return result.data
    } catch (e) {
        console.log(e)
    }
}


export const update = async (customer) => {
    try {
        const result = await axios.put("http://localhost:1702/customer/" + customer.id, customer)
        return result.data
    } catch (e) {
        console.log(e)
    }
}


export const deleteById = async (id) => {
    try {
        const result = await axios.delete("http://localhost:1702/customer/" + id)
        return result.data
    } catch (e) {
        console.log(e)
    }
}