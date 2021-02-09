import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../organisms/Footer/Footer';
import CarouselContainer from '../../molecules/Slider/CarouselContainer';
require('./_accueil.scss');

class Accueil extends Component {
    render() {
        return (
            <section>
                <div className="boite">
                    <div className="div">
                        <div id="section_grid">
                            <div id="boite-A">
                                <Link to='/'>
                                    <img className="logo" src="./img/trello-clone.png" alt="logotrello" /><br />
                                </Link>
                                <h1 className="titre">Avec Trello, les équipes peuvent collaborer davanyage et accomplir toujours plus de choses</h1>
                                <p className="text">Les tableaux, listes et cartes de CloneTrello permettent aux équipes d'organiser les projets et de
                                définir leur ordre de priorité de facon amusante, souple et enrichissante
                                </p>
                            </div>
                            <div id="boite-B"></div>
                        </div>
                    </div>
                    <div className="div">
                        <div id="section_grid-2">
                            <div id="boite-A">
                                <h1 className="titre">Collaborez avec toutes les équipes</h1>
                                <p className="text">Que ce soit pour votre travail,
                                pour un projet parallèle ou même pour vos prochaines vacances en famille, Trello aide votre équipe à rester organisée.
                                </p>
                                <div className="button">
                                    <Link to='/inscription'>
                                        <button type="submit" className="button">
                                            Commencez à agir
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div id="boite-B"></div>
                        </div>
                    </div>
                    <div className="div">
                        <div id="section_grid-3">
                            <div id="boite-A"></div>
                            <div id="boite-B">
                                <h1 className="titre-2">Des informations en un simple coup d'œil</h1>
                                <p className="text-2">Plongez au cœur des détails en ajoutant des commentaires, des pièces jointes,
                                des dates limites et d'autres éléments directement dans vos cartes Trello. Collaborez afin de réaliser vos projets de A à Z.</p>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                        <div id="section_grid-4">
                            <div id="boite-A"></div>
                        </div>
                    </div>
                </div>

                <CarouselContainer />
                <Footer />

            </section >
        )
    }
}

export default Accueil
