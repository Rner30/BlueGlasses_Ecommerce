import { useState, Fragment } from "react";
import styled from "styled-components";
import { IoCartSharp } from "react-icons/io5";

export default function ItemCount({ stock, initial, onAdd }) {
	const [contador, setContador] = useState(initial);

	const agregar = () => {
		if (contador >= initial && contador < stock) {
			setContador(contador + 1);
		}
	};
	const quitar = () => {
		if (contador > initial) {
			setContador(contador - 1);
		}
	};

	return (
		<Fragment>
			<div className="mb-3">
				<button type="button" className="btn btn-danger " onClick={quitar}>
					-
				</button>
				<Cantidad>{contador}</Cantidad>

				<button type="button" className="btn btn-success" onClick={agregar}>
					+
				</button>
			</div>
			<button
				type="button"
				className="btn btn-dark"
				onClick={(e) => onAdd(e, contador)}
			>
				<IoCartSharp /> Agregar al carrito
			</button>
		</Fragment>
	);
}


const Cantidad = styled.span`
	padding: 1rem;
`;
