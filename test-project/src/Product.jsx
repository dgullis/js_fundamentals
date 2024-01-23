import React from "react";

const Product = (props) => {

    return (
    <div id = "product">
        <p id ="name">{props.name}</p>
        <p id ="description">{props.description}</p>
        <p id ="price">{props.price}</p>
    </div>
    )
}

export default Product;