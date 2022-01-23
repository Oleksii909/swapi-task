import * as axios from 'axios'

const instance = axios.create({
    baseUrl: 'https://swapi.dev/api/'
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`people?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId) {
        return instance.get(`people/` + userId);
    }
}