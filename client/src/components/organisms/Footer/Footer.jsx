import React, { Component } from 'react';
import { Link } from 'react-router-dom';
require('./_footer.scss');


class Footer extends Component {
  render() {
    return (
      <footer>
        <div id="section_grid">
          <a href="https://trello.com/templates" target="imagen">
            <div id="boite-1"></div>
          </a>
          <a href="https://trello.com/platforms" target="imagen">
            <div id="boite-2">Applications </div>
          </a>
          <a href="https://developer.atlassian.com/cloud/trello/" target="imagen">
            <div id="boite-3">Développeurs</div>
          </a>
          <a href="https://www.atlassian.com/legal/cloud-terms-of-service" target="imagen">
            <div id="boite-4">Légal</div>
          </a>
          <a href="https://trello.com/privacy" target="imagen">
            <div id="boite-5">Confidentialité</div>
          </a>
          <div id="boite-6">
            <h5>Commencez à planifier dès aujourd'hui</h5>
            <h6> Inscrivez-vous et rejoignez plus d'un million d'équipes dans le monde qui utilisent Trello pour en faire plus.</h6>
            <Link to='/inscription' style={{ textDecoration: "none" }}>
              <div className="button-center">
                <button className="button">Lancez-vous, c'est gratuit!</button>
              </div>
            </Link>
          </div>

        </div>
        <h1>ATLASSIAN</h1>
        <p>© Copyright 2021, Tous droits réservés.</p>

      </footer>
    )
  }
}
export default Footer;


