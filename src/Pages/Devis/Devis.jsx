import React, { useState } from "react";

import Item from "./Item";

const Devis = () => {

    const [noOfRows, setNoOfRows] = useState(1);
    
    return (
        <div className="devis">
            <div className="devis__container">
                {/*  Premier Bloc  */}
                <div className="devis__container-first-block">
                    <a href="/" className="devis__container-first-block-link" alt="home">
                        <img 
                            className="devis__container-first-block-link-img" 
                            alt="logo" 
                            src="./logo512.png"
                        ></img>
                    </a> 

                    <div className="devis__container-first-block-infos">
                        <div className="devis__container-first-block-infos-devis">
                            <p className="devis__container-first-block-infos-devis-text">DEVIS :</p>
                            <input 
                                className="devis__container-first-block-infos-devis-input"
                                type="text" 
                            />
                        </div>
                        <div className="devis__container-first-block-infos-date">
                            <p className="devis__container-first-block-infos-date-text">Date :</p>
                            <input 
                                className="devis__container-first-block-infos-date-input"
                                type="date"
                            />
                        </div>
                    </div>
                </div>
                {/*  Second Bloc  */}
                <div className="devis__container-second-block">
                    <div className="devis__container-second-block-me">
                        <p className="devis__container-second-block-me-text">
                            Ma Boite
                        </p>
                        <p className="devis__container-second-block-me-text">
                            Adresse, 0 rue Nom 
                        </p>
                        <p className="devis__container-second-block-me-text">
                            Ma Ville
                        </p>
                        <p className="devis__container-second-block-me-text">
                            Mon Pays
                        </p>
                        <p className="devis__container-second-block-me-text">
                            mail@mail.com
                        </p>
                        <p className="devis__container-second-block-me-text">
                            Tél: 06 06 06 06 06
                        </p>
                    </div>
                    <div className="devis__container-second-block-client">
                        <input 
                            className="devis__container-second-block-client-input-name" 
                            type="text"
                        />
                        <textarea 
                            className="devis__container-second-block-client-input-address" 
                        ></textarea>
                    </div>
                </div>
                {/*  Troisieme Bloc  */}
                <div className="devis__container-third-block">
                    <p className="devis__container-third-block-title">
                        Devis
                    </p>
                    <textarea 
                        className="devis__container-third-block-input"
                        type="text"
                    ></textarea>
                </div>
                {/*  Quatrieme Bloc  */}
                <div className="devis__container-fourth-block">
                    <table className="devis__container-fourth-block-table">
                        <thead className="devis__container-fourth-block-table-head">
                            <td className="devis__container-fourth-block-table-head-description">
                                Description
                            </td>
                            <td className="devis__container-fourth-block-table-head-unit">
                                Unité
                            </td>
                            <td className="devis__container-fourth-block-table-head-qty">
                                Quantité
                            </td>
                            <td className="devis__container-fourth-block-table-head-unitPrice">
                                Prix unitaire
                            </td>
                            <td className="devis__container-fourth-block-table-head-totalDF">
                                Total HT
                            </td>
                            <td className="devis__container-fourth-block-table-head-total">
                                Total
                            </td>
                        </thead>
                        <tbody className="devis__container-fourth-block-table-body">
                        {[...Array(noOfRows)].map((elementInArray, index) => {
                                return (
                                    <Item key={13}/>
                                );
                            })}
                        </tbody>
                    </table>
                    
                </div>
                <button 
                        type="button" 
                        className="devis__container-addButton" 
                        onClick={() => setNoOfRows(noOfRows + 1)}
                    >
                        Add
                    </button>
                    <button 
                        type="button" 
                        className="devis__container-delButton" 
                        onClick={() => setNoOfRows(noOfRows - 1)}
                    >
                        Delete
                    </button>
                {/*  Quatrieme Bloc BIS */}
                <div className="devis__container-fourthBIS-block">
                    <table className="devis__container-fourthBIS-block-table">
                        <thead className="devis__container-fourthBIS-block-table-head">
                            <td className="devis__container-fourthBIS-block-table-head-tva">
                                <p className="devis__container-fourthBIS-block-table-head-tva-text">
                                    TVA
                                </p>
                                <input className="devis__container-fourthBIS-block-table-head-tva-value" type="text"/>
                            </td>
                            <td className="devis__container-fourthBIS-block-table-head-totalDF">
                                <p className="devis__container-fourthBIS-block-table-head-totalDF-text">
                                    Total HT
                                </p>
                                <input className="devis__container-fourthBIS-block-table-head-totalDF-value" type="text"/>
                            </td>
                            <td className="devis__container-fourthBIS-block-table-head-total">
                                <p className="devis__container-fourthBIS-block-table-head-total-text">
                                    Total
                                </p>
                                <input className="devis__container-fourthBIS-block-table-head-total-value" type="text"/>
                            </td>
                        </thead>
                    </table>
                </div>
                {/*  Cinquieme Bloc  */}
                <div className="devis__container-fifth-block">
                    <p className="devis__container-fifth-block-title">
                        TITRE CGV
                    </p>
                    <p className="devis__container-fifth-block-cgv">
                        CGV
                    </p>
                </div>
                {/*  Sixieme Bloc  */}
                <div className="devis__container-sixth-block">
                    <div className="devis__container-sixth-block-sign">
                        <img 
                            className="devis__container-sixth-block-sign-img" 
                            alt="signature"
                            href=""
                        ></img>
                    </div>
                    <div className="devis__container-sixth-block-sign">
                        <p className="devis__container-sixth-block-sign-client">
                            Ma signature :
                        </p>
                    </div>
                </div>
                {/*  Septieme Bloc  */}
                <div className="devis__container-seventh-block">
                    <p className="devis__container-seventh-block-info-status">
                        Statut
                    </p>
                    <p className="devis__container-seventh-block-info-name">
                        Ma Boite
                    </p>
                    <p className="devis__container-seventh-block-info-bce">
                        734820078
                    </p>
                    <p className="devis__container-seventh-block-info-tva">
                        734820078
                    </p>
                </div>
                
            </div>
        </div>
    );
}

export default Devis;