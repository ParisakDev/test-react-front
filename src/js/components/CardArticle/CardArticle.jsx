import React from 'react';
import {Link} from 'react-router-dom';
import ButtonCart from '../Button/ButtonCart';

const CardArticle = ({book}) => {
    return (
        <li className="card-article">
            <div className="card-article-content d-f fd-c pt-2 pb-2 pl-2 pr-2">
                <Link to={'/article/'+book.isbn}>
                    <picture className="d-f ai-c jc-c">
                            <source srcSet={book.cover}
                            media="(min-width: 800px)"></source>
                            <img alt={book.title} className="img" src={book.cover}></img>
                    </picture>
                </Link>
                <h3 className="ff-futura c-b fs-2" >{book.title}</h3>
                
                <div className="card-cart-content d-f fd-r ai-fs jc-sb mt-a ">
                    <ButtonCart isbn={book.isbn}/>
                    <p className="ff-bebas c-1 fs-5 ">{book.price} €</p>
                </div>
            </div>
        </li>
    )
}

export default CardArticle