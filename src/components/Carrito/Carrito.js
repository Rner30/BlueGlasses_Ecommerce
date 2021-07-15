import React from "react";
import { useCartContext } from "../../context/context";
import {Link} from 'react-router-dom';
import {DivImg,DIV} from './CarritoCss'


const Carrito = () => {
	const { cart, precioTotal, removeItem, clearCart } = useCartContext();

	return (
		<>
		<DivImg>
			<h2 className="text-center">Carrito</h2>
		</DivImg>
		<DIV className="container">
			<div className="row">
				<div className="col-lg-9">
					{precioTotal === 0 ? (
						<h2 className="text-center">Agrega productos al carrito!</h2>
					) : null}

					{cart.map((product, i) => (
						<div className="row" key={i}>
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
							<hr />
						</div>
					))}
					
				</div>
				<div className="col-lg-3">
					{cart.length > 0 && (
						<>
							<h3>Total a pagar: ${precioTotal}</h3>
							<Link to="/checkout" className="btn btn-success d-block w-100 mt-4">Ir a finalizar Compra</Link>
							<button className="btn btn-primary mt-5 " onClick={clearCart}>
								Vaciar carrito
							</button>
						</>
					)}
				</div>
			</div>
		</DIV>
		</>
	);
};

export default Carrito;
