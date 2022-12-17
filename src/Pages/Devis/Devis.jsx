import React, { useState, useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import FR from '../../locales/fr/translation.json';


const t = FR;

const Devis = () => {

    //To set the title of the page
    const [title, setTitle] = useState("Devis");

    useEffect(() => {
        let devisNumber = document.getElementById("devisNumber").value;
        document.title = title + " - " + devisNumber;
    }, [title]);

    const changeTitle = (event) => {
        setTitle(event.target.value);
    };

    //To print the page
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    //To save the data in local storage
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
    }, [data]);

    //To add a new row
    const addRow = () => {
        setData([...data, {
            id: data.length + 1,
            description: '',
            quantity: '',
            unit: '',
            price: '',
            tva: '',
            totalDF: '',
            total: ''
        }]);
    };

    const updateRow = (index, key, value) => {
        const newData = [...data];
        newData[index][key] = value;
        setData(newData);
    };

    useEffect(() => {
        if (data.length === 0) {
            addRow();
        }
    }, [data]);

    //delete last row created
    const deleteRow = () => {
        const newData = [...data];
        newData.pop();
        setData(newData);
    };

    //make total of all 'total' values
    const total = data.reduce((acc, item) => {
        return acc + parseFloat(item.total);
    }, 0);

    const totalDF = data.reduce((acc, item) => {
        return acc + parseFloat(item.totalDF);
    }, 0);

    return (
        <div className="devis">
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
                                    id="devisNumber"
                                    defaultValue=""
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
                        <textarea
                            className="devis__container-section-third-block-title"
                            id="title"
                            onChange={changeTitle}
                            value={title}
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
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={row.id} className="devis__container-section-fourth-block-table-body-line">
                                        <td className="devis__container-section-fourth-block-table-body-line-description">
                                            <textarea
                                                className="devis__container-section-fourth-block-table-body-line-description-input"
                                                type="text"
                                                value={row.description}
                                                onChange={(event) => updateRow(index, 'description', event.target.value)}
                                            ></textarea>
                                        </td>
                                        <td className="devis__container-section-fourth-block-table-body-line-qty">
                                            <input
                                                className="devis__container-section-fourth-block-table-body-line-qty-input"
                                                type="number"
                                                value={row.quantity}
                                                onChange={(event) => updateRow(index, 'quantity', event.target.value)}
                                            />
                                        </td>
                                        <td className="devis__container-section-fourth-block-table-body-line-unit">
                                            <input
                                                className="devis__container-section-fourth-block-table-body-line-unit-input"
                                                type="text"
                                                value={row.unit}
                                                onChange={(event) => updateRow(index, 'unit', event.target.value)}
                                            />
                                        </td>
                                        <td className="devis__container-section-fourth-block-table-body-line-unitPrice">
                                            <input
                                                className="devis__container-section-fourth-block-table-body-line-unitPrice-input"
                                                type="number"
                                                value={row.price}
                                                onChange={(event) => updateRow(index, 'price', event.target.value)}
                                            />
                                        </td>
                                        <td className="devis__container-section-fourth-block-table-body-line-tva">
                                            <select
                                                className="devis__container-section-fourth-block-table-body-line-tva-value"
                                                onChange={(event) => updateRow(index, 'tva', event.target.value)}
                                            >
                                                <option defaultValue={row.tva} disabled>{t.devis_page.table.line.tva.unit}</option>
                                                <option value={t.devis_page.table.line.tva.value.one}>
                                                    {t.devis_page.table.line.tva.value.one}
                                                    {t.devis_page.table.line.tva.unit}
                                                </option>
                                                <option value={t.devis_page.table.line.tva.value.two}>
                                                    {t.devis_page.table.line.tva.value.two}
                                                    {t.devis_page.table.line.tva.unit}
                                                </option>
                                                <option value={t.devis_page.table.line.tva.value.three}>
                                                    {t.devis_page.table.line.tva.value.three}
                                                    {t.devis_page.table.line.tva.unit}
                                                </option>
                                                <option value={t.devis_page.table.line.tva.value.four}>
                                                    {t.devis_page.table.line.tva.value.four}
                                                    {t.devis_page.table.line.tva.unit}
                                                </option>
                                            </select>
                                        </td>
                                        <td className="devis__container-section-fourth-block-table-body-line-total-tva">
                                            <input
                                                className="devis__container-section-fourth-block-table-body-line-total-tva-input"
                                                type="number"
                                                readOnly="readonly"
                                                value={row.totalDF=((row.quantity * row.price) * (1 + row.tva / 100) - (row.quantity * row.price)).toFixed(2)}
                                                onChange={(event) => updateRow(index, 'totalDF', event.target.value)}
                                            />
                                        </td>
                                        <td className="devis__container-section-fourth-block-table-body-line-total">
                                            <input
                                                className="devis__container-section-fourth-block-table-body-line-total-input"
                                                type="number"
                                                readOnly="readonly"
                                                value={row.total=((row.quantity * row.price) * (1 + row.tva / 100)).toFixed(2)}
                                                onChange={(event) => updateRow(index, 'total', event.target.value)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button 
                            className="devis__container-section-fourth-block-addButton"
                            onClick={addRow}
                        >
                            {t.ui.add}
                        </button>
                        <button className="devis__container-section-fourth-block-delButton" onClick={deleteRow}>{t.ui.del}</button>
                        <button
                            onClick={handlePrint}
                            className="devis__container-section-fourth-block-print-button"
                        >
                            {t.ui.print}
                        </button>
                    </div>
                    <div className="devis__container-section-fourthBIS-block">
                        <table className="devis__container-section-fourthBIS-block-table">
                            <thead className="devis__container-section-fourthBIS-block-table-head">
                                <td className="devis__container-section-fourthBIS-block-table-head-totalDF">
                                    <p className="devis__container-section-fourthBIS-block-table-head-totalDF-text">
                                        {t.devis_page.result.total.totalht}
                                    </p>
                                    <input
                                        className="devis__container-section-fourthBIS-block-table-head-totalDF-value"
                                        type="number"
                                        readOnly="readonly"
                                        value={(total - totalDF).toFixed(2)}
                                    />
                                </td>
                                <td className="devis__container-section-fourthBIS-block-table-head-tva">
                                    <p className="devis__container-section-fourthBIS-block-table-head-tva-text">
                                        {t.devis_page.result.total.ttva}
                                    </p>
                                    <input
                                        className="devis__container-section-fourthBIS-block-table-head-tva-value"
                                        type="text"
                                        readOnly="readonly"
                                        value={totalDF.toFixed(2)}
                                    />
                                </td>
                                <td className="devis__container-section-fourthBIS-block-table-head-total">
                                    <p className="devis__container-section-fourthBIS-block-table-head-total-text">
                                        {t.devis_page.result.total.total}
                                    </p>
                                    <input
                                        className="devis__container-section-fourthBIS-block-table-head-total-value"
                                        type="number"
                                        readOnly="readonly"
                                        value={total.toFixed(2)}
                                    />
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