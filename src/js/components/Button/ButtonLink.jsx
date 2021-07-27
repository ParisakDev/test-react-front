import React from 'react';
import {Link} from "react-router-dom";

const ButtonLink = ({path,label,addClass=""}) => {
    return (
        <Link className={"btn ff-futura btn-link "+addClass} to={path}>{label}</Link>
    )
}

export default ButtonLink