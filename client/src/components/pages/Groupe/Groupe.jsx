import React, { Component } from 'react';
import ListeComple from '../Tableau/Liste/Tuto/ListeComplet';
require('./_groupe.scss');

class Groupe extends Component {



    render() {

        return (
            <div className="groupe">
                <ListeComple />
            </div>


        )
    }
}

export default Groupe;
/**    <img className="style" src="https://parepourlautisme.fr/wp-content/uploads/2019/04/travaux.png" alt="logotrello" /> */