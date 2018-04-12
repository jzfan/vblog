import axios from 'axios'
import env from '../../.env.json'
axios.defaults.baseURL = env.axiosBaseURL

export default {
    tree (cb) {
        axios.get('/categories/tree')
            .then(res => cb(res.data))
    },
    blogs (id, cb) {
        axios.get(`/categories/${id}`)
            .then(res => cb(res.data))
    }
}