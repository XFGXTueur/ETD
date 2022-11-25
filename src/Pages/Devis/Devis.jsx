import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import Item from "./Item";

const Devis = () => {

    const [noOfRows, setNoOfRows] = useState(1);
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className="devis">
            <button
                onClick={handlePrint}
                className="devis__print-button"
            >
                Print
            </button>
            <button
                type="button"
                className="devis__addButton"
                onClick={() => setNoOfRows(noOfRows + 1)}
            >
                Add
            </button>
            <button
                type="button"
                className="devis__delButton"
                onClick={() => setNoOfRows(noOfRows - 1)}
            >
                Delete
            </button>
            <div className="devis__container" ref={componentRef}>
                {/*  Premier Bloc  */}
                <a href="/" className="devis__container-link" alt="home">
                    <img
                        className="devis__container-link-img"
                        alt="logo"
                        id="img"
                        src="./logo512.png"
                    ></img>
                </a>

                <div className="devis__container-section">
                    <div className="devis__container-section-first-block">
                        <div className="devis__container-section-first-block-infos">
                            <div className="devis__container-section-first-block-infos-devis">
                                <p className="devis__container-section-first-block-infos-devis-text">DEVIS :</p>
                                <input
                                    className="devis__container-section-first-block-infos-devis-input"
                                    type="text"
                                />
                            </div>
                            <div className="devis__container-section-first-block-infos-date">
                                <p className="devis__container-section-first-block-infos-date-text">Date :</p>
                                <input
                                    className="devis__container-section-first-block-infos-date-input"
                                    type="date"
                                />
                            </div>
                            <div className="devis__container-section-first-block-infos-dateL">
                                <p className="devis__container-section-first-block-infos-dateL-text">Date limite :</p>
                                <input
                                    className="devis__container-section-first-block-infos-dateL-input"
                                    type="date"
                                />
                            </div>
                        </div>
                    </div>
                    {/*  Second Bloc  */}
                    <div className="devis__container-section-second-block">
                        <div className="devis__container-section-second-block-me">
                            <p className="devis__container-section-second-block-me-text">
                                Ma Boite
                            </p>
                            <p className="devis__container-section-second-block-me-text">
                                Adresse, 0 rue Nom
                            </p>
                            <p className="devis__container-section-second-block-me-text">
                                Ma Ville
                            </p>
                            <p className="devis__container-section-second-block-me-text">
                                Mon Pays
                            </p>
                            <p className="devis__container-section-second-block-me-text">
                                mail@mail.com
                            </p>
                            <p className="devis__container-section-second-block-me-text">
                                Tél: 06 06 06 06 06
                            </p>
                        </div>
                        <div className="devis__container-section-second-block-client">
                            <input
                                className="devis__container-section-second-block-client-input-name"
                                type="text"
                            />
                            <textarea
                                className="devis__container-section-second-block-client-input-address"
                            ></textarea>
                        </div>
                    </div>
                    {/*  Troisieme Bloc  */}
                    <div className="devis__container-section-third-block">
                        <p className="devis__container-section-third-block-title">
                            Devis
                        </p>
                        <textarea
                            className="devis__container-section-third-block-input"
                            type="text"
                        ></textarea>
                    </div>
                    {/*  Quatrieme Bloc  */}
                    <div className="devis__container-section-fourth-block">
                        <table className="devis__container-section-fourth-block-table">
                            <thead className="devis__container-section-fourth-block-table-head">
                                <td className="devis__container-section-fourth-block-table-head-description">
                                    Description
                                </td>
                                <td className="devis__container-section-fourth-block-table-head-qty">
                                    Quantité
                                </td>
                                <td className="devis__container-section-fourth-block-table-head-unit">
                                    Unité
                                </td>
                                <td className="devis__container-section-fourth-block-table-head-unitPrice">
                                    Prix unitaire
                                </td>
                                <td className="devis__container-section-fourth-block-table-head-tva">
                                    % TVA
                                </td>
                                <td className="devis__container-section-fourth-block-table-head-total-tva">
                                    Total TVA
                                </td>
                                <td className="devis__container-section-fourth-block-table-head-total">
                                    Total
                                </td>
                            </thead>
                            <tbody className="devis__container-section-fourth-block-table-body">
                            {[...Array(noOfRows)].map((elementInArray, index) => {
                                    return (
                                        <Item key={16}/>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    {/*  Quatrieme Bloc BIS */}
                    <div className="devis__container-section-fourthBIS-block">
                        <table className="devis__container-section-fourthBIS-block-table">
                            <thead className="devis__container-section-fourthBIS-block-table-head">
                                <td className="devis__container-section-fourthBIS-block-table-head-tva">
                                    <p className="devis__container-section-fourthBIS-block-table-head-tva-text">
                                        Total TVA
                                    </p>
                                    <input className="devis__container-section-fourthBIS-block-table-head-tva-value" type="text" readOnly="readonly"/>
                                </td>
                                <td className="devis__container-section-fourthBIS-block-table-head-totalDF">
                                    <p className="devis__container-section-fourthBIS-block-table-head-totalDF-text">
                                        Total HT
                                    </p>
                                    <input className="devis__container-section-fourthBIS-block-table-head-totalDF-value" type="number" readOnly="readonly"/>
                                </td>
                                <td className="devis__container-section-fourthBIS-block-table-head-total">
                                    <p className="devis__container-section-fourthBIS-block-table-head-total-text">
                                        Total
                                    </p>
                                    <input className="devis__container-section-fourthBIS-block-table-head-total-value" type="number" readOnly="readonly"/>
                                </td>
                            </thead>
                        </table>
                    </div>
                    {/*  Cinquieme Bloc  */}
                    <div className="devis__container-section-fifth-block">
                        <p className="devis__container-section-fifth-block-title">
                            CONDITIONS GENERALES DE VENTE
                        </p>
                        <ol>
                            <li className="devis__container-section-fifth-block-cgv">
                                LES MODALITÉS DE PAIEMENT, LES MODALITÉS DE PAIEMENT, LES MODALITÉS DE PAIEMENT, LES MODALITÉS DE PAIEMENT, 
                            </li>
                            <li className="devis__container-section-fifth-block-cgv">
                                CLAUSE SUR LES INTÉRÊTS DE RETARD,
                            </li>
                            <li className="devis__container-section-fifth-block-cgv">
                                CLAUSE PÉNALE,
                            </li>
                            <li className="devis__container-section-fifth-block-cgv">
                                CLAUSE DE RÉSERVE DE PROPRIÉTÉ,
                            </li>
                            <li className="devis__container-section-fifth-block-cgv">
                                CLAUSE PORTANT SUR LE DÉLAI DE RÉTRACTATION,
                            </li>
                        </ol>
                    </div>
                    {/*  Sixieme Bloc  */}
                    <div className="devis__container-section-sixth-block">
                        <div className="devis__container-section-sixth-block-sign">
                            <img
                                className="devis__container-section-sixth-block-sign-img"
                                alt="signature"
                                href=""
                            ></img>
                        </div>
                        <div className="devis__container-section-sixth-block-sign">
                            <p className="devis__container-section-sixth-block-sign-client">
                                Ma signature :
                            </p>
                        </div>
                    </div>
                    {/*  Septieme Bloc  */}
                    <div className="devis__container-section-seventh-block">
                        <p className="devis__container-section-seventh-block-info-status">
                            Statut
                        </p>
                        <p className="devis__container-section-seventh-block-info-name">
                            Ma Boite
                        </p>
                        <p className="devis__container-section-seventh-block-info-bce">
                            734820078
                        </p>
                        <p className="devis__container-section-seventh-block-info-tva">
                            734820078
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Devis;