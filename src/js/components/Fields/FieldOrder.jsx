import React from 'react'
import { JsonArticles } from '../../json/JsonArticles';

const FieldOrder = ({searchByOrder,setSearchByOrder}) => {
    const handleChange = ({currentTarget})=>{
        const {value}=currentTarget;
        setSearchByOrder(parseInt(value));
    } 
    return (
        <div className="order-search ff-futura">
            <p className="ta-c tt-u c-b mb-2">Ordre </p>
            <div className="order-search-choice p-r">
                <p className="title c-b pr-4">Peu importe</p>
                <div className="order-choice">
                    {JsonArticles.order.map(el=>(
                        <label key={el.id} className="label">
                            <input className={"radio radio-input-"+el.id} type="radio" onChange={handleChange} value={el.id} name="order" checked={searchByOrder === el.id ? true : false} ></input>
                            <p>{el.label}</p>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FieldOrder