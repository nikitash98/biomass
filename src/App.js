import logo from './logo.svg';
import './App.css';
import Visualization from './3D_Components/Visualization';
import HoverInfo from './HoverInfo';
import React, { useEffect } from 'react';
import Overlay from './Overlay/Overlay';
import { Suspense, useRef } from 'react';
import { applyProps } from 'react-three-fiber';

function App() {
  const [counter, setCounter] = React.useState(0)
  const previousCounter = React.useRef(0)
  const animationTime = useRef(0)

  const [rotatePhoneContainer, setrotatePhoneContainer] = React.useState(true)


  const [info, setInfo] = React.useState(null)
  const [info_page, setInfoPage] = React.useState(null)
  const [playing, setPlaying] = React.useState(false)
  const [scrubbing, setScrubbing] = React.useState(false)
  const [hovered, setHovered] = React.useState([null])
  const [yearPercentage, setYearPercentage] = React.useState(0)
  const [counterHit, setcounterHit] = React.useState(false)
  const [redrawState, setRedrawState] = React.useState(0)
  const handleResize = () => {
    console.log("RESIZING");
    setRedrawState(window.innerHeight)
    if (window.innerWidth < 800) {
      setrotatePhoneContainer(true);
    }
};
  
  const [openModal, setOpenModal] = React.useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key == "ArrowRight") {
        setCounter(counter => Math.min(counter + 1, 31))
        setPlaying(true);
        setScrubbing(false);
        setcounterHit(false);

      }
      if (e.key == "ArrowLeft") {
        setCounter(counter => Math.max(counter - 1, 0))
        setPlaying(true);
        setScrubbing(false);
        setcounterHit(false);

      }
    }
    window.addEventListener('resize', handleResize)

    const handleKeyUp = (e) => {
    }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }

  }, [])
  

  return (
    <div className="App" onClick={() => { setrotatePhoneContainer(false); }}>
      <div className="game_container">
          <div className="vis-container">
            <Suspense fallback = {
              <div>
                LOADING
              </div>
            }>

            <Visualization
              animationTime={animationTime}
              hovered={hovered} setHovered={setHovered}
              setInfo={setInfo} setInfoPage={setInfoPage}
              counter={counter} setCounter={setCounter}
              previousCounter={previousCounter}
              scrubbing={scrubbing} setScrubbing={setScrubbing}
              setYearPercentage={setYearPercentage} yearPercentage={yearPercentage}
              setcounterHit={setcounterHit}
              setOpenModal={setOpenModal}
            />
          </Suspense>

          </div>
          
          <div className='game_overlay'>
            <Overlay
              counterHit={counterHit} setcounterHit={setcounterHit}
              setPlaying={setPlaying}
              setCounter={setCounter}
              animationTime={animationTime}
              counter={counter}
              info={info_page} setInfoPage={setInfoPage}
              hovered={hovered} setHovered={setHovered}
              yearPercentage={yearPercentage}
              setScrubbing={setScrubbing}
              openModal={openModal} setOpenModal={setOpenModal}
              rotatePhoneContainer={rotatePhoneContainer}
              redrawState = {redrawState}
            />
          </div>
      </div>
    </div>
  );
}

export default App;
