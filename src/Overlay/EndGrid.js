import React from 'react';
import { Grid, Divider, Button, Icon } from 'semantic-ui-react'
import './Overlay.css';
import './EndGrid.css'
import ReactGA from "react-ga4";
import PosterDownload from './PosterDownload';
function EndGrid(props) {
    const handletwitterClick = () => {
        console.log("twitter click")
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
                    share this information, get a poster | 
                 

                     <span className='sharingLine'>
                        
                        <a href="https://twitter.com/share?url=https://biocubes.net/&text=biocubes" target='_blank' onClick={handletwitterClick}>
                          
                            <img src="Icon/twitter.svg" />
                        </a>

                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://biocubes.net/" target='_blank' onClick={handlefacebookClick}>
                            <img src="Icon/facebook.svg" />
                        </a>

                        <a href="https://reddit.com/submit?url=https://biocubes.net/&title=<An%20inventory%20of%20biomass%20and%20technomass>" target='_blank' onClick={handleredditClick}>
                            <img src="Icon/reddit.svg" />
                        </a>

                        <a href="https://www.linkedin.com/shareArticle?url=https://biocubes.net/&title=Biocubes&summary=An%20inventory%20of%20biomass%20and%20technomass&source=https://biocubes.net/" target='_blank' onClick={handlelinkedinClick}>
                            <img src="Icon/linkedin.svg" />
                        </a>

                        <a href="mailto:?subject=biocubes&body=https://biocubes.net/" target='_blank' onClick={handleEmailClick}>
                            <img src="Icon/mail_02.svg" />
                        </a>
                    </span>

                </div>


                <div>
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

                </div>

            </div>


        </div>

    )

}
export default EndGrid
