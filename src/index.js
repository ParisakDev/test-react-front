import React ,{useEffect,useState}from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router ,Route,Switch} from 'react-router-dom';


import HomePage from './js/pages/HomePage';
import TemplatesStandard from './js/templates/TemplatesStandard';
import Header from './js/components/Header/Header';


import 'normalize.css';
import "./styles/app.scss";
import Articles from './js/pages/Articles';
import { get } from './js/api/api';
import NotFoundPage from './js/pages/NotFoundPage';
import PageErrorApi from './js/pages/PageErrorApi';
import DataContext from './js/context/DataContext';
import Article from './js/pages/Article';
import { checkCart } from './js/utils/utils';
import Cart from './js/pages/Cart';
import { JsonPath } from './js/json/JsonPath';
import LoaderUi from './js/components/LoaderUi/LoaderUi';

const App = ()=>{
  /**
   *  null = load , true = success , false = error api 
   */
  const [isDataSuccess,setIsDataSuccess] = useState(null);
  const [books,setBooks] = useState(null);
  const [cart,setCart] = useState(null);
  const [toggleMenu,setToggleMenu] = useState(false);
  const [toggleSearchMobile,setToggleSearchMobile] = useState(false);
  const fetchBooks = async ()=>{
    try{
      /** Get Books */
      const data = await get(JsonPath.books);
      setBooks(data);
      /** Check Cart & formated */
      setCart(checkCart());
      setIsDataSuccess(true);
    }catch{
      setIsDataSuccess(false);
    }
  }

  const contextValue = {
    books,setBooks,
    cart,setCart,
    toggleMenu,setToggleMenu,
    toggleSearchMobile,setToggleSearchMobile
  }
  useEffect(()=>{
    fetchBooks();
  },[]);

  return (
    <DataContext.Provider value={contextValue}>
      <Router>
        <Header></Header>
        <TemplatesStandard/>
         {/** ROUTE STANDARD */}
        {isDataSuccess && books && cart &&
        <>
            <div data-testid="resolved"></div>
          <Switch>
            <Route component={HomePage} path={'/'} exact></Route>
            <Route component={Article} path={'/article/:isbn'} exact></Route>
            <Route component={Articles} path={'/articles'} exact></Route>
            <Route component={Cart} path={'/panier'} exact></Route>
            <Route component={PageErrorApi} path={'/error'} exact></Route>
            <Route path="*" exact><NotFoundPage/></Route>
          </Switch>
          </>
        }
        {/** ROUTE ERROR API */}
        {isDataSuccess === false && (
          <PageErrorApi/>
        )}
        {/** LOADER */}
        {isDataSuccess === null && !books && !cart && 
          <div className="loader">
            <LoaderUi/>
          </div>
        }
      </Router> 
    </DataContext.Provider>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

