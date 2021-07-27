import React from 'react';
import BannerRon from "../../../assets/img/02coverRon.jpeg";

const Banner = () => {
    return (
        <div className="banner-ron p-r">
            <div className="cover">
                    <picture className="d-f ai-c jc-c">
                            <source srcSet={BannerRon}
                            media="(min-width: 800px)"></source>
                            <img alt={'Bannière Ron'} className="img" src={BannerRon}></img>
                    </picture>
            </div>
            <div className="side-text d-f fd-c ai-c jc-c c-w ta-c ff-bebas">
                            <p className="fs-8">Profiter des offres</p>
                            <p className="fs-12">Speciales</p>
                            <p className="fs-7">Ron Weasley</p>
            </div>
        </div>
    )
}

export default Banner