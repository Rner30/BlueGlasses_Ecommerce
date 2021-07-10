import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getFirestore } from "../../firebase";

export default function ItemListContainer() {
	const [products, setproducts] = useState([]);
	const db = getFirestore();

	useEffect(() => {
		const GetItems = async () => {
			try {
				let arr = [];
				const pregunta = await db.collection("items").get();
					pregunta.forEach((doc) => {
						arr.push({ id: doc.id, data: doc.data() });
					});
				setproducts(arr);
			} catch (error) {
				console.log(error);
			}
		};
		
		GetItems();
	}, [db]);

	return (
		<div>
			<ItemList products={products} />
		</div>
	);
}
