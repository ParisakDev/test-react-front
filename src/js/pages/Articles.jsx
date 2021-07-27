import React,{useState,useContext,useEffect} from 'react'
import FieldSearch from '../components/Fields/FieldSearch';
import FieeldMaxPrice from '../components/Fields/FieldMaxPrice';
import FieldOrder from '../components/Fields/FieldOrder';
import DataContext from '../context/DataContext';
import CardArticle from '../components/CardArticle/CardArticle';
import { isMany,isMatch,isPriceMax, trimOrder } from '../utils/utils';
import ButtonFilterMobile from '../components/Button/ButtonFilterMobile';

const Articles = ({testunit=null}) => {
    const {books,setToggleMenu} = useContext(DataContext);
    const [datas,setDatas] = useState();
    const [fitersMobile,setFiltersMobile]=useState(false);
    const [searchString,setSearchString] = useState("");
    const [searchPrice,setSearchPrice] = useState({values:[50]});
    const [searchByOrder,setSearchByOrder] = useState(0);   
    
    /** Filter Submit */
    const handleSubmit = (e)=>{
        e.preventDefault();
        const currentSearchString = searchString;
        const currentSearchPrice = searchPrice.values[0]; 
        const currentByOrder = searchByOrder;

        const searchStringFormated =  isMatch(books,currentSearchString,true);
        const searchPriceFormated =  isPriceMax(searchStringFormated,currentSearchPrice)
        const result = trimOrder(searchPriceFormated,currentByOrder,'price');
        setDatas(result);
        /** testunit */
        testunit && testunit('resolved');
    }

    useEffect(()=>{
        setToggleMenu(false);
        setDatas(books);
    },[books,setToggleMenu])


    return (
        <div className="articles">
            <div className="wrapper">
                <div className="pt-4 pb-4">
                    <h1 className="ff-futura tt-u mb-0 c-w ta-c">La boutique</h1>
                    <h3 className="ff-harry mb-0 mt-0 c-w fs-4 ta-c">Henri Potier</h3>
                </div>
                
                {/** Filters */}
                <div className={fitersMobile ? "filters is-active" :"filters"}>
                    <form className="filter-search pl-3 pr-3" onSubmit={handleSubmit}>
                        <p className="ff-futura tt-u">Filtrer par :</p>
                        <div className="fields d-f fd-r ai-c">
                            <FieldSearch searchString={searchString} setSearchString={setSearchString} label="Rechercher" id={'search_filter'} addClass={'label-search'}  placeholder={"Rechercher..."} />
                            <FieeldMaxPrice value={searchPrice} setValue={setSearchPrice} />
                            <FieldOrder searchByOrder={searchByOrder} setSearchByOrder={setSearchByOrder}/>
                        </div>
                        <input data-testid="test-submit-filter"  type="submit" value="Rechercher" className="btn btn-submit ff-bebas"></input>
                    </form>
                </div>

                 {/** Data Result */}
                {datas && datas.length > 0 ? ( 
                <section className="section">
                        <p className="pt-3 pb-3 ff-bebas c-w fs-4 d-f fd-r jc-sb">
                            {datas.length} livre{isMany(datas)} disponible{isMany(datas)}
                            <ButtonFilterMobile click={()=>setFiltersMobile(!fitersMobile)}/>
                        </p>  
                        <ul className="content">
                            {datas.map(book=>(
                                <CardArticle key={book.isbn} book={book} />
                            ))}
                        </ul>
                </section>):
                <section className="mt-4">
                    {/** Empty Filter Data */}
                    <p className="ta-c c-w fs-4 ff-futura tt-u">0 livre trouvé</p>
                    <p className="ta-c c-w fs-3 ff-futura">Veuillez réessayer</p>
                </section>}
            </div>
        </div>
    )
}

export default Articles