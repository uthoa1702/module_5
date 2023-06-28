
import request from '../http-common'




const findAll = () => {
    return request.get('/users')
}

const save = (user) => {
    return request.post('/users',user)
}

const deleteById = (id) => {
    return request.delete(`/users/${id}`)
}

const userService = {
    findAll,
    save,
    deleteById
}

export default userService;