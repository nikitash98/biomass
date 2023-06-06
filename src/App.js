import logo from './logo.svg';
import './App.css';
import Visualization from './3D_Components/Visualization';
import HoverInfo from './HoverInfo';
import React from 'react';
import Overlay from './Overlay/Overlay';
import { Suspense, useRef } from 'react';

function App() {
  const [counter, setCounter] = React.useState(0)
  const [info, setInfo] = React.useState(null)
  const [info_page, setInfoPage] = React.useState(null)
  const [hoveringInfo, setHoveringInfo] = React.useState(null)
  const [playing, setPlaying] = React.useState(false)
  const shouldHide = !(info_page || hoveringInfo);
  const [hovered, setHovered] = React.useState([null])
  const [yearPercentage, setYearPercentage] = React.useState(0)
  const animation_position = useRef(0)
  function increment_animation() {
    animation_position.current += 1
    
  }

    return (
    <div className="App">
      <div className = "game_container">

        {
          /*

          */
        }


        <div className="vis-container">


        <Visualization 
            animation_position = {animation_position}
            setCounter = {setCounter}
            hovered = {hovered} setHovered = {setHovered}
            setInfo = {setInfo} setInfoPage= {setInfoPage} 
            counter = {counter}
            /*
            setPlaying = {setPlaying} playing = {playing} 
            */

            setYearPercentage = {setYearPercentage} yearPercentage = {yearPercentage}
            />
          {/*
          
          
          
          */}
        </div>


        <Overlay setPlaying = {setPlaying} setCounter = {setCounter} 
        increment_animation = {increment_animation}
        counter = {counter} info = {info_page} setInfoPage = {setInfoPage} 
        setHoveringInfo = {setHoveringInfo}
        hovered = {hovered} setHovered = {setHovered}
        yearPercentage = {yearPercentage}
        ></Overlay>
      
      </div>


    </div>
  );
}

export default App;
