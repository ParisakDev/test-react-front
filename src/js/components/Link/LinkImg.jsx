import React from 'react';
import {Link} from "react-router-dom";

const LinkImg = ({alt,cover,link}) => {
    return (
        <Link className="link" to={link}>
            <picture>
                <source srcSet={cover}
                media="(min-width: 800px)"></source>
                <img alt={alt} className="img" src={cover}></img>
            </picture>
        </Link>
    )
}

export default LinkImg