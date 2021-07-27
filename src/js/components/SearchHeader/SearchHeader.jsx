import React,{useContext,useState,useEffect,useRef} from 'react';
import DataContext from '../../context/DataContext';
import { isMatch } from '../../utils/utils';
import CardMini from '../CardMini/CardMini';
import FieldSearch from '../Fields/FieldSearch';

const SearchHeader = () => {
    const {books,toggleSearchMobile,setToggleSearchMobile} = useContext(DataContext);
    const focusOn = useRef(null);
    const [currentSearch,setCurrentSearch] = useState([]);
    const [openFormContent,setOpenFormContent] = useState(false);
    const [searchString,setSearchString] = useState("");
    const toggleForm = (isOpen)=>{
        setOpenFormContent(isOpen);
        isOpen && focusOn && focusOn.current.focus();
        !isOpen && setCurrentSearch([]);
    }
    const handleChange = (targetvalue)=>{
        setCurrentSearch(isMatch(books,targetvalue));
    }
    useEffect(()=>{
        toggleForm(false);
    },[]);

    return (
        <>
        <div className={toggleSearchMobile ? "search-header is-active" :"search-header"}>
            {/** ONLY MOBILE close Modal*/}
            <button onClick={()=>setToggleSearchMobile(false)} className="btn btn-close d-n d-md-b btn-close-side"></button>

            {/** Search Module */}
            <div className={openFormContent ? "search-header-content is-active" : "search-header-content"}>
                <button 
                onClick={()=>toggleForm(true)}
                className="btn btn-search"> 
                </button>
                <form className="search-header-form">
                    <FieldSearch 
                        searchString={searchString} 
                        setSearchString={setSearchString} 
                        focusOn={focusOn} 
                        id={'search_header'} 
                        handleChange={handleChange} 
                        removeSearch={()=>toggleForm(false)} 
                        placeholder={"Rechercher..."} />
                </form>

                {/** Search RESULT */}
                {currentSearch.length > 0 && (
                    <ul className="search-cards">
                        {currentSearch.map(elmt=>(
                            <li key={elmt.isbn} className="search-cards-item">
                                <CardMini book={elmt} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
       
        </>
    )
}

export default SearchHeader