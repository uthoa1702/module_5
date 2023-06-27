import axios from "axios";
import data from "bootstrap/js/src/dom/data";


export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:1702/books")
        return result.data
    }catch (e) {
        console.log(e)
    }
}


export const save = async (book) => {
    try {
        const result = await  axios.post("http://localhost:1702/books",book)

    }catch (e) {
        console.log(e)
    }
}


export const findById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:1702/books/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};