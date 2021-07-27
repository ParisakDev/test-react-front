import React from 'react';


const FieldSearch = ({id,searchString,setSearchString,handleChange=null,addClass='',removeSearch=null,label="",placeholder,focusOn=null}) => {
    
    return (
        <label className={searchString ? `label is-active ${addClass}` : `label ${addClass}`} htmlFor={id}>
            {label && <p>{label}</p>}
            <div className="p-r">
                <input 
                    ref={focusOn} 
                    className="input input-search" 
                    value={searchString} 
                    placeholder={placeholder}
                    data-testid="test"
                    onChange={({currentTarget})=>{
                        setSearchString(currentTarget.value)
                        handleChange && handleChange(currentTarget.value);
                    }}
                    id={id} 
                    type="text" ></input>
                <button 
                    className="close btn btn-close" 
                    onClick={(e)=>{
                        e.preventDefault();
                        setSearchString('');
                        removeSearch && removeSearch(false); 
                }}></button>
            </div>
        </label>
    )
}

export default FieldSearch