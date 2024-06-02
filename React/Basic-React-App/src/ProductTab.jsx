import Product from "./Product.jsx";

function ProductTab() {
    return (
        <>
            <Product title='Iphone' price={90}/>
            <Product title='PS5' price={40}/>
            <Product title='Book' />
        </>
    );
}

export default ProductTab;