import React from 'react';



export default React.createContext({
    books: false,
    setBooks: value => {},
    cart: false,
    setCart: value => {},
    toggleMenu:false,
    setToggleMenu:value =>{},
    toggleSearchMobile:false,
    setToggleSearchMobile:value=>{}
}) 