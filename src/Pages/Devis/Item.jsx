import FR from '../../locales/fr/translation.json';
import { useLocalStorage } from "../../Utils/useLocalStorage";

const t = FR;

const Item = () => {

    const [quantity, setQuantity] = useLocalStorage("quantity", "0");
    const [price, setPrice] = useLocalStorage("price:", "0");
    const [tva, setTva] = useLocalStorage("tva:", "0");

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }
    const handlePrice = (e) => {
        setPrice(e.target.value);
    }
    const handleTva = (e) => {
        setTva(e.target.value);
    }

    const total = (quantity * price) * (1 + tva / 100).toFixed(2);
    const totalDF = ((quantity * price) * (1 + tva / 100) - (quantity * price)).toFixed(2);

    return (
        <>
            <tr className="devis__container-section-fourth-block-table-body-line" key={"line"} >
                <td className="devis__container-section-fourth-block-table-body-line-description" key={"description"}>
                    <textarea className="devis__container-section-fourth-block-table-body-line-description-input" key={"descriptionInput"}></textarea>
                </td>
                <td className="devis__container-section-fourth-block-table-body-line-qty" key={"quantity"}>
                    <input
                        className="devis__container-section-fourth-block-table-body-line-qty-input"
                        type="number"
                        key={"quantityValue"}
                        value={quantity}
                        onChange={handleQuantity}
                    />
                </td>
                <td className="devis__container-section-fourth-block-table-body-line-unit" key={"unit"}>
                    <input className="devis__container-section-fourth-block-table-body-line-unit-input" type="text" key={"unitText"}/>
                </td>
                <td className="devis__container-section-fourth-block-table-body-line-unitPrice" key={"price"}>
                    <input
                        className="devis__container-section-fourth-block-table-body-line-unitPrice-input"
                        type="number"
                        key={"priceValue"}
                        value={price}
                        onChange={handlePrice}
                    />
                </td>
                <td className="devis__container-section-fourth-block-table-body-line-tva" key={"tva"}>
                    <p className="devis__container-section-fourth-block-table-body-line-tva-text" key={"tvaText"}/>
                    <select
                        className="devis__container-section-fourth-block-table-body-line-tva-value"
                        name="tva"
                        id="tva"
                        key={"tvaValue"}
                        onChange={handleTva}
                    >
                            <option value={tva} selected disabled>{t.devis_page.table.line.tva.unit}</option>
                            <option value={t.devis_page.table.line.tva.value.one}>{t.devis_page.table.line.tva.value.one}{t.devis_page.table.line.tva.unit}</option>
                            <option value={t.devis_page.table.line.tva.value.two}>{t.devis_page.table.line.tva.value.two}{t.devis_page.table.line.tva.unit}</option>
                            <option value={t.devis_page.table.line.tva.value.three}>{t.devis_page.table.line.tva.value.three}{t.devis_page.table.line.tva.unit}</option>
                            <option value={t.devis_page.table.line.tva.value.four}>{t.devis_page.table.line.tva.value.four}{t.devis_page.table.line.tva.unit}</option>
                    </select>
                </td>
                <td className="devis__container-section-fourth-block-table-body-line-total-tva" key={"totalTVA"}>
                    <input
                        className="devis__container-section-fourth-block-table-body-line-total-tva-input"
                        type="number"
                        readOnly="readonly"
                        key={"totalTVAValue"}
                        value={totalDF}
                    />
                </td>
                <td className="devis__container-section-fourth-block-table-body-line-total" key={"total"}>
                    <input
                        className="devis__container-section-fourth-block-table-body-line-total-input"
                        type="number"
                        readOnly="readonly"
                        key={"totalValue"}
                        value={total}
                    />
                </td>
            </tr>
        </>
    );
}

export default Item;