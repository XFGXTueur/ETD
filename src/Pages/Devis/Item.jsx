import React from "react";

const Item = () => {
    return (
        <>
            <tr className="devis__container-fourth-block-table-body-line">
                <td className="devis__container-fourth-block-table-body-line-description">
                    <textarea className="devis__container-fourth-block-table-body-line-description-input"></textarea>
                </td>
                <td className="devis__container-fourth-block-table-body-line-qty">
                    <input className="devis__container-fourth-block-table-body-line-qty-input" type="number" />
                </td>
                <td className="devis__container-fourth-block-table-body-line-unit">
                    <input className="devis__container-fourth-block-table-body-line-unit-input" type="text" />
                </td>
                <td className="devis__container-fourth-block-table-body-line-unitPrice">
                    <input className="devis__container-fourth-block-table-body-line-unitPrice-input" type="number" />
                </td>
                <td className="devis__container-fourth-block-table-body-line-tva">
                    <p className="devis__container-fourth-block-table-body-line-tva-text" type="number" readonly="readonly"/>
                    <select className="devis__container-fourth-block-table-body-line-tva-value" name="tva" id="tva">
                            <option value="0">0%</option>
                            <option value="6">6%</option>
                            <option value="12">12%</option>
                            <option value="21">21%</option>
                    </select>
                </td>
                <td className="devis__container-fourth-block-table-body-line-total">
                    <input className="devis__container-fourth-block-table-body-line-total-input" type="number" readonly="readonly"/>
                </td>
            </tr>
        </>
    );
}

export default Item;