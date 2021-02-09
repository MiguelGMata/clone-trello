import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import ListeId from '../Tableau/ListeId';
require('./_profil.scss');

class Profil extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            Tableau: [],
            profilUser: [],
            titre: '',
            id: '',
            modalCreerTableau: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.creerTableau = this.creerTableau.bind(this);
    }

    async componentDidMount() {
        const token = localStorage.getItem('token');
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


    modalCreerTableau = () => {
        this.setState({ modalCreerTableau: !this.state.modalCreerTableau });
    }

    async creerTableau(tableauId) {

        const token = localStorage.getItem('token');
        await fetch('/trello-clone/tableau/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json', // objet avec le tipe de contenu format json
                'Authorization': `Bearer ${token}`
            }
        })
            .then(this.props.history.push(`/tableau`))
            .then(data => {
                console.log('Tableau====>', data)
                this.setState({
                    titre: '',
                });
            })
            .catch(err => console.error(err));
    }

    handleChange(e) {
        const { name, value } = e.target;  //pour recouperer les inputs
        console.log(this.state)
        this.setState({
            [name]: value
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
                        <button className="button3" onClick={() => { this.modalCreerTableau() }}>Ajouter un titre</button>

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

                <Modal isOpen={this.state.modalCreerTableau}>
                    <ModalBody className="conteneur-2" >
                        <span className="span-1" onClick={() => this.modalInsertar()}>❌</span>
                        <div className="modalHeader">
                            < form>
                                <input id="forma" type="text" className="form-control" name="titre"
                                    onChange={this.handleChange} value={this.state.titre} placeholder="Ajouter un titre au tableau" />
                                <ModalFooter  >
                                    <button className="btn btn-success" onClick={() => this.creerTableau()}>
                                        Ajouter
                                        </button>
                                    <button className="btn btn-danger" onClick={() => this.modalCreerTableau()}>Annuler</button>
                                </ModalFooter>
                            </form >
                        </div>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}
export default Profil

/** */