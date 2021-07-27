import React, { useEffect,useContext } from 'react';
import ButtonLink from '../components/Button/ButtonLink';
import DataContext from '../context/DataContext';


const HomePage = () => {
    const {setToggleMenu} = useContext(DataContext);
    useEffect(()=>{
        /** Close Menu Nav */
        setToggleMenu(false);
    },[setToggleMenu])
    return (
        <>
        <div className="homepage">
            <div className="wrapper">
                <p className="ff-bebas fs-4 ta-c c-w">La collection</p>
                <h1 className="ff-harry ta-c c-w fs-10">Henri Potier</h1>
                <p className="para ff-futura ta-c cg-2 fs-2 ">Il était une fois, une collection de cinq livres racontant les histoires d’un formidable héro nommé Henri Potier. Tous les enfants du monde trouvaient les histoires de cet adolescent fantastiques</p>
                <ButtonLink addClass={'mt-6  tt-u fs-2 mx-a'} path={'/articles'}  label={'Découvrez'}/>
            </div>
        </div>
        </>
    )
}

export default HomePage