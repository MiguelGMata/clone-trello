import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Bar from './Bar';
require('./_navbar.scss')

class Navbar extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('token')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <>
        <nav className="navigation">
          <div className="navigation__button media_smartphone">
            <Link to="/" >
              <img className="logo-nav" src="./img/home.jpg" alt="logo1" />
              <h3>Accueil</h3>
            </Link>
          </div>
          <div className="navigation__button inscription-btn ">
            <Link to="/inscription">
              <img className="logo-nav" src="./img/inscription.jpg" alt="logo7" />
              <h3>S'inscrire</h3>
            </Link>
          </div>
          <div className="navigation__button connexion-btn">
            <Link to="/connexion">
              <img className="logo-nav" src="./img/connexion.jpg" alt="logo8" />
              <h3>Connexion</h3>
            </Link>
          </div>
        </nav>
        <div className="div-blanc"></div>
      </>
    )

    const userLink = (
      <nav className="navigation">
        <div className="navigation__button media_smartphone">
          <Link to="/" >
            <img className="logo-nav" src="./img/home.jpg" alt="logo1" />
            <h3>Accueil</h3>
          </Link>
        </div>
        <div className="navigation__button">
          <Link to="/profil" >
            <img className="logo-nav" src="./img/profil.jpg" alt="logo2" />
            <h3>Profil</h3>
          </Link>
        </div>
        <div className="navigation__button">
          <Link to="/tableau">
            <img className="logo-nav" src="./img/annonce.jpg" alt="logo4" />
            <h3>Tableau</h3>
          </Link>
        </div>
        <div className="navigation__button">
          <Link to="/groupes" >
            <img className="logo-nav" src="./img/nous.jpg" alt="logo3" />
            <h3>Groupes</h3>
          </Link>
        </div>
        <div className="navigation__button deconnexion">
          <a href="deconnexion" onClick={this.logOut.bind(this)}>
            <img className="logo-nav" src="./img/deconnecter.jpg" alt="logo5" />
            <h3>Déconnexion</h3>
          </a>
        </div>


      </nav>
    )

    return (
      <>
        <Bar />
        <nav className="navigation">
          {localStorage.token ? userLink : loginRegLink}
        </nav>

      </>
    )
  }
}

export default withRouter(Navbar)


