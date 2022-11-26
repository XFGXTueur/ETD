import React from "react";
import FR from '../../locales/fr/translation.json';

const t = FR;

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <h1>{t.test}</h1>
                <img className="home__container-img" src="./logo192.png" alt="logo"></img>
                <div className="home__container-btn">
                    <a href="/devis" className="home__container-btn-link" alt="devis">D<span className="home__container-btn-link-bis">evis</span></a>
                </div>
                <div className="home__container-btn">
                    <a href="/factures" className="home__container-btn-link" alt="factures">F<span className="home__container-btn-link-bis">actures</span></a>
                </div>
            </div>
        </div>
    );
}

export default Home;