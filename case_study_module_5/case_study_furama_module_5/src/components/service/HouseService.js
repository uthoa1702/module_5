import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get(" http://localhost:1702/house")
        return result.data
    } catch (e) {
        console.log(e)
    }
}

