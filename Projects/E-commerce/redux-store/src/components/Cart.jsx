import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../features/cartSlice'
function Cart() {
    const items = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    return (
        <div style={{ marginTop: "20px", borderTop: "2px solid #555", paddingTop: "10px" }}>
            <h2>Your Cart: {items.length} Items</h2>

            {items.map((item, index) => (
                <div key={index} style={{ background: "#444", padding: "10px", margin: "5px", borderRadius: "5px", display: "flex", justifyContent: "space-between" }}>
                    <span>{item.name} - ${item.price}</span>


                    <button
                        onClick={() => dispatch(removeItem(index))}
                        style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
                    >
                        X
                    </button>

                </div>
            ))}
        </div>
    )
}

export default Cart