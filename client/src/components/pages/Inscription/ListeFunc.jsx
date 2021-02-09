import axios from 'axios';

export const register = newUser => {
    return axios
        .post('trello-clone/inscription', {
            nom: newUser.nom,
            prenom: newUser.nom,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log(response.data)
            return response.data
        })
}
