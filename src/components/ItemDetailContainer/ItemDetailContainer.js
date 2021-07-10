import React,{useEffect, useState} from 'react'
import ItemDetails from '../ItemDetails/ItemDetails'

import { useParams } from 'react-router'
import { getFirestore } from '../../firebase';

const ItemDetailContainer = () => {
    

    const {id} = useParams()
    
    const [item, setItem] = useState()
    
    useEffect(()=>{

        const db = getFirestore()
        const itemsColecction = db.collection("items")
        
        itemsColecction.doc(id).get()
            
            .then(doc => {

                if(doc.exists) {
                    setItem(doc.data());
                }
            })

            .catch((err) => {
                console.log(err)
            })
    },[])
    
    return (    
        <>
            <div>
                {item ? <ItemDetails item={item} />: null}
            </div> 
        </>
    )
}

export default ItemDetailContainer
