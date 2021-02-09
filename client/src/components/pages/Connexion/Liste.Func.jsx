import axios from 'axios';

export const connexion = user => {
    return axios
        .post('trello-clone/connexion', {
            email: user.email,
            password: user.password,
            errorMessage: user.errorMessage,
        })
        .then(response => {
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
            return response.data
        })

}
