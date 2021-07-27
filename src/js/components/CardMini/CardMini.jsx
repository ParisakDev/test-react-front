import React from 'react';
import {Link} from 'react-router-dom';
import ButtonCart from '../Button/ButtonCart';

const CardMini = ({book}) => {
    return (
        <div className="card-mini">
                <Link className="link" to={`/article/${book.isbn}`}>
                    <picture>
                        <source srcSet={book.cover}
                        media="(min-width: 800px)"></source>
                        <img alt={book.title} className="img" src={book.cover}></img>
                    </picture>
                </Link>
                <div className="content d-f fd-c jc-sb pl-1">
                    <p className="ff-futura c-w">{book.title}</p>
                    <div className="d-f fd-r jc-sb w-100 mt-2">
                        <span className="c-w ff-bebas fs-3">{book.price} €</span>
                        <ButtonCart isbn={book.isbn} isLabel={false}/>
                       
                    </div>
                </div>
        </div>
    )
}

export default CardMini