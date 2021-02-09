import React, { Component } from 'react'

class ListeId extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            tableaux: [],
            listes: [],
            titre: '',
            id: '',
            modalCreerTableau: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.creerListe = this.creerListe.bind(this);

    }
    async creerListe() {

        const token = localStorage.getItem('token');
        await fetch(`/trello-clone/liste/${this.props.tableauId}`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json', // objet avec le tipe de contenu format json
                'Authorization': `Bearer ${token}`
            }
        })
            .then(data => {
                console.log('Tableau====>', data)
                this.setState({
                    titre: '',
                });
            })
            .catch(err => console.error(err));
    }

    componentDidMount() {
        this.fechListes();
    }

    async fechListes() {
        const token = localStorage.getItem('token');
        await fetch(`/trello-clone/userTableauListe/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ tableaux: data.Tableaus, listes: data.Tableaus[0].Listes });
                console.log('pepitona========>', this.state.listes);
            });
    }
    async listeDelete(id) {
        if (window.confirm("Vous-êtes sûr d'éliminer cet liste ?"));
        //debugger;
        const token = localStorage.getItem('token');
        await fetch(`/trello-clone/liste/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('data==>', data)
                this.fechListes()
            })
            .catch(error => {
                console.log(error)
            })
            ;
    }

    handleChange(e) {
        const { name, value } = e.target;
        console.log(this.state)
        this.setState({
            [name]: value
        });
    }

    render() {
        //console.log(this.props.tableauId, 'corocoro')

        return (
            <>
                <div className="form-group">
                    < form onSubmit={this.creerListe} >
                        <div id="form" className="center">
                            <input type="text" className="form-control" name="titre"
                                onChange={this.handleChange} value={this.state.titre} placeholder="Ajouter un titre au Liste" />
                        </div>
                    </form >
                </div>
                <div className="form-group center" id="titre">
                    {this.state.listes.map(liste => (
                        <div key={liste.id}>
                            <label className="lab" htmlFor="exampleInputEmail1"> <h6>{liste.titre}</h6></label>
                            <button className="btn-tableau" onClick={() => this.listeDelete(liste.id)}>🗑</button>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}

export default ListeId;


