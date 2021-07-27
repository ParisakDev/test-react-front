import React from 'react'
import ButtonLink from '../components/Button/ButtonLink';

const NotFoundPage = () => {

    return (
        <div> 
            <h1 className="c-w mt-3 ff-futura ta-c">Erreur 404</h1>
            <ButtonLink path="/" label="Retourner au site"  addClass="mx-a d-b mt-3"/>
        </div>
    )
}

export default NotFoundPage