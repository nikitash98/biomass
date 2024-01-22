import React, { useState } from 'react'
import { Tab, Button, Grid, Divider } from 'semantic-ui-react'
import "./InfoTabs.css"
import PosterDownload from './PosterDownload'

const TabExampleBasic = (props) => {
  const [showSegment, setShowSegment] = useState(null);

  const handleTabHover = (value) => {
    setShowSegment(value);
  }

  const handleTabLeave = () => {
    setShowSegment(null);
  }

  return (
    <div className='tabs' onMouseLeave={handleTabLeave}>
      {showSegment != null &&

        <div className='segment' onMouseLeave={handleTabLeave}>
          {
            showSegment == 1 &&
            <div className='credit_drop_up'>
              <p style={{ textAlign: "right" }} className='small_type'>
                designed by <a href="https://menard.pha.jhu.edu/" target="_blank">Ménard</a> & <a href="https://nikitashtarkman.com/" target="_blank">Shtarkman </a>
                <br/> 
                <span className='small_type link_type' onClick={() => { props.setimageCreditModal(true) }}>image credits</span> | <span className='small_type link_type' onClick={() => { props.setsourcesModal(true) }}>data credits</span>
              </p>
            </div>
          }
          {
            showSegment == 2 &&

            <div className='download_drop_up'>
              <div className='poster_container'>

                <PosterDownload poster = "bioPoster"/>
              </div>
              <div className='poster_container'>

                <PosterDownload poster = "technoPoster"/>
              </div>
              <div className='poster_container'>

                <PosterDownload poster = "bioTechnoPoster"/>
              </div>

            </div>
          }
        </div>
      }

      <div className='infoTabs ' style={{ right: "0%" }}>
        {/*
        <div className={showSegment == 1 ? 'small_type  hovered_list' : 'small_type link_type'} onClick={() => { props.setimageCreditModal(true) }}> images</div>

        <div className={showSegment == 1 ? 'small_type hovered_list' : 'small_type link_type'} onClick={() => { props.setsourcesModal(true) }}> data</div>
        */}
        <div onMouseEnter={() => { handleTabHover(1) }} className={showSegment == 1 ? 'small_type hovered_list' : 'small_type link_type'}> credits</div>

        <div onMouseEnter={() => { handleTabHover(2) }} className={showSegment == 2 ? 'small_type hovered_list' : 'small_type link_type'}> posters</div>
      </div>
    </div>
  )
}

export default TabExampleBasic
