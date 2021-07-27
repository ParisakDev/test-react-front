import React, { useContext } from 'react'
import { toogleBookOnCart } from '../../utils/utils';
import DataContext from '../../context/DataContext';
import ButtonRemoveBook from '../Button/ButtonRemoveBook';

const ResumeCart = ({book}) => {
    const {setCart,cart} = useContext(DataContext)
    const handleDelete = ()=>{
        setCart(toogleBookOnCart(cart,book.isbn));
    }

    return (
        <li  className="li d-f jc-sb c-b ff-futura ">
            <p>{book.title}</p> 
            <div className="d-f fd-r ai-fs">
                <span className="fs-3 ff-bebas mr-2">{book.price}€</span>
                <ButtonRemoveBook handleDelete={handleDelete}/>
            </div>
        </li>
    )
}

export default ResumeCart