import React from "react";
import FR from '../../locales/fr/translation.json';

const t = FR;

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__container-img"
                    src="./logo192.png"
                    alt="logo"
                ></img>
                <div className="home__container-btn">
                    <a
                        href="/devis"
                        className="home__container-btn-link"
                        alt="devis"
                    >
                        {t.home.devis.capital}
                        <span className="home__container-btn-link-bis">
                            {t.home.devis.lower}
                        </span>
                    </a>
                </div>
                <div className="home__container-btn">
                    <a
                        href="/factures"
                        className="home__container-btn-link"
                        alt="factures"
                    >
                        {t.home.factures.capital}
                        <span className="home__container-btn-link-bis">
                            {t.home.factures.lower}
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;