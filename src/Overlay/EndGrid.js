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
                    {/*
                    <span className='sharingLine'>
                        <a href="https://twitter.com/share?url=https://biocubes.net/&text=the%20story%20of%20the%20living%20and%20the%20built%0A" target='_blank' onClick={handletwitterClick}>
                        
                            <img src="Icon/twitter.svg" />
                        </a>

                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://biocubes.net/&quote=Check%20out%20this%20amazing%20website!" target='_blank' onClick={handlefacebookClick}>
                            <img src="Icon/facebook.svg" />
                        </a>

                        <a href="https://reddit.com/submit?url=https://biocubes.net/&title=the%20story%20of%20the%20living%20and%20the%20built>" target='_blank' onClick={handleredditClick}>
                            <img src="Icon/reddit.svg" />
                        </a>

                        <a href="https://www.linkedin.com/shareArticle?url=https://biocubes.net/&title=Biocubes&summary=the%20story%20of%20the%20living%20and%20the%20built&source=https://biocubes.net/" target='_blank' onClick={handlelinkedinClick}>
                            <img src="Icon/linkedin.svg" /> 
                        </a>

                        <a href="mailto:?subject=Check%20out%20biocubes.net&body=the%20story%20of%20the%20living%20and%20the%20built%0Ahttps://biocubes.net/" target='_blank' onClick={handleEmailClick}>
                            <img src="Icon/mail_02.svg" />
                        </a>
                    </span>
                    */}

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
                        {/*

                        */}

                    </div>
                    {/*
                    <div className="wrapper">
                        <div>
                            <div className='poster_container'>
                                <PosterDownload poster="bioPoster" />
                            </div>

                            <div className='poster_container'>
                                <PosterDownload poster="technoPoster" />
                            </div>
                        </div>
                        <div className='poster_container'>
                            <PosterDownload poster="bioTechnoPoster" />
                        </div>
                    </div>
                    */}

                </div>



        </div>

    )

}
export default EndGrid
