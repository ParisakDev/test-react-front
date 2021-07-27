/**
 * 
 * @param {string} str
 * Replace Special Chars FOr Search  
 */
const replaceSpecialChars = (str) => {
	return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
		.replace(/([^\w]+|\s+)/g, '-') // Replace space and other characters by hyphen
		.replace(/\-\-+/g, '-')	// Replaces multiple hyphens by one hyphen
        .replace(/(^-+|-+$)/, '') // Remove extra hyphens from beginning or end of the string
        .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
}
/**
 * 
 * @param {float} price 
 * Format Price
 */
const priceFormat = (price)=>{
    return parseFloat(price.toFixed(2));
}

/**
 * 
 * @param {array} data 
 * @param {string} string 
 * @param {boolean} revert 
 * Search books 
 */
const isMatch = (data,string,revert=null)=>{
    return string.trim() ? data.filter(el=>replaceSpecialChars(el.title).toLowerCase().includes(replaceSpecialChars(string).toLowerCase())).map(el=>el) : revert ? data: [];
}

/**
 * 
 * @param {array} data 
 * Filter Plural Word
 */
const isMany = (data)=>{
    return data.length > 1 ? 's' : '';
}

/**
 * 
 * @param {array} data 
 * @param {any} currentPrice 
 * Filter Price Max
 */
const isPriceMax = (data,currentPrice)=>{
    return data.length > 0 ?  data.filter(el=>parseFloat(el.price) <= parseFloat(currentPrice) ).map(el=>el) : []
}

/**
 * 
 * @param {array} data 
 * @param {int} currentOrder 
 * @param {string} property 
 * Filter Trim by Property ASC DESC or NULL
 */
const trimOrder = (data,currentOrder,property)=>{
    if(data &&  data.length > 0){
        if(currentOrder === 1) return data.sort((a,b)=>parseFloat(a[property]) - parseFloat(b[property]));
        else if(currentOrder === 2)  return data.sort((a,b)=>parseFloat(b[property]) - parseFloat(a[property]));
        else return data;
    }
    return [];
}

/**
 * 
 * @param {array} datas 
 * @param {int} id 
 * Get Books by property isbn
 */
const getByIsBn = (datas,id)=>{
    return datas && id ? datas.filter(el=>el.isbn === id).map(el=>el) : [];
}

/**
 * Check LocalStorage & return array parse
 */
const checkCart = ()=>{
    let result = [];
    if (typeof localStorage !== 'undefined') {
        if('cart' in localStorage){
            const localStorageCart = JSON.parse(localStorage.getItem('cart'));
            return formatCart(localStorageCart);
        }
    }
    return result;
}

/**
 * 
 * @param {array} currentCart 
 * Check value on array cart to be string
 */
const formatCart = (currentCart)=>{
    return Array.isArray(currentCart) ? currentCart.filter(el=>typeof el === 'string').map(el=>el) : []
}

/**
 * 
 * @param {array} currentCart 
 * @param {string} book_id 
 * Add or Remove Book in cart
 */
const toogleBookOnCart = (currentCart,book_id)=>{
    /** check on currenCart format */
    const newFormatCart = formatCart(currentCart);
    /** Return to state */
    const resultToggle = newFormatCart.includes(book_id);
    resultToggle ? newFormatCart.splice(newFormatCart.indexOf(book_id),1) : newFormatCart.push(book_id);
    localStorage.setItem('cart',JSON.stringify(newFormatCart));
    return newFormatCart;
}

/**
 * 
 * @param {array} currentCart 
 * @param {array} stateCart 
 * Return Count || Data of cart || Sum
 */
const cartDetail = (currentCart,stateCart)=>{
    
    const isStringOnArray = formatCart(currentCart);
    
    const result = stateCart.length > 0 ? isStringOnArray.map(elementCurrent => {
        return  stateCart.filter(stateElement => 
             elementCurrent === stateElement.isbn && stateElement
        ).map(el=>el)[0];
    }) : [];

    const sum = result && result.length > 0 ? result.map(el=>el.price).reduce((a,b)=>a+b,0) : 0;
   
    return {
        count:result.length ,
        datas:result,
        sum
    };
}

/**
 * 
 * @param {object} offert 
 * @param {float} total 
 * Calcul Offerts promotions
 */
const switchBestOffer = (offert,total)=>{
    if(offert.hasOwnProperty('type'))
        switch (offert.type) {
            case "percentage":
                return {
                ...offert,
                reduce: priceFormat(offert.value/100 * total),
                total : priceFormat(total - offert.value/100 * total)
                };
            case "minus":
                return {
                    ...offert,
                    reduce:  offert.value,
                    total : priceFormat((total - offert.value))
                }
            case "slice":
            return{
                ...offert,
                reduce: priceFormat(Math.round(total / offert.sliceValue) * offert.value),
                total : priceFormat((total - (Math.round(total / offert.sliceValue) * offert.value)))
            }
            default:
                return {
                    reduce:0,
                    total
                }
        }
    else return {
        reduce:0,
        total
    }
}

/**
 * 
 * @param {object} offers 
 * @param {float} total 
 * Get Total amount Cart & promotion
 */
const getBestOffers = (offers,total)=>{
    if(total && offers){
        return offers.offers.map(el=>switchBestOffer(el,total)).reduce((prev,curr)=>prev.total < curr.total ? prev : curr);
    }
    return {
        reduce:0,
        total
    }
} 

export {isMatch,isMany,isPriceMax,trimOrder,getByIsBn,checkCart,toogleBookOnCart,cartDetail,getBestOffers}