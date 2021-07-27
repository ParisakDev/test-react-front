import React,{useContext} from 'react'
import DataContext from '../../context/DataContext';
import { toogleBookOnCart } from '../../utils/utils';

const ButtonCart = ({addClass,isbn,isLabel=true,testunit=null}) => {
    const {cart,setCart} = useContext(DataContext);
    const handleAdd = () =>{
        setCart(toogleBookOnCart(cart,isbn));
        testunit && testunit("resolved");
    }
    const isOnCart = ()=>{
        return cart ? cart.includes(isbn) ? true : false : false;
         
    }
    return (
        <button data-testid="test-button-cart" onClick={handleAdd} className={isOnCart() ? "btn btn-cart is-active ff-bebas c-w "+addClass : "btn btn-cart ff-bebas c-w "+addClass }>
            {isLabel && <>{isOnCart() ? "Retirer du panier " : "Ajouter au panier"}</> }
        </button>
    )
}

export default ButtonCart