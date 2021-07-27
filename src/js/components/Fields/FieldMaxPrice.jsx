import React from 'react'
import { Range ,getTrackBackground} from 'react-range';
import { JsonArticles } from '../../json/JsonArticles';



const FieeldMaxPrice = ({value,setValue}) => {
    
    const {STEP,MIN,MAX} = JsonArticles.priceMax;
    return (
        <div className="price-search">
            <p className="c-b ff-futura tt-u ta-c">Prix Max</p>
            <Range
                values={value.values}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={(values) => setValue({ values })}
                renderTrack={({ props, children }) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                    ...props.style,
                    height: "36px",
                    display: "flex",
                    width: "100%"
                    }}
                >
                    <div
                    ref={props.ref}
                    style={{
                        height: "5px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                        values: value.values,
                        colors: ["#548BF4", "#ccc"],
                        min: MIN,
                        max: MAX
                        }),
                        alignSelf: "center"
                    }}
                    >
                    {children}
                    </div>
                </div>
                )}
                renderThumb={({ props, isDragged }) => (
                <div
                    {...props}
                    style={{
                    ...props.style,
                    height: "22px",
                    width: "22px",
                    borderRadius: "4px",
                    backgroundColor: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px #AAA"
                    }}
                >
                    <div
                    style={{
                        height: "16px",
                        width: "5px",
                        backgroundColor: isDragged ? "#548BF4" : "#CCC"
                    }}
                    />
                    <span className="index-search-price">{parseInt(value.values[0])+' €'}</span>
                </div>
                )}
            />
      </div>
    )
}

export default FieeldMaxPrice