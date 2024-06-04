import Product from "./Product.jsx";

function ProductTab() {
    return (
        <div className="product-list">
            <Product title='Logitech' d1="8000 DPI" d2="5 Programmable buttons" oldPrice="12,495" newPrice="8,999"/>
            <Product title='Appil pencil(2nd Gen)' d1="Intuitive Touch Surface" d2="Designed for iPad Pro" oldPrice="11,900" newPrice="9,199"/>
            <Product title='Zebronics' d1="Designed for ipad Pro" d2="Intutive Touch Surface" oldPrice="1,599" newPrice="999"/>
            <Product title='Petronic' d1="Wireless Mouse 2.4GHZ" d2="Optical Orientation" oldPrice="599" newPrice="278"/>

        </div>
    );
}
export default ProductTab;