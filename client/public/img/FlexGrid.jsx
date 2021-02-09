import React, { Component } from 'react';
import { Link } from 'react-router-dom';




require('./home.css');

class Accueil2 extends Component {
    render() {
        return (

            <section>
                <div className="boite">

                    <div className="div">
                        <div id="section_grid">
                            <div id="boite-A">

                            </div>
                            <div id="boite-B">

                            </div>
                        </div>
                    </div>
                    <div className="div">
                        <h2>[Div 2]</h2>
                    </div>
                    <div className="div">
                        <h2>[Div 3]</h2>
                    </div>
                    <div className="div">
                        <h2>[Div4]</h2>
                    </div>
                </div>


            </section >
        )
    }
}

export default Accueil2