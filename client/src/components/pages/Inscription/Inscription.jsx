import React, { Component } from 'react';
import { register } from './ListeFunc';
import { Link } from 'react-router-dom';
require('./_inscription.scss')

class Inscription extends Component {
    constructor() {
        super()
        this.state = {
            prenom: '',
            email: '',
            password: '',
            errorMessage: [],
            status: [],
            error: [],
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const newUser = {
            prenom: this.state.prenom,
            email: this.state.email,
            password: this.state.password,
        }
        register(newUser)
            .then(res => {
                if (res.status) {
                    this.props.history.push(`/connexion`)
                    this.state.status = (res.status)

                } else {
                    window.alert(res.error)
                }

            })
            .catch(err => {
                this.setState({
                    errorMessage: err.response
                });
                this.state.error = (this.state.errorMessage.data.description);
            })
    }
    render() {
        return (
            <>
                <div className="image-3"></div>
                <div className="conteneur" id="taille-i">
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                <Link to='/'>
                                    <img className="logo-2" src="./img/trello-clone.png" alt="logotrello" />
                                </Link>
                                <h2>Inscrivez-vous à votre compte</h2>
                                <div className="form-group">
                                    <label htmlFor="name">Prénom</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="prenom"
                                        placeholder="Indiquez votre prenom"
                                        value={this.state.prenom}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Indiquez  votre email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Mot de passe</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Créez votre mot de passe"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="error">
                                    <h6>{this.state.error}</h6>
                                    <h6>{this.state.status}</h6>
                                </div>
                                <p>En vous inscrivant, vous confirmez avoir lu et accepté nos conditions de service et notre politique de <Link>confidentialité.</Link></p>
                                <div id="btn-inscription" className="button-center">
                                    <button
                                        type="submit"
                                        className="button"
                                    >
                                        Continuer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
                <div className="image-4"></div>
            </>
        )
    }
}

export default Inscription;