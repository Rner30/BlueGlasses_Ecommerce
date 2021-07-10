import React from "react";
import styled from "styled-components";
import ItemCount from "../ItemCount/ItemCount";
import {useCartContext} from '../../context/context';
import Spinner from "../Spinner/Spinner";
const DIV = styled.div`
	margin-top: 18%;
`;
const ItemDetail = ({ item }) => {
	
	const {addToCart} = useCartContext();
    

    const handleAddProduct = (e, qty) => {
        e.stopPropagation();

        addToCart({
            cantidad: qty,
            item,
        }, qty)

        
    }
	return (
		<div className="container ">
			{item ? null : <Spinner/> }
			<div className="row">
				<DIV className="col-lg-6">
					<img src={item.picture} alt={item.titulo} className="img-fluid" />
				</DIV>
				<div className="col-lg-6 fs-5">
					<h2>{item.nombre}</h2>
					<p>{item.descripcion}</p>

					<p>
						¿Sentís los ojos cansados por la computadora, el celular u otros
						dispositivos?
					</p>
					<p>
						¿Sabías que la <strong>LUZ UV y la AZUL-VIOLETA</strong> están en
						todas partes?
					</p>
					<h2>Necesitas una buena protección.</h2>
					<p>
						La combinación entre el Acetato Mazzuchelli1849 y las Lentes ESSILOR
						CRIZAL PREVENCIA o BLUE LightCut te garantizan un producto de
						calidad, fabricado con los materiales más reconocidos en la
						Industria del Anteojo.
					</p>
                    
                        <ul className="list-unstyled"> 
                            <li>✅Protección contra LUZ AZUL-VIOLETA</li>
                            <li>✅Reduce el Stress Visual</li>
                            <li>✅Ayuda a descansar mejor</li>
                            <li>✅Protección UV</li>
                            <li>✅Reducción de reflejos</li>
                            <li>✅Mayor resistencia a rayas</li>
                        </ul>
                    
					<p>Precio: ${item.precio}</p>
					<ItemCount stock={item.stock} initial={1} onAdd={handleAddProduct}/>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
