import axios from "axios";


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
        const response = await axios.get('http://localhost:1702/books/' +id);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error
    }
};


export const update = async (book) => {
    try {
        const response = await axios.put('http://localhost:1702/books/' + book.id, book)
        return response.data
    }catch (e) {
        console.log(e)
    }
}


export const deleteBook = async (id) => {
    try {
         await axios.delete(`http://localhost:1702/books/${id}` )

    }catch (e) {
        console.log(e)
    }
}
