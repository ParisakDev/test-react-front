import React from 'react'

const ButtonFilterMobile = ({click}) => {
    return (
        <button onClick={()=>click()} className="c-w c-p fs-2 d-n d-md-b btn">Filtres</button>
    )
}

export default ButtonFilterMobile