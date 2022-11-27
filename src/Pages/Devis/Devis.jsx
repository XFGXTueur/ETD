import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import FR from '../../locales/fr/translation.json';

import Item from "./Item";

const t = FR;

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
                {t.ui.print}
            </button>
            <button
                type="button"
                className="devis__addButton"
                onClick={() => setNoOfRows(noOfRows + 1)}
            >
                {t.ui.add}
            </button>
            <button
                type="button"
                className="devis__delButton"
                onClick={() => setNoOfRows(noOfRows - 1)}
            >
                {t.ui.del}
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
                                <p className="devis__container-section-first-block-infos-devis-text">{t.devis_page.date.title}</p>
                                <input
                                    className="devis__container-section-first-block-infos-devis-input"
                                    type="text"
                                />
                            </div>
                            <div className="devis__container-section-first-block-infos-date">
                                <p className="devis__container-section-first-block-infos-date-text">{t.devis_page.date.date}</p>
                                <input
                                    className="devis__container-section-first-block-infos-date-input"
                                    type="date"
                                />
                            </div>
                            <div className="devis__container-section-first-block-infos-dateL">
                                <p className="devis__container-section-first-block-infos-dateL-text">{t.devis_page.date.limite}</p>
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
                                {t.devis_page.society}
                            </p>
                            <p className="devis__container-section-second-block-me-text">
                                {t.devis_page.adress.street}
                            </p>
                            <p className="devis__container-section-second-block-me-text">
                                {t.devis_page.adress.town}
                            </p>
                            <p className="devis__container-section-second-block-me-text">
                                {t.devis_page.adress.country}
                            </p>
                            <p className="devis__container-section-second-block-me-text">
                                {t.devis_page.contact.phone}
                            </p>
                            <p className="devis__container-section-second-block-me-text">
                                {t.devis_page.contact.email}
                            </p>
                        </div>
                        <div className="devis__container-section-second-block-client">
                            <textarea
                                className="devis__container-section-second-block-client-input"
                                wrap="off"
                            ></textarea>
                        </div>
                    </div>
                    {/*  Troisieme Bloc  */}
                    <div className="devis__container-section-third-block">
                        <p className="devis__container-section-third-block-title">
                            {t.devis_page.title}
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
                                    {t.devis_page.table.head.description}
                                </td>
                                <td className="devis__container-section-fourth-block-table-head-qty">
                                    {t.devis_page.table.head.quantity}
                                </td>
                                <td className="devis__container-section-fourth-block-table-head-unit">
                                    {t.devis_page.table.head.unit}
                                </td>
                                <td className="devis__container-section-fourth-block-table-head-unitPrice">
                                    {t.devis_page.table.head.unit_price}
                                </td>
                                <td className="devis__container-section-fourth-block-table-head-tva">
                                    {t.devis_page.table.head.total.tva}
                                </td>
                                <td className="devis__container-section-fourth-block-table-head-total-tva">
                                    {t.devis_page.table.head.total.ttva}
                                </td>
                                <td className="devis__container-section-fourth-block-table-head-total">
                                    {t.devis_page.table.head.total.total}
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
                                        {t.devis_page.result.total.ttva}
                                    </p>
                                    <input className="devis__container-section-fourthBIS-block-table-head-tva-value" type="text" readOnly="readonly"/>
                                </td>
                                <td className="devis__container-section-fourthBIS-block-table-head-totalDF">
                                    <p className="devis__container-section-fourthBIS-block-table-head-totalDF-text">
                                        {t.devis_page.result.total.totalht}
                                    </p>
                                    <input className="devis__container-section-fourthBIS-block-table-head-totalDF-value" type="number" readOnly="readonly"/>
                                </td>
                                <td className="devis__container-section-fourthBIS-block-table-head-total">
                                    <p className="devis__container-section-fourthBIS-block-table-head-total-text">
                                        {t.devis_page.result.total.total}
                                    </p>
                                    <input className="devis__container-section-fourthBIS-block-table-head-total-value" type="number" readOnly="readonly"/>
                                </td>
                            </thead>
                        </table>
                    </div>
                    {/*  Cinquieme Bloc  */}
                    <div className="devis__container-section-fifth-block">
                        <p className="devis__container-section-fifth-block-title">
                            {t.devis_page.cgv.title}
                        </p>
                        <ol>
                            <li className="devis__container-section-fifth-block-cgv">
                                {t.devis_page.cgv.content.text1}
                            </li>
                            <li className="devis__container-section-fifth-block-cgv">
                                {t.devis_page.cgv.content.text2}
                            </li>
                            <li className="devis__container-section-fifth-block-cgv">
                                {t.devis_page.cgv.content.text3}
                            </li>
                            <li className="devis__container-section-fifth-block-cgv">
                                {t.devis_page.cgv.content.text4}
                            </li>
                            <li className="devis__container-section-fifth-block-cgv">
                                {t.devis_page.cgv.content.text5}
                            </li>
                        </ol>
                    </div>
                    {/*  Sixieme Bloc  */}
                    <div className="devis__container-section-sixth-block">
                        <div className="devis__container-section-sixth-block-sign">
                            <div className="devis__container-section-sixth-block-sign-me">
                                <p className="devis__container-section-sixth-block-sign-me-text">
                                    {t.devis_page.sign.me}
                                </p>
                                <img
                                    className="devis__container-section-sixth-block-sign-me-img"
                                    alt="signature"
                                    href=""
                                ></img>
                            </div>
                        </div>
                        <div className="devis__container-section-sixth-block-sign">
                            <p className="devis__container-section-sixth-block-sign-client">
                                {t.devis_page.sign.client}
                            </p>
                        </div>
                    </div>
                    {/*  Septieme Bloc  */}
                    <div className="devis__container-section-seventh-block">
                        <p className="devis__container-section-seventh-block-info-status">
                            {t.devis_page.info.statut}
                        </p>
                        <p className="devis__container-section-seventh-block-info-name">
                            {t.devis_page.info.enterprise}
                        </p>
                        <p className="devis__container-section-seventh-block-info-bce">
                            {t.devis_page.info.bce}
                        </p>
                        <p className="devis__container-section-seventh-block-info-tva">
                            {t.devis_page.info.tva}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Devis;