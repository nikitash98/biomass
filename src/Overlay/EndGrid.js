import React from 'react';
import { Grid, Divider, Button, Icon } from 'semantic-ui-react'
import './Overlay.css';
import './EndGrid.css'
import ReactGA from "react-ga4";
import PosterDownload from './PosterDownload';
function EndGrid(props) {
    const handletwitterClick = () => {
        ReactGA.event({
            category: 'Sharing',
            action: 'Twitter Share',
            label: 'Twitter Share button clicked.'
          });

    }

    const handlelinkedinClick = () => {
        ReactGA.event({
            category: 'Sharing',
            action: 'LinkedIn Share',
            label: 'LinkedIn Share button clicked.'
          });
    }

    const handlefacebookClick = () => {
        ReactGA.event({
            category: 'Sharing',
            action: 'Facebook Share',
            label: 'Facebook Share button clicked.'
          });
    }
    const handleEmailClick = () => {
        ReactGA.event({
            category: 'Sharing',
            action: 'Email Share',
            label: 'Email Share button clicked.'
          });
    }
    const handleredditClick = () => {
        ReactGA.event({
            category: 'Sharing',
            action: 'Reddit Share',
            label: 'Reddit Share button clicked.'
          });
    }


    return (
        <div className='end_section'>
            <div className='interior_section' style={{ "textAlign": "center" }}>
                <div className='big_caption_type'>
                </div>


                    <div className='poster-wrapper'>
                        <div className='poster_caption big_caption_type poster_not_line'>
                            get a poster
                        </div>
                        <div className='column_part'>
                            <div className='poster_container top_container'>
                                <div className='top_container_helper' >
                                    <div className='poster_download_helper'>
                                        <PosterDownload poster="bioPoster" />     
                                    </div>

                                </div>
                            </div>

                                <div className='poster_container bottom_container'>


                                    <div className='poster_download_helper poster_extra_caption'>

                                    <div className='poster_caption big_caption_type line_poster_caption'>
                                        get a poster
                                    </div>

                                    <PosterDownload poster="technoPoster" />
                                    </div>
                                </div>
                        </div>
                        <div className='big_poster_container' >
                            <div className='poster_container big_poster'>
                            <div className='poster_download_helper'>

                                <PosterDownload poster="bioTechnoPoster" />
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <div className='end_credit small_type'>
                    © <a href="https://menard.pha.jhu.edu/" target="_blank">Ménard</a> and <a href="https://nikitashtarkman.com/" target="_blank">Shtarkman </a>
                </div>

                <div className='end_credit_dropup small_type' >
                    <div style={{"text-wrap": "nowrap"}}>
                        <span className='small_type link_type' onClick={() => { props.setimageCreditModal(true) }}>image credits</span> | <span className='small_type link_type' onClick={() => { props.setsourcesModal(true) }}>data credits</span>
                    </div>
                </div>

        </div>

    )

}
export default EndGrid
