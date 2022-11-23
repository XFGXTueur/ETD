import React from "react";

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__container-img" src="./logo192.png" alt="logo"></img>
                <div className="home__container-btn">
                    <a href="/devis" className="home__container-btn-link" alt="devis">Devis</a>
                </div>
                <div className="home__container-btn">
                    <a href="/factures" className="home__container-btn-link" alt="factures">Factures</a>
                </div>
            </div>
        </div>
    );
}

export default Home;