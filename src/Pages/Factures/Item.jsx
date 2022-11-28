import React from "react";
import FR from '../../locales/fr/translation.json';

const t = FR;

const Item = () => {
    return (
        <>
            <tr className="facture__container-section-fourth-block-table-body-line" key={0} >
                <td className="facture__container-section-fourth-block-table-body-line-description" key={1}>
                    <textarea className="facture__container-section-fourth-block-table-body-line-description-input" key={2}></textarea>
                </td>
                <td className="facture__container-section-fourth-block-table-body-line-qty" key={3}>
                    <input className="facture__container-section-fourth-block-table-body-line-qty-input" type="number" key={4}/>
                </td>
                <td className="facture__container-section-fourth-block-table-body-line-unit" key={5}>
                    <input className="facture__container-section-fourth-block-table-body-line-unit-input" type="text" key={6}/>
                </td>
                <td className="facture__container-section-fourth-block-table-body-line-unitPrice" key={7}>
                    <input className="facture__container-section-fourth-block-table-body-line-unitPrice-input" type="number" key={8}/>
                </td>
                <td className="facture__container-section-fourth-block-table-body-line-tva" key={9}>
                    <p className="facture__container-section-fourth-block-table-body-line-tva-text" type="number" readOnly="readonly" key={10}/>
                    <select className="facture__container-section-fourth-block-table-body-line-tva-value" name="tva" id="tva" key={11}>
                            <option value={t.facture_page.table.line.tva.value.one}>{t.facture_page.table.line.tva.value.one}{t.facture_page.table.line.tva.unit}</option>
                            <option value={t.facture_page.table.line.tva.value.two}>{t.facture_page.table.line.tva.value.two}{t.facture_page.table.line.tva.unit}</option>
                            <option value={t.facture_page.table.line.tva.value.three}>{t.facture_page.table.line.tva.value.three}{t.facture_page.table.line.tva.unit}</option>
                            <option value={t.facture_page.table.line.tva.value.four}>{t.facture_page.table.line.tva.value.four}{t.facture_page.table.line.tva.unit}</option>
                    </select>
                </td>
                <td className="facture__container-section-fourth-block-table-body-line-total-tva" key={12}>
                    <input className="facture__container-section-fourth-block-table-body-line-total-tva-input" type="number" readOnly="readonly" key={13}/>
                </td>
                <td className="facture__container-section-fourth-block-table-body-line-total" key={14}>
                    <input className="facture__container-section-fourth-block-table-body-line-total-input" type="number" readOnly="readonly" key={15}/>
                </td>
            </tr>
        </>
    );
}

export default Item;