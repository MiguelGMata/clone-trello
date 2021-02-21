import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import AdminListe from './Liste/List/AdminListe';
import { Link } from 'react-router-dom';


require('./_tableaux.scss')

class Tableaux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titre: '',
            image: '',
            modele: '',
            tableaux: [],
            profilUser: [],
            id: '',
            modalInsertar: false,
            modalEliminar: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.creerTableau = this.creerTableau.bind(this);
    }

    async creerTableau() {
        const token = localStorage.getItem('token');
        await fetch('/trello-clone/tableau/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(this.props.history.push(`/tableau/${this.state.key}`))
            .then(data => {
                //console.log('Tableau ====>', data)
                this.setState({
                    titre: '',
                    image: '',
                    modele: ''
                });
                this.fechTableaux();
            })
            .catch(err => console.error(err));
    }


    componentDidMount() {
        this.fechTableaux();
        this.userTable();
    }

    async userTable() {
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
                //console.log('=============>', data)
                this.setState({ profilUser: data });
            });
    }

    async fechTableaux(id) {
        const token = localStorage.getItem('token');
        await fetch(`/trello-clone/tableau/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ tableaux: data });
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
                this.fechTableaux()
            })
            .catch(error => {
                console.log(error)
            })
            ;
    }

    async tableauPut(id) {
        const token = localStorage.getItem('token');
        await fetch(`/trello-clone/tableau/${id}`, {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                this.setState({
                    titre: data.titre,
                    image: data.image,
                    modele: data.modele,
                    id: data.id
                })
                this.fechTableaux();
            });
    }

    handleChange(e) {
        const { name, value } = e.target;  //pour recouperer les inputs
        console.log(this.state)
        this.setState({
            [name]: value
        });
    }

    modalInsertar = () => {
        this.setState({ modalInsertar: !this.state.modalInsertar });
    }
    modalEliminar = () => {
        this.setState({ modalEliminar: !this.state.modalEliminar });
    }

    render() {

        return (

            <div className="jumbo-tableau">
                <div className="form-group center" id="titre">
                    <div className="title">
                        <h6 className="titleA">{this.state.profilUser.nom_utilisateur}</h6>
                        <Link to='/profil' style={{ textDecoration: "none" }}>
                            <h6 className="titleB">{this.state.profilUser.initiales}</h6>
                        </Link>
                    </div>
                    <button id="btn-titre" className="btn btn-success"
                        onClick={() => { this.modalInsertar() }}>
                        Ajouter titre
                    </button>
                    {this.state.tableaux.map(tableau => (
                        <>
                            <div key={tableau.id}>
                                <div className="lab" htmlFor="exampleInputEmail1">
                                    <h6>🗒{tableau.titre}</h6>
                                    <button className="btn-tableA" onClick={() => { this.modalInsertar() }}>🖊</button>
                                    <button className="btn-tableB" onClick={() => { this.modalEliminar(); }}>🗑</button>
                                </div>
                                <div className="adminListe">
                                    <AdminListe
                                        key={tableau.id}
                                        tableauId={tableau.id}
                                        tableauUser={tableau.user}
                                        type="list" />
                                </div>
                            </div>
                            <Modal isOpen={this.state.modalEliminar}>
                                <ModalBody>
                                    Vous-êtes sûr d'éliminer cet Tableaux ?
                                    </ModalBody>
                                <ModalFooter>
                                    <button className="btn btn-danger" onClick={() => { this.tableauDelete(tableau.id); this.setState({ modalEliminar: false }) }}>Oui</button>
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
                            </form >
                            <ModalFooter>
                                <button className="btn btn-success" onClick={() => { this.creerTableau(); this.modalInsertar() }}>Ajouter</button>
                                {this.state.tableaux.map(tableau => (
                                    <div key={tableau.id}>
                                        <button className="btn btn-primary" onClick={() => { this.tableauPut(tableau.id); this.modalInsertar() }}>Editer</button>
                                    </div>
                                ))}
                                <button className="btn btn-danger" onClick={() => this.modalInsertar()}>Annuler</button>
                            </ModalFooter>

                        </div>
                    </ModalBody>
                </Modal>
            </div>

        )
    }
}

export default Tableaux;

/**
 *
 *    */