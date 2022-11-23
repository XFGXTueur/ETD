import React from "react";

const Item = () => {
    return (
        <>
            <tr className="devis__container-fourth-block-table-body-line">
                <td className="devis__container-fourth-block-table-body-line-description">
                    <textarea className="devis__container-fourth-block-table-body-line-description-input"></textarea>
                </td>
                <td className="devis__container-fourth-block-table-body-line-unit">
                    <input className="devis__container-fourth-block-table-body-line-unit-input" type="text" />
                </td>
                <td className="devis__container-fourth-block-table-body-line-qty">
                    <input className="devis__container-fourth-block-table-body-line-qty-input" type="text" />
                </td>
                <td className="devis__container-fourth-block-table-body-line-unitPrice">
                    <input className="devis__container-fourth-block-table-body-line-unitPrice-input" type="text" />
                </td>
                <td className="devis__container-fourth-block-table-body-line-totalDF">
                    <input className="devis__container-fourth-block-table-body-line-totalDF-input" type="text" />
                </td>
                <td className="devis__container-fourth-block-table-body-line-total">
                    <input className="devis__container-fourth-block-table-body-line-total-input" type="text" />
                </td>
            </tr>
        </>
    );
}

export default Item;