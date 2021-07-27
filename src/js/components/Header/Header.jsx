import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import Logo from '../Logo/Logo';
import { JsonHeader } from '../../json/JsonHeader';
import SearchHeader from '../SearchHeader/SearchHeader';
import DataContext from '../../context/DataContext';
import { cartDetail } from '../../utils/utils';
import ButtonMenu from '../Button/ButtonMenu';
import ButtonSearchMobile from '../Button/ButtonSearchMobile';


const Header = () => {
    const {cart,books,toggleMenu} = useContext(DataContext);
    
    return (
       <header className="header">
           <div className="wrapper">
                <ButtonMenu />
                <Link className="td-n c-w" to="/">
                        <Logo/>
                </Link>
               <ButtonSearchMobile/>
                <nav className={toggleMenu ? "nav d-f is-active" : "nav d-f"  }>
                    {JsonHeader && (
                        JsonHeader.map((el,index)=>(
                            <Link 
                            className={"nav-link td-n ff-bebas "+el.addClass} 
                            key={index} 
                            to={el.path}>
                                {el.label}
                                {el.path === '/panier' && cart && books && 
                                    <span className="tooltips">{cartDetail(cart,books)['count']}</span>
                                }
                            </Link>
                        ))
                    )}
                </nav>
                <SearchHeader/>
           </div>
       </header>
    )
}

export default Header