import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getFirestore } from '../../firebase';

export default function ItemListContainer() {
    
	const [products, setproducts] = useState([])
	const db = getFirestore()
    
	useEffect(()=>{
        
		db.collection("items")            
                .get()
                .then(docs => {
                    let arr = [];
                    docs.forEach(doc => {
						arr.push({id:doc.id,data:doc.data()});
                    })
                    setproducts(arr);
                })
                .catch((err) => {
                    console.log(err)
                })
        
	},[])

    
    return (
        <div> 
            
            <ItemList products={products}/> 
            
        </div>
    )
}
