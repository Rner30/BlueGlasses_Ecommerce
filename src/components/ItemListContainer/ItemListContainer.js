import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getFirestore } from "../../firebase";
import { Link } from "react-router-dom";

export default function ItemListContainer({category = null}) {
	const [products, setproducts] = useState([]);
	const db = getFirestore();

	useEffect(() => {
		const GetItems = async () => {
			if (!category) {
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
			}else{
				try {
					console.log(category);
					let arr = [];
					const pregunta = await db.collection("items").where('category', '==',category)
					.get();
					pregunta.forEach((doc) => {
						arr.push({ id: doc.id, data: doc.data() });
					});
					setproducts(arr);
				} catch (error) {
					console.log(error);
				}
			}
			
		};
		GetItems();
	}, [db]);

	return (
		<div>
			<div className="container mt-4 d-flex justify-content-center">
			<Link to="/negros" className="btn btn-dark ms-2">
				Negros
			</Link>
			<Link to="/transparentes" className="btn btn-dark ms-3">
				Transparentes
			</Link>
			<Link to="/otros" className="btn btn-dark ms-3">
				Otros
			</Link>
			</div>
			
			<ItemList products={products} />
		</div>
	);
}
