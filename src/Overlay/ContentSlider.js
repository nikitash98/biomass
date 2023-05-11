import ReactSlider from "react-slider";
import React, { useState } from 'react';
import "./ContentSlider.css"
import slides from "../slides.json"
const ContentSlider = (props) => {
    const [currentValue, setCurrentValue] = useState(0);
    const [curSliderHover, setSliderHover] = useState(null)
    const TICKS = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
      };
    const handleSliderClick = (value) => {
        props.setCounter(convertSlider(value, show, mul))

    }
    var keys = Object.keys(slides);
    let less_keys = keys.slice(0,-1)
    let show = [0, 2, 6, 10, 12, 17]

    let diffs = []
    let mul = 1
    for(let i = 0; i < show.length-1; i++) {
        let dif  = show[i+1] - show[i] 
        diffs.push(dif)
        mul *= dif
    }
    diffs.push(Object.keys(slides).length - show[show.length - 1])
    let val = props.counter
    let mult = 0
    
    const convertCounter = (value, show, mul) => {
        let i = 0
        while(value > show[i]) {
            i++
        }
        if(i == 0) {
            return 0
        }


        let total = ((value - show[i-1])/diffs[i-1]) * mul + (i-1) * mul
        //let total = (i-1) * mul
        return total
    }
    const convertSlider = (value, show, mul) => {
        let set = Math.round(value/mul)
        return show[set]
    }

    const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]

    
    return (
        <div>
            <div className="">
                <div className="slider__container">
                    <div className="slider__labels">
                    {show.map((l, i) => {
                        if(curSliderHover == mul * i) {
                            return (
                                <div className="slider__labels-label lab" key={i} onClick={() => {handleSliderClick(i * mul)}}>
                                    {slides[show[i]]["title"]}
                                </div>
                                );           
                        } else {
                            return (
                                <div key = {i} className="slider__labels-label lab">
                                    
                                </div>
                                );         
                        }

                       
                    })}
                    </div>
                </div>
            </div>


<ReactSlider
      min={0}
      max={show.length * mul}
      step={1}
      className="customSlider"
      trackClassName="customSlider-track"
      thumbClassName="customSlider-thumb"
      marks = {mul}
      value={convertCounter(props.counter, show, mul)}
      onAfterChange={handleSliderClick}
      renderMark={(props) => {
        if(Math.floor(props.key/mul > Math.floor(convertCounter(val, show, mul)/mul))) {
            props.className = "customSlider-mark selected_mark"

        }
        return <span {...props}  onMouseEnter={()=>{setSliderHover(props.key)}} onMouseLeave={()=> {setSliderHover(null)}}/>;
     }}

    markClassName="customSlider-mark"
    />
    </div>



    );
};

export default ContentSlider;