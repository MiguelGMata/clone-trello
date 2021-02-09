import React, { Component } from 'react';
import ListeComplet from './Liste/ListeComplet';
import ListeId from './ListeId';
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

require('./_tableaux.scss')

class Tableaux extends Component {
    constructor() {
        super();
        this.state = {
            titre: '',
            tableaux: [],
            userTableau: [],
            titreTable: [],
            tableauId: [],
            id: '',
            modalInsertar: false,
            modalEliminar: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.creerTableau = this.creerTableau.bind(this);
    }


    modalInsertar = () => {
        this.setState({ modalInsertar: !this.state.modalInsertar });
    }
    modalEliminar = () => {
        this.setState({ modalEliminar: !this.state.modalEliminar });
    }
    async creerTableau(to) {
        if (this.state.id) {
            const token = localStorage.getItem('token');
            await fetch(`/trello-clone/tableau/${this.state.id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        titre: '',
                        id: ''
                    });
                    this.fechTableaux();
                });

        } else {
            const token = localStorage.getItem('token');
            await fetch('/trello-clone/tableau/', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json', // objet avec le tipe de contenu format json
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(this.props.history.push('/tableau'))
                //.then(this.props.history.push('/liste/' + this.props.match.params.id))
                .then(data => {
                    console.log('Tableau====>', data)
                    this.setState({
                        titre: '',
                    });
                    this.fechTableaux();  //pour montrer
                })
                .catch(err => console.error(err));
        }
        //e.preventDefault();
    }
    componentDidMount() {
        this.fechTableaux();
    }

    async fechTableaux() {
        const token = localStorage.getItem('token');
        //console.log('token', token)
        await fetch(`/trello-clone/userTableau/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                //console.log('auto', data)
                this.setState({ userTableau: data, tableaux: data.Tableaus });
                //console.log('pepitona', this.state.tableaux);
                //console.log('pepitona======>>', this.state.tableauId, tableauId: data.Tableaus[0].id);
                //return (this.state.tableauId);
            });
    }

    async tableauDelete(id) {
        //if (window.confirm("Vous-êtes sûr d'éliminer cet Tableaux?")) 
        //debugger;
        const token = localStorage.getItem('token');
        await fetch(`/trello-clone/tableau/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('data==>', data)
                this.fechTableaux()
            })
            .catch(error => {
                console.log(error)
            })
            ;
    }

    async tableauPut(id) {
        await fetch(`/trello-clone/tableau/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    titre: data.titre,
                    id: data.id
                })
                this.fechTableaux()
            });
    }

    handleChange(e) {
        const { name, value } = e.target;  //pour recouperer les inputs
        console.log(this.state)
        this.setState({
            [name]: value
        });
    }

    render() {

        return (
            <>
                <div className="jumbo-tableau">
                    <h5>{this.state.userTableau.nom_utilisateur}</h5>
                    <h6>{this.state.userTableau.initiales}</h6>
                    <button id="btn-titre" className="btn btn-success"
                        onClick={() => { this.modalInsertar() }}>
                        Ajouter titre
                    </button>
                    <div className="form-group center" id="titre">
                        {this.state.tableaux.map(tableau => (
                            <>
                                <div key={tableau.id}>
                                    <label className="lab" htmlFor="exampleInputEmail1">
                                        <h6>🗒{tableau.titre}</h6>
                                    </label>
                                    <button className="btn-tableau" onClick={() => { this.modalInsertar(); this.tableauPut(tableau.id) }}>🖊</button>
                                    <button className="btn-tableau" onClick={() => { this.modalEliminar(); }}>🗑</button><br /><br /><br /><br />
                                    <ListeId key={tableau.id}
                                        tableauId={tableau.id} />
                                    <ListeComplet />

                                </div>
                                <Modal isOpen={this.state.modalEliminar}>
                                    <ModalBody>
                                        Vous-êtes sûr d'éliminer cet Tableaux ?
                                    </ModalBody>
                                    <ModalFooter>
                                        <button className="btn btn-danger" onClick={() => this.tableauDelete(tableau.id)}>Oui</button>
                                        <button className="btn btn-dark" onClick={() => this.setState({ modalEliminar: false })}>Non</button>
                                    </ModalFooter>
                                </Modal>
                            </>
                        ))}
                    </div>

                    <Modal isOpen={this.state.modalInsertar}>
                        <ModalBody>
                            <span className="span-1" onClick={() => this.modalInsertar()}>❌</span>
                            <div className="modalHeader">

                                < form>

                                    <input id="forma" type="text" className="form-control" name="titre"
                                        onChange={this.handleChange} value={this.state.titre} placeholder="Ajouter un titre au tableau" />
                                    <ModalFooter>
                                        <button className="btn btn-success" onClick={() => this.creerTableau()}>
                                            Ajouter
                                        </button>
                                        <button className="btn btn-danger" onClick={() => this.modalInsertar()}>Annuler</button>
                                    </ModalFooter>
                                </form >
                            </div>
                        </ModalBody>
                    </Modal>


                </div>

            </>
        )
    }
}

export default Tableaux


