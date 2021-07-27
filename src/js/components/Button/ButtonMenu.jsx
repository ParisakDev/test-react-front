import React, { useContext } from 'react'
import DataContext from '../../context/DataContext';

const ButtonMenu = () => {
    const {setToggleMenu} = useContext(DataContext);
    return (
        <button onClick={()=>{setToggleMenu(true)}} className="btn btn-menu-burger-mobile d-n d-md-b">
            <span></span>
        </button>
    )
}

export default ButtonMenu