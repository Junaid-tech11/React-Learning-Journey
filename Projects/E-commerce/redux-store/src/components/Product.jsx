import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

function Product() {
    const dispatch = useDispatch()

    return (
        <div style={{ border: "1px solid white", padding: "20px", margin: "20px" }}>
            <h2>Sony Headphones</h2>
            <p>$100</p>


            <button onClick={() => dispatch(addItem({ name: "Sony Headphones", price: 100 }))}>
                Add to Cart 🛒
            </button>
        </div>
    )
}

export default Product