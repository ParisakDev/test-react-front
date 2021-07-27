import React,{useRef} from 'react';
import LinkImg from '../Link/LinkImg';
import { toogleBookOnCart } from '../../utils/utils';
import ButtonRemoveBook from '../Button/ButtonRemoveBook';

const CardCart = ({book,cart,setCart}) => {
    const targetRef = useRef(null);
    const handleDelete = ()=>{
        /** FX style REmove */
        targetRef && targetRef.current.classList.add('is-fx');
        setTimeout(() => {
            setCart(toogleBookOnCart(cart,book.isbn));
        }, 200);
    }
    return (
        <li ref={targetRef} className="item d-f fd-r ai-fs">
            <LinkImg alt={book.title}cover={book.cover}link={`/article/${book.isbn}`} />
            <h3 className="ff-futura">{book.title}</h3>
            <div className="d-f fd-c jc-sb">
                <ButtonRemoveBook handleDelete={handleDelete} />
                <p className="c-b ff-bebas fs-3 w-s-nw">{book.price} € </p>
            </div>
        </li>
    )
}

export default CardCart