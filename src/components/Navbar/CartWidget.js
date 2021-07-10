import React from 'react'
import {Boton,DIVH3} from './NavbarAndWidgetCss'
import {useCartContext} from '../../context/context'
import {FaShoppingCart} from 'react-icons/fa'
const CartWidget = () => {
    const {totalQty} = useCartContext()

    return (
        <div className="d-flex"> 
            <Boton type="button">
                <FaShoppingCart size="1.7rem"/>
            </Boton>
            <DIVH3>
                <p>{totalQty ? totalQty : '0'}</p>
            </DIVH3>
            
        </div>
    )
}

export default CartWidget

