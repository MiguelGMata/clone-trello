import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './organisms/Navigation/Navbar';
import Accueil from './pages/Accueil/Accueil';
import Inscription from './pages/Inscription/Inscription';
import Connexion from './pages/Connexion/Connexion';
import Profil from './pages/Profil/Profil';
import Groupe from './pages/Groupe/Groupe';
import Tableaux from './pages/Tableau/Tableaux';
import Liste from './pages/Tableau/Liste';
import ListeId from './pages/Tableau/ListeId';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="App">
          <Route exact path="/" component={Accueil} />
          <div className="container">
            <Route exact path="/inscription" component={Inscription} />
            <Route exact path="/connexion" component={Connexion} />
            <Route exact path="/profil" component={Profil} />
            <Route exact path="/groupe" component={Groupe} />
            <Route exact path="/tableau" component={Tableaux} />
            <Route exact path="/liste/:id" component={Liste} />
            <Route exact path="/list" component={ListeId} />
          </div>
        </div>

      </Router>
    )
  }
}


export default Routes

