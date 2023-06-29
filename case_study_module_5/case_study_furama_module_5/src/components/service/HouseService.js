import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get(" http://localhost:1702/house?_sort=id&_order=desc")
        return result.data
    } catch (e) {
        console.log(e)
    }
}


export const save = async (house) => {
    try {
        const result = await axios.post("http://localhost:1702/house", house)
        return result.data
    } catch (e) {
        console.log(e)
    }
}


export const findById = async (id) => {
    try {
        const result = await axios.get("http://localhost:1702/house/" + id)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const update = async (house) => {
    try {
        const result = await axios.put("http://localhost:1702/house/" + house.id, house)
        return result.data
    } catch (e) {
        console.log(e)
    }
}


export const deleteById = async (id) => {
    try {
        await axios.delete("http://localhost:1702/house/" + id)

    } catch (e) {
        console.log(e)
    }
}

