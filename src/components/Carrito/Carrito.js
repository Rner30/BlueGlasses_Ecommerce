import React from "react";
import { useCartContext } from "../../context/context";
import {Link} from 'react-router-dom';
import {DivImg,DIV,DivRounded} from './CarritoCss'
import accounting from "accounting";


const Carrito = () => {
	const { cart, precioTotal, removeItem, clearCart } = useCartContext();

	return (
		<>
		<DivImg>
			<h2 className="text-center">Carrito</h2>
		</DivImg>
		<DIV className="container">
			<div className="row">
				<DivRounded className="col-lg-8 shadow-lg pt-3 ms-auto">
					{precioTotal === 0 ? (
						<h2 className="text-center">Agrega productos al carrito!</h2>
					) : null}

					{cart.map((product, i) => (
						<div className="row mt-3" key={i}>
							<div className="col-lg-2">
								<img src={product.item.picture} alt="" className="img-fluid" />
							</div>
							<div className="col-lg-2 text-center">
								<h5>{product.item.nombre}</h5>
							</div>
							<div className="col-lg-2 text-center">
								<h5>Precio: ${product.item.precio}</h5>
							</div>
							<div className="col-lg-2 text-center">
								<h5>Cantidad: {product.cantidad}</h5>
							</div>
							<div className="col-lg-2 text-center">
								<h5>Subtotal: ${product.item.precio * product.cantidad}</h5>
							</div>
							<div className="col-lg-2 mb-4">
								<button
									onClick={() =>
										removeItem(
											product.item.id,
											precioTotal,
											product.cantidad
											
										)
									}
									className="btn btn-danger bg-danger"
								>
									X
								</button>
							</div>
							
						</div>
					))}
					
				</DivRounded>
				<DivRounded className="col-lg-3 shadow-lg ms-auto pt-4">
					{cart.length > 0 && (
						<>
							<h3>Total a pagar: {accounting.formatMoney(precioTotal)}</h3>
							<Link to="/checkout" className="btn btn-success d-block w-100 mt-4">Ir a finalizar Compra</Link>
							<button className="btn btn-primary btn-sm mt-3 mb-3" onClick={clearCart}>
								Vaciar carrito
							</button>
						</>
					)}
				</DivRounded>
			</div>
		</DIV>
		</>
	);
};

export default Carrito;
