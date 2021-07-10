import React from "react";
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";
const ItemList = ({ products }) => {
	return (
		<div className="container">
			
			<div className="row">
				{products.length === 0 ? (
					<Spinner/>
				) : (
					products.map((producto) => (
						<Item key={producto.id} {...producto.data} />
					))
				)}
			</div>
		</div>
	);
};

export default ItemList;
