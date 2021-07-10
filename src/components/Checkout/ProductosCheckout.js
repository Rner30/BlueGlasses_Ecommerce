import React from "react";
import { useCartContext } from "../../context/context";


const ProductosCheckout = () => {
    const { cart } = useCartContext();
	return (
        <>
        {cart.map((product,i)=>(
            <ul className="list-group mb-3" key={i}>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0 fs-5">{product.item.nombre}</h6>
                <small className="">Cantidad: {product.cantidad}</small>
              </div>
              <span className="">${product.item.precio * product.cantidad}</span>
            </li>
          </ul>
        ))}
        
        </>
	);
};

export default ProductosCheckout;
