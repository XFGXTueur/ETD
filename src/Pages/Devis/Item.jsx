import React from "react";

const Item = () => {
    return (
        <>
            <tr className="devis__container-fourth-block-table-body-line" key={0} >
                <td className="devis__container-fourth-block-table-body-line-description" key={1}>
                    <textarea className="devis__container-fourth-block-table-body-line-description-input" key={2}></textarea>
                </td>
                <td className="devis__container-fourth-block-table-body-line-unit" key={3}>
                    <input className="devis__container-fourth-block-table-body-line-unit-input" type="text" key={4}/>
                </td>
                <td className="devis__container-fourth-block-table-body-line-qty" key={5}>
                    <input className="devis__container-fourth-block-table-body-line-qty-input" type="text" key={6}/>
                </td>
                <td className="devis__container-fourth-block-table-body-line-unitPrice"key={7}>
                    <input className="devis__container-fourth-block-table-body-line-unitPrice-input" type="text" key={8}/>
                </td>
                <td className="devis__container-fourth-block-table-body-line-totalDF"key={9}>
                    <input className="devis__container-fourth-block-table-body-line-totalDF-input" type="text" key={10}/>
                </td>
                <td className="devis__container-fourth-block-table-body-line-total"key={11}>
                    <input className="devis__container-fourth-block-table-body-line-total-input" type="text" key={12}/>
                </td>
            </tr>
        </>
    );
}

export default Item;