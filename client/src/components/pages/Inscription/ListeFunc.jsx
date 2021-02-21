import axios from 'axios';

export const register = newUser => {
    return axios
        .post('trello-clone/inscription', {
            prenom: newUser.prenom,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            //console.log(response.data)
            return response.data
        })
}
