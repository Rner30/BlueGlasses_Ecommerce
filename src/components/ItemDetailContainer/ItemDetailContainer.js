import React, { useEffect, useState } from "react";
import ItemDetails from "../ItemDetails/ItemDetails";

import { useParams } from "react-router";
import { getFirestore } from "../../firebase";

const ItemDetailContainer = () => {
	const { id } = useParams();

	const [item, setItem] = useState();

	useEffect(() => {
		const db = getFirestore();
		const itemsColecction = db.collection("items");

		const itemsProductos = async () => {
			try {
				const obtenerItems = await itemsColecction.doc(id).get();
				const respuesta = obtenerItems.data();
				setItem(respuesta);
			} catch (error) {
				console.log(error);
			}
		};
        
		itemsProductos();
	}, [id]);

	return (
		<>
			<div>{item ? <ItemDetails item={item} /> : null}</div>
		</>
	);
};

export default ItemDetailContainer;
