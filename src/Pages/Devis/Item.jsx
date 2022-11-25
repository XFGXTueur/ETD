import React from "react";

const Item = () => {
    return (
        <>
            <tr className="devis__container-fourth-block-table-body-line" key={0} >
                <td className="devis__container-fourth-block-table-body-line-description" key={1}>
                    <textarea className="devis__container-fourth-block-table-body-line-description-input" key={2}></textarea>
                </td>
                <td className="devis__container-fourth-block-table-body-line-qty" key={3}>
                    <input className="devis__container-fourth-block-table-body-line-qty-input" type="number" key={4}/>
                </td>
                <td className="devis__container-fourth-block-table-body-line-unit" key={5}>
                    <input className="devis__container-fourth-block-table-body-line-unit-input" type="text" key={6}/>
                </td>
                <td className="devis__container-fourth-block-table-body-line-unitPrice" key={7}>
                    <input className="devis__container-fourth-block-table-body-line-unitPrice-input" type="number" key={8}/>
                </td>
                <td className="devis__container-fourth-block-table-body-line-tva" key={9}>
                    <p className="devis__container-fourth-block-table-body-line-tva-text" type="number" readOnly="readonly" key={10}/>
                    <select className="devis__container-fourth-block-table-body-line-tva-value" name="tva" id="tva" key={11}>
                            <option value="0">0%</option>
                            <option value="6">6%</option>
                            <option value="12">12%</option>
                            <option value="21">21%</option>
                    </select>
                </td>
                <td className="devis__container-fourth-block-table-body-line-total-tva" key={12}>
                    <input className="devis__container-fourth-block-table-body-line-total-tva-input" type="number" readOnly="readonly" key={13}/>
                </td>
                <td className="devis__container-fourth-block-table-body-line-total" key={14}>
                    <input className="devis__container-fourth-block-table-body-line-total-input" type="number" readOnly="readonly" key={15}/>
                </td>
            </tr>
        </>
    );
}

export default Item;