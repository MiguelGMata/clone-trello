import React, { Component } from 'react';
require('./_tableaux.scss')

class Liste extends Component {
    constructor() {
        super();
        this.state = {
            titre: '',
            liste: [],
            titreListe: [],
            id: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.creerListe = this.creerListe.bind(this);
    }

    async creerListe() {

        const token = localStorage.getItem('token');
        await fetch(`/trello-clone/liste/+ ${this.props.match.params.id}`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json', // objet avec le tipe de contenu format json
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    titre: '',
                });
                //this.fechListe();  //pour montrer 
            })
            .catch(err => console.error(err));

        //e.preventDefault();
    }
    componentDidMount() {
        // this.fechListe();
        this.creerListe();
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
                <div className="jumbo">
                    <form onSubmit={this.creerListe}>
                        <h2 className="text-center">Listes </h2>
                        <div>
                            <div className="form-group">

                                <div>
                                    <label className="lab" htmlFor="exampleInputEmail1">Liste</label>
                                    <input type="text" className="form-control" name="titre"
                                        onChange={this.handleChange} value={this.state.titre} />
                                </div>
                            </div>
                            <div className="button-center">
                                <button className="button3" type="submit"> Sauvegarder </button>
                                <p>Tableau Id {this.props.match.params.id}</p>
                            </div>
                        </div>
                    </form>


                </div>
            </>
        )
    }
}

export default Liste

/**       <div className="form-group center" id="titre">
                        {this.state.liste.map(liste => (
                            <div key={liste.id}>
                                <label className="lab" htmlFor="exampleInputEmail1"> <h6>🗒{liste.titre}</h6></label>
                                <IconButton >
                                    <EditIcon onClick={() => this.listePut(liste.id)} />
                                </IconButton>
                                <IconButton >
                                    <DeleteIcon onClick={() => this.listeDelete(liste.id)} />
                                </IconButton>
                            </div>
                        ))}
                    </div>


          async fechListe() {
        const token = localStorage.getItem('token');
        //console.log('token', token)
        await fetch(`/trello-clone/userListe/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                //console.log('auto', data)
                this.setState({ userListe: data, liste: data.Listes });
                //console.log('pepitona', this.state.liste);
            });
    }

        async listeDelete(id) {
        if (window.confirm("Vous-êtes sûr d'éliminer cet Liste?")) {
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
                    this.fechListe()
                })
                .catch(error => {
                    console.log(error)
                })
                ;
        }
    }

    async listePut(id) {
        await fetch(`/trello-clone/liste/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    titre: data.titre,
                    id: data.id
                })
            });
    }
                    </div>*/