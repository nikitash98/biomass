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
        props.setScrubbing(true)

    }
    var keys = Object.keys(slides);
    let less_keys = keys.slice(0,-1)
    let show = [0, 9, 11, 20]
    let show_two = [0, 9, 11, 20, 30]
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
        return total
    }
    const convertSlider = (value, show, mul) => {
        let set = Math.round(value/mul)
        let end_index = 20
        if(set >= show.length) {
            return keys.length-1
        }

        return show[set]
    }

    const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]

    
    return (
        <div style={{width: "100%", height: "100%"}}>


<div className="custom_slider_container">
            {/*
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
                                {slides[show[i]]["title"]}
                            </div>
                            );         
                    }
                })}
                </div>
            </div>
            */}

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
                        console.log(props.key)
                        console.log(props.key/mul)
                        let tick_class = "tick_label_top"
                        if(Math.floor(props.key/mul > Math.floor(convertCounter(val, show, mul)/mul))) {
                            props.className = "customSlider-mark selected_mark"
                            tick_class = "tick_label_top selected_tick"
                        }
                        return <span {...props}  onMouseEnter={()=>{setSliderHover(props.key)}} onMouseLeave={()=> {setSliderHover(null)}}>
                            <div className={tick_class}>
                                {slides[show_two[Math.floor(props.key/mul)]]["title"]}
                            </div>
                        </span>;
                    }}

                    markClassName="customSlider-mark"
                    />
            </div>

    </div>



    );
};

export default ContentSlider;