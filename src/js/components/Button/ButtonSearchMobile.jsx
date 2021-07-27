import React,{useContext} from 'react'
import DataContext from '../../context/DataContext';

const ButtonSearchMobile = () => {
    const {setToggleSearchMobile} = useContext(DataContext);
    return (
        <button onClick={()=>setToggleSearchMobile(true)} className="btn btn-search d-n d-md-b"></button>
    )
}

export default ButtonSearchMobile