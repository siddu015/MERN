function Product({title, price = 1}) {
    return (
        <div>
            <h3>{title}</h3>
            <h5>Price: {price * 1.5}</h5>
        </div>
    );
}

export default Product;