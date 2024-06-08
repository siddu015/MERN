import './product.css'


function Product({title, d1, d2, oldPrice, newPrice}) {
    return (
        <div className="product">
            <h3>{title}</h3>
            <p>{d1}</p>
            <p>{d2}</p>
            <div className="prices">
                <p className="oldprice">₹{oldPrice}</p>
                <p className="newPrice">{newPrice}</p>
            </div>
        </div>
    );
}

export default Product;