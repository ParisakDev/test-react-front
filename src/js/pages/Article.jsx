import React,{useContext,useEffect,useState} from 'react'
import DataContext from '../context/DataContext';
import { getByIsBn } from '../utils/utils';
import Banner from '../components/Banner/Banner';
import ButtonCart from '../components/Button/ButtonCart';

const Article = ({match,history}) => {
    const {books,setToggleSearchMobile} = useContext(DataContext);
    const [dataIsbn,setDataIsbn] = useState();
    const {isbn} = match.params;
    useEffect(()=>{
        if(isbn && books){
            const dataByIsbn = getByIsBn(books,isbn);
            if(dataByIsbn){
                setToggleSearchMobile(false);
                if(dataByIsbn.length > 0)return setDataIsbn(dataByIsbn[0]);
            }
        } 
        /** If Isbn not exist */
        history.push('/404');
    },[isbn,history,books,setToggleSearchMobile]);
    return (
        <div>
           <Banner/>
            <div className="wrapper">
                {dataIsbn ? (
                    <div className="article d-f">
                        <div className="information">
                            <div className="content">
                                    <h1 className="ff-futura fs-3 c-w mb-3">{dataIsbn.title}</h1>
                                    <p className="ff-bebas c-w mb-1 fs-3">Synopsis</p>
                                    {dataIsbn.synopsis.map((elmt,index)=>(
                                        <p key={index} className="c-w ff-futura">{elmt}</p>
                                    ))}
                            </div>
                        </div>
                        <div className="cover">
                            <div className="content d-f fd-c ai-c jc-c">
                                <div className="img-cover">
                                    <picture className="d-f ai-c jc-c">
                                            <source srcSet={dataIsbn.cover}
                                            media="(min-width: 800px)"></source>
                                            <img alt={dataIsbn.title} className="img" src={dataIsbn.cover}></img>
                                    </picture>
                                </div>
                                <div className="price d-f fd-r ai-fs jc-sb mt-3">
                                    <ButtonCart isbn={dataIsbn.isbn}/>
                                    <p className="ff-bebas c-w fs-6 ">{dataIsbn.price} €</p>
                                </div>
                            </div>
                        </div>
                </div>
                ) : <></>}
            </div>
        </div>
    )
}

export default Article