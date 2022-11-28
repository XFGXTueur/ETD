import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import FR from '../../locales/fr/translation.json';

import Item from "./Item";

const t = FR;

const Factures = () => {

    const [noOfRows, setNoOfRows] = useState(1);
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className="facture">
            <button
                onClick={handlePrint}
                className="facture__print-button"
            >
                {t.ui.print}
            </button>
            <button
                type="button"
                className="facture__addButton"
                onClick={() => setNoOfRows(noOfRows + 1)}
            >
                {t.ui.add}
            </button>
            <button
                type="button"
                className="facture__delButton"
                onClick={() => setNoOfRows(noOfRows - 1)}
            >
                {t.ui.del}
            </button>
            <div className="facture__container" ref={componentRef}>
                {/*  Premier Bloc  */}
                <a href="/" className="facture__container-link" alt="home">
                    <img
                        className="facture__container-link-img"
                        alt="logo"
                        id="img"
                        src="./logo512.png"
                    ></img>
                </a>
                <div className="facture__container-section">
                    <div className="facture__container-section-first-block">
                        <div className="facture__container-section-first-block-infos">
                            <div className="facture__container-section-first-block-infos-facture">
                                <p className="facture__container-section-first-block-infos-facture-text">{t.facture_page.date.title}</p>
                                <input
                                    className="facture__container-section-first-block-infos-facture-input"
                                    type="text"
                                />
                            </div>
                            <div className="facture__container-section-first-block-infos-date">
                                <p className="facture__container-section-first-block-infos-date-text">{t.facture_page.date.date}</p>
                                <input
                                    className="facture__container-section-first-block-infos-date-input"
                                    type="date"
                                />
                            </div>
                            <div className="facture__container-section-first-block-infos-dateL">
                                <p className="facture__container-section-first-block-infos-dateL-text">{t.facture_page.date.limite}</p>
                                <input
                                    className="facture__container-section-first-block-infos-dateL-input"
                                    type="date"
                                />
                            </div>
                        </div>
                    </div>
                    {/*  Second Bloc  */}
                    <div className="facture__container-section-second-block">
                        <div className="facture__container-section-second-block-me">
                            <p className="facture__container-section-second-block-me-text">
                                {t.facture_page.society}
                            </p>
                            <p className="facture__container-section-second-block-me-text">
                                {t.facture_page.adress.street}
                            </p>
                            <p className="facture__container-section-second-block-me-text">
                                {t.facture_page.adress.town}
                            </p>
                            <p className="facture__container-section-second-block-me-text">
                                {t.facture_page.adress.country}
                            </p>
                            <p className="facture__container-section-second-block-me-text">
                                {t.facture_page.contact.phone}
                            </p>
                            <p className="facture__container-section-second-block-me-text">
                                {t.facture_page.contact.email}
                            </p>
                        </div>
                        <div className="facture__container-section-second-block-client">
                            <textarea
                                className="facture__container-section-second-block-client-input"
                                wrap="off"
                            ></textarea>
                        </div>
                    </div>
                    {/*  Troisieme Bloc  */}
                    <div className="facture__container-section-third-block">
                        <span
                            className="facture__container-section-third-block-title"
                            role="textbox"
                            contentEditable
                        >
                            {t.facture_page.title}
                        </span>
                    </div>
                    {/*  Quatrieme Bloc  */}
                    <div className="facture__container-section-fourth-block">
                        <table className="facture__container-section-fourth-block-table">
                            <thead className="facture__container-section-fourth-block-table-head">
                                <td className="facture__container-section-fourth-block-table-head-description">
                                    {t.facture_page.table.head.description}
                                </td>
                                <td className="facture__container-section-fourth-block-table-head-qty">
                                    {t.facture_page.table.head.quantity}
                                </td>
                                <td className="facture__container-section-fourth-block-table-head-unit">
                                    {t.facture_page.table.head.unit}
                                </td>
                                <td className="facture__container-section-fourth-block-table-head-unitPrice">
                                    {t.facture_page.table.head.unit_price}
                                </td>
                                <td className="facture__container-section-fourth-block-table-head-tva">
                                    {t.facture_page.table.head.total.tva}
                                </td>
                                <td className="facture__container-section-fourth-block-table-head-total-tva">
                                    {t.facture_page.table.head.total.ttva}
                                </td>
                                <td className="facture__container-section-fourth-block-table-head-total">
                                    {t.facture_page.table.head.total.total}
                                </td>
                            </thead>
                            <tbody className="facture__container-section-fourth-block-table-body">
                            {[...Array(noOfRows)].map((elementInArray, index) => {
                                    return (
                                        <Item key={16}/>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    {/*  Quatrieme Bloc BIS */}
                    <div className="facture__container-section-fourthBIS-block">
                        <table className="facture__container-section-fourthBIS-block-table">
                            <thead className="facture__container-section-fourthBIS-block-table-head">
                                <td className="facture__container-section-fourthBIS-block-table-head-tva">
                                    <p className="facture__container-section-fourthBIS-block-table-head-tva-text">
                                        {t.facture_page.result.total.ttva}
                                    </p>
                                    <input className="facture__container-section-fourthBIS-block-table-head-tva-value" type="text" readOnly="readonly"/>
                                </td>
                                <td className="facture__container-section-fourthBIS-block-table-head-totalDF">
                                    <p className="facture__container-section-fourthBIS-block-table-head-totalDF-text">
                                        {t.facture_page.result.total.totalht}
                                    </p>
                                    <input className="facture__container-section-fourthBIS-block-table-head-totalDF-value" type="number" readOnly="readonly"/>
                                </td>
                                <td className="facture__container-section-fourthBIS-block-table-head-total">
                                    <p className="facture__container-section-fourthBIS-block-table-head-total-text">
                                        {t.facture_page.result.total.total}
                                    </p>
                                    <input className="facture__container-section-fourthBIS-block-table-head-total-value" type="number" readOnly="readonly"/>
                                </td>
                            </thead>
                        </table>
                    </div>
                    {/*  Cinquieme Bloc  */}
                    <div className="facture__container-section-fifth-block">
                        <p className="facture__container-section-fifth-block-title">
                            {t.facture_page.cgv.title}
                        </p>
                        <ol>
                            <li className="facture__container-section-fifth-block-cgv">
                                {t.facture_page.cgv.content.text1}
                            </li>
                            <li className="facture__container-section-fifth-block-cgv">
                                {t.facture_page.cgv.content.text2}
                            </li>
                            <li className="facture__container-section-fifth-block-cgv">
                                {t.facture_page.cgv.content.text3}
                            </li>
                            <li className="facture__container-section-fifth-block-cgv">
                                {t.facture_page.cgv.content.text4}
                            </li>
                            <li className="facture__container-section-fifth-block-cgv">
                                {t.facture_page.cgv.content.text5}
                            </li>
                        </ol>
                    </div>
                    {/*  Sixieme Bloc  */}
                    <div className="facture__container-section-sixth-block">
                        <div className="facture__container-section-sixth-block-sign">
                            <div className="facture__container-section-sixth-block-sign-me">
                                <p className="facture__container-section-sixth-block-sign-me-text">
                                    {t.facture_page.sign.me}
                                </p>
                                <img
                                    className="facture__container-section-sixth-block-sign-me-img"
                                    alt="signature"
                                    href=""
                                ></img>
                            </div>
                        </div>
                        <div className="facture__container-section-sixth-block-sign">
                            <p className="facture__container-section-sixth-block-sign-client">
                                {t.facture_page.sign.client}
                            </p>
                        </div>
                    </div>
                    {/*  Septieme Bloc  */}
                    <div className="facture__container-section-seventh-block">
                        <p className="facture__container-section-seventh-block-info-status">
                            {t.facture_page.info.statut}
                        </p>
                        <p className="facture__container-section-seventh-block-info-name">
                            {t.facture_page.info.enterprise}
                        </p>
                        <p className="facture__container-section-seventh-block-info-bce">
                            {t.facture_page.info.bce}
                        </p>
                        <p className="facture__container-section-seventh-block-info-tva">
                            {t.facture_page.info.tva}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Factures;