import React, { useState } from "react";
import { getFirestore } from "../../firebase";
import firebase from "firebase/app";
import "firebase/firebase";
import { useCartContext } from "../../context/context";
import styled from "styled-components";
import ProductosCheckout from "./ProductosCheckout";
import Formcheckout from "./Formcheckout";
import { FcGoogle } from "react-icons/fc";

const DivCheckout = styled.div`
	font-family: "Source Sans Pro", sans-serif;
`;
const DivOrden = styled.div`
	margin-top: 15%;
`;

const Checkout = () => {
	const { precioTotal, userName } = useCartContext();
	const [nombre, setNombre] = useState("");
	const [telefono, setTelefono] = useState("");
	const [email, setEmail] = useState("");
	const { cart, clearCart } = useCartContext();
	const [orderId, setOrderId] = useState();

	const manejarCompra = (e) => {
		e.preventDefault();
		const datosCompra = {
			comprador: {
				name: nombre,
				phone: telefono,
				email: email,
			},
			date: firebase.firestore.FieldValue.serverTimestamp(),
			items: cart,
			total: precioTotal,
		};

		const db = getFirestore();
		const OrderCollection = db.collection("orders");
		OrderCollection.add(datosCompra)
			.then(({ id }) => {
				clearCart();
				setOrderId(id);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(console.log(datosCompra));
	};

	return (
		<DivCheckout className="container">
			<div className="row">
				{userName ? (
					orderId ? (
						<>
							<DivOrden className="text-center">
								<h3 className="fs-1">✅Compra realizada con exito!✅</h3>
								<p className="fs-4">
									Tu numero de orden es: <strong>{orderId}</strong>{" "}
								</p>
							</DivOrden>
						</>
					) : (
						<>
							<Formcheckout
								manejarCompra={manejarCompra}
								setNombre={setNombre}
								setTelefono={setTelefono}
								setEmail={setEmail}
								nombre={nombre}
								telefono={telefono}
								email={email}
							/>
							<div className="col-lg-3 mt-5">
								<h3>Tu carrito:</h3>
								<ProductosCheckout cart={cart} />
								<h5>Envío Gratis</h5>
								{precioTotal ? (
									<h4>El precio total es: ${precioTotal}</h4>
								) : null}
							</div>
						</>
					)
				) : (
					<DivOrden className="text-center">
						<h2 className="">
							Inicia sesión con <FcGoogle /> para terminar la compra!
						</h2>
					</DivOrden>
				)}
			</div>
		</DivCheckout>
	);
};

export default Checkout;
