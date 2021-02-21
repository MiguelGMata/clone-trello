import React, { Component } from 'react';
import { connexion } from './Liste.Func';
import { Link } from 'react-router-dom';

require('./_connexion.scss')


class Connexion extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errorMessage: [],
            error: '',
            modalError: false,
            errorAlert: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    modalError = () => {
        this.setState({ modalError: !this.state.modalError });
    }
    onSubmit(e) {
        e.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        connexion(user)
            .then(res => {
                if (res) {
                    this.props.history.push(`/profil`)
                }
            })
            .catch(err => {
                this.setState({
                    errorMessage: err.response
                });
                this.state.error = (this.state.errorMessage.data.description);
                //console.log('careverguita', this.state.error)
                //if (window.alert(this.state.error)) {
                //}

            })
    }
    render() {

        return (
            <>

                <div className="image-1"></div>
                <div className="conteneur" id="taille">
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>

                                <Link to='/'>
                                    <img className="logo-2" src="./img/trello-clone.png" alt="logotrello" />
                                </Link>

                                <h2>Se connecter à Clone Trello</h2>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Indiquez votre email"
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
                                        placeholder="Indiquez votre mot de passe"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="button-center">
                                    <button type="submit" className="button">
                                        Se connecter
                            </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="error">
                        <h6>{this.state.error}</h6>
                    </div>


                    <div className="button-center">
                        <button className="button2" type="submit">
                            <Link to="/inscription" style={{ textDecoration: "none" }}>
                                <h2>Inscription</h2>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="image-2"></div>
            </>
        )
    }
}

export default Connexion

