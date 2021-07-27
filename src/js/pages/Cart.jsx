import React,{useContext,useEffect,useState}from 'react'
import { JsonPath } from '../json/JsonPath';
import DataContext from '../context/DataContext';
import { get } from '../api/api';
import { cartDetail, getBestOffers } from '../utils/utils';
import ButtonLink from '../components/Button/ButtonLink';
import CardCart from '../components/CardCart/CardCart';
import TotalAmount from '../components/TotalAmount/TotalAmount';
import LoaderUi from '../components/LoaderUi/LoaderUi';
import ResumeCart from '../components/ResumeCart/ResumeCart';


const Cart = ({history}) => {
    const {cart,setCart,books,setToggleMenu} = useContext(DataContext);
    const [data,setData] = useState();

    useEffect(()=>{
        setToggleMenu(false)
        const startPage = async ()=>{
            /** Format Cart to have Sum data */
            const {sum,datas} = cartDetail(cart,books);
            try{
                /** Get Offers & get best total value */
                const offers =  cart.length > 0 ?  await get(JsonPath.promotions(cart.toString())).then(res=>res) : null;
                const offerResult =  getBestOffers(offers,sum);
               setData({
                    datas,
                    sum,
                    offerResult
                });
            }catch{
                history.push('/error');
            }
        }
        startPage();
    },[cart,books,history,setToggleMenu]);

    return (
        <div className="wrapper">
            <div className="cart pt-5 pb-5">
                <h1 className="c-w ff-futura fs-3 ta-c mb-5">Votre Panier</h1>
                {/** Loader */}
                {!data && <div className="loader"><LoaderUi></LoaderUi></div>}
                {/** Data loaded */}
                {data &&
                     <section className="panier mt-2 mx-a d-f">
                        <div className="contrib">
                            {/** Data not empty */}
                            {data.datas.length > 0 ? (<>
                                <p className="c-b ff-bebas fs-3">Récapitulatif de votre panier</p>
                                <div className="pt-2 pb-2">
                                    <ul className="list">
                                        {data.datas.map(book=>(
                                            <CardCart key={book.isbn} book={book} cart={cart} setCart={setCart} key={book.isbn} />
                                        ))}
                                    </ul>
                                </div>
                            </>):
                                <>
                                {/** Data Empty */}
                                    <p className="c-b ff-bebas fs-3">Votre panier est vide</p>
                                    <div className="w-100">
                                        <ButtonLink path={'/articles'} label={'Retourner à la boutique'} addClass="mx-a d-b mt-3 mb-3"/>
                                    </div>
                                </>
                            }
                            
                        </div>
                
                        <div className="content d-f">
                            <p className="c-b ff-bebas fs-3">Récapitulatif de votre panier</p>
                            <ul className="list d-f ls-n mt-3">
                                {data.datas.map(book=>(
                                    <ResumeCart book={book} key={book.isbn} />
                                ))}
                            </ul>
                            <TotalAmount data={data} />
                            {data.datas.length > 0 && (
                                <ButtonLink path={'/'} label={`Payer`} addClass={"mx-a tt-u"}/>
                            )}
                        </div>
                    </section>
                }     
            </div>
        </div>
    )
}

export default Cart