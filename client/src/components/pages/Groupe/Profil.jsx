import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

require('./_profil.scss');

class Profil extends Component {

    state = {
        loading: true,
        Tableau: [],
        profilUser: []
    }

    async componentDidMount() {
        const token = localStorage.getItem('token');
        //console.log('token', token)
        await fetch(`/trello-clone/profil`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('auto', data)
                this.setState({ Tableau: data.Tableaus, loading: false, profilUser: data });
            });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
        if (!this.state.Tableau) {
            return <div>il n'y a pas profil</div>
        }
        return (
            <>
                <div className="conteneur-2">
                    <Link to='/'>
                        <img className="logo-3" src="./img/trello-clone.png" alt="logotrello" />
                    </Link>
                    <div className="jumbo-1">
                        <h2 className="text-center">{this.state.profilUser.prenom} {this.state.profilUser.nom}</h2>
                        <div className="table">
                            <h6>Nom : {this.state.profilUser.nom}</h6>
                            <h6>Prenom : {this.state.profilUser.prenom}</h6>
                            <h6>Initiales : {this.state.profilUser.initiales}</h6>
                            <h6>Nom d'utilisateur : {this.state.profilUser.nom_utilisateur}</h6>
                            <h6>Email : {this.state.profilUser.email}</h6>
                        </div>
                        <Link to="/tableau" >
                            <button href="" className="button3">
                                Créer un tableau
                        </button>
                        </Link>
                    </div>
                    <div className="jumbo-2">
                        <h5 className="text-center">Tableaux</h5>
                        {this.state.Tableau.map(tableau => (
                            <div className="table-aniprofil" key={tableau.id}>
                                <h6>{tableau.titre}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default Profil


/**
 *
 * import React, { Component } from 'react';

import { Link } from 'react-router-dom';

require('./_profil.scss');

class Profil extends Component {

    state = {
        loading: true,
        Tableau: [],
        profilUser: []
    }

    async componentDidMount() {
        const token = localStorage.getItem('token');
        //console.log('token', token)
        await fetch(`/trello-clone/profil`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('auto', data)
                this.setState({ Tableau: data.Tableaus, loading: false, profilUser: data });
            });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
        if (!this.state.Tableau) {
            return <div>il n'y a pas profil</div>
        }
        return (
            <>
                <div className="conteneur-2">
                    <Link to='/'>
                        <img className="logo-3" src="./img/trello-clone.png" alt="logotrello" />
                    </Link>
                    <div className="jumbo-1">
                        <h2 className="text-center">{this.state.profilUser.prenom} {this.state.profilUser.nom}</h2>
                        <div className="table">
                            <h6>Nom : {this.state.profilUser.nom}</h6>
                            <h6>Prenom : {this.state.profilUser.prenom}</h6>
                            <h6>Initiales : {this.state.profilUser.initiales}</h6>
                            <h6>Nom d'utilisateur : {this.state.profilUser.nom_utilisateur}</h6>
                            <h6>Email : {this.state.profilUser.email}</h6>
                        </div>
                        <Link to="/tableau" >
                            <button href="" className="button3">
                                Créer un tableau
                        </button>
                        </Link>
                    </div>
                    <div className="jumbo-2">
                        <h5 className="text-center">Tableaux</h5>
                        {this.state.Tableau.map(tableau => (
                            <div className="table-aniprofil" key={tableau.id}>
                                <h6>{tableau.titre}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default Profil
 */