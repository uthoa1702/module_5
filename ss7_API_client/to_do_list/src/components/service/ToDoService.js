import axios from "axios";

export const getThings = async () => {
    try {
        const result = await axios.get('http://localhost:8080/things')
        return result.data
    }catch (e) {
        console.error('loi roi dai vuong oi',e)
    }

}