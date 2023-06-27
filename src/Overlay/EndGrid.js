import React from 'react';
import { Grid, Divider, Button, Icon} from 'semantic-ui-react'
import './Overlay.css';
import TableofContents from './TableofContents';
import { Accordion } from 'semantic-ui-react'
import ClickInfo from './ClickInfo';
import ContentSlider from './ContentSlider';
import Caption from './Caption';
import './EndGrid.css'
 function EndGrid(props) {


    return (
        <div className='end_section'>  
            <h1>Posters</h1>

            <Divider/>

            <Grid className='endgrid'>
                <Grid.Row columns={3}>
                    <Grid.Column >
                        
                        <div class = "poster-download">
                            <img src="Posters/Biotech0.jpg" />
                            <div class = "poster-download-section">
                                <div class = "row download-row vertical-row">
                                <a class = "col" href="https://www.dropbox.com/scl/fi/4dw6zo2pmvl0ecu5qchc8/Biotech0.jpg?dl=1&rlkey=s1bbdkniye3sn0vmcw5v0eukb?dl=1" download target="_blank" rel="noopener noreferrer">download</a>
                                </div>
                                {/* 

                                <div class = "row download-row vertical-row">
                                <a class = "col"  href="https://menard.pha.jhu.edu/MapoftheUniverse/Images/Deliverables/Files/MapoftheUniverse-multiscale-4k.png" download target="_blank" rel="noopener noreferrer">high (4k)</a>
                                </div>
                                <div class = "row download-row vertical-row">
                                <a class = "col" href="https://menard.pha.jhu.edu/MapoftheUniverse/Images/Deliverables/Files/MapoftheUniverse-multiscale-8k.png" download target="_blank" rel="noopener noreferrer">very high (8k)</a>
                                </div>
                                <div class = "row download-row vertical-row">
                                <a class = "col" href="https://www.redbubble.com/i/poster/Map-of-the-Universe-3-zoom-levels-by-scientific-viz/134357219.G7H47" target="_blank" rel="noopener noreferrer">                        
                                    order a poster
                                </a>
                                </div>
                                */}

                            </div>
                        </div>

                     </Grid.Column>
                    <Grid.Column >


                    <div class = "poster-download">

                            <img src="Posters/Biotech1.jpg" />
                            <div class = "poster-download-section">

                                <div class = "row download-row vertical-row">
                                <a class = "col" href="https://www.dropbox.com/scl/fi/d0o2cahrsdwk4oon1pyll/Biotech1.jpg?dl=1&rlkey=7j5pbir30vd7g26clwhtkm0ao" download target="_blank" rel="noopener noreferrer">download</a>
                                </div>
                                {/* 

                                <div class = "row download-row vertical-row">
                                <a class = "col"  href="https://menard.pha.jhu.edu/MapoftheUniverse/Images/Deliverables/Files/MapoftheUniverse-multiscale-4k.png" download target="_blank" rel="noopener noreferrer">high (4k)</a>
                                </div>
                                <div class = "row download-row vertical-row">
                                <a class = "col" href="https://menard.pha.jhu.edu/MapoftheUniverse/Images/Deliverables/Files/MapoftheUniverse-multiscale-8k.png" download target="_blank" rel="noopener noreferrer">very high (8k)</a>
                                </div>
                                <div class = "row download-row vertical-row">
                                <a class = "col" href="https://www.redbubble.com/i/poster/Map-of-the-Universe-3-zoom-levels-by-scientific-viz/134357219.G7H47" target="_blank" rel="noopener noreferrer">                        
                                    order a poster
                                </a>
                                </div>
                                */}

                            </div>
                        </div>

                    </Grid.Column >
                    <Grid.Column >


                    <div class = "poster-download">

                            <img src="Posters/Biotech4.jpg" />
                            <div class = "poster-download-section">

                                <div class = "row download-row vertical-row">
                                <a class = "col" href="https://www.dropbox.com/scl/fi/t7lfvchnm3ybnc0mbec5b/Biotech4.jpg?dl=1&rlkey=wgochfw6varii01dwitnmgnct" download target="_blank" rel="noopener noreferrer">download</a>
                                </div>
                                {/* 

                                <div class = "row download-row vertical-row">
                                <a class = "col"  href="https://menard.pha.jhu.edu/MapoftheUniverse/Images/Deliverables/Files/MapoftheUniverse-multiscale-4k.png" download target="_blank" rel="noopener noreferrer">high (4k)</a>
                                </div>
                                <div class = "row download-row vertical-row">
                                <a class = "col" href="https://menard.pha.jhu.edu/MapoftheUniverse/Images/Deliverables/Files/MapoftheUniverse-multiscale-8k.png" download target="_blank" rel="noopener noreferrer">very high (8k)</a>
                                </div>
                                <div class = "row download-row vertical-row">
                                <a class = "col" href="https://www.redbubble.com/i/poster/Map-of-the-Universe-3-zoom-levels-by-scientific-viz/134357219.G7H47" target="_blank" rel="noopener noreferrer">                        
                                    order a poster
                                </a>
                                </div>
                                */}
                                
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            {/*

            <div className='half'>
            </div>

            <div className='half'>
            </div>
    */}
            
            <Grid >
                <Grid.Row columns={2} className='papergrid'>
                    <Grid.Column >
                    <h1>
            Learn more

            </h1>
            <Divider/>
                        <a href="https://www.pnas.org/doi/10.1073/pnas.1711842115">

                            <h2>The biomass distribution on Earth</h2>
                            Bar-On, Y.M., Phillips R., & Milo, R.
                            Proceedings of the National Academy of Sciences.
                        </a>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/33299177/">
                            <h2>
                            Global human-made mass exceeds all living biomass
                            </h2>
                            Elhacham E, Ben-Uri L, Grozovski J, Bar-On YM, Milo R. 
                            Nature. 2020
                        </a>

                    </Grid.Column>
                    <Grid.Column >
                        {/*

                        <h1>Share the site</h1>
            <Divider/>
                        <a class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="Share on Facebook">
                        <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                            </div>Share on Facebook</div>
                        </a>

                        <a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="Share on Twitter">
                        <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
                            </div>Share on Twitter</div>
                        </a>


                        <a class="resp-sharing-button__link" href="mailto:?subject=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;body=http%3A%2F%2Fsharingbuttons.io" target="_self" rel="noopener" aria-label="Share by E-Mail">
                        <div class="resp-sharing-button resp-sharing-button--email resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"/></svg></div>Share by E-Mail</div>
                        </a>

                        <a class="resp-sharing-button__link" href="https://pinterest.com/pin/create/button/?url=http%3A%2F%2Fsharingbuttons.io&amp;media=http%3A%2F%2Fsharingbuttons.io&amp;description=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking." target="_blank" rel="noopener" aria-label="Share on Pinterest">
                        <div class="resp-sharing-button resp-sharing-button--pinterest resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.14.5C5.86.5 2.7 5 2.7 8.75c0 2.27.86 4.3 2.7 5.05.3.12.57 0 .66-.33l.27-1.06c.1-.32.06-.44-.2-.73-.52-.62-.86-1.44-.86-2.6 0-3.33 2.5-6.32 6.5-6.32 3.55 0 5.5 2.17 5.5 5.07 0 3.8-1.7 7.02-4.2 7.02-1.37 0-2.4-1.14-2.07-2.54.4-1.68 1.16-3.48 1.16-4.7 0-1.07-.58-1.98-1.78-1.98-1.4 0-2.55 1.47-2.55 3.42 0 1.25.43 2.1.43 2.1l-1.7 7.2c-.5 2.13-.08 4.75-.04 5 .02.17.22.2.3.1.14-.18 1.82-2.26 2.4-4.33.16-.58.93-3.63.93-3.63.45.88 1.8 1.65 3.22 1.65 4.25 0 7.13-3.87 7.13-9.05C20.5 4.15 17.18.5 12.14.5z"/></svg>
                            </div>Share on Pinterest</div>
                        </a>
                        */}

                    </Grid.Column >
                </Grid.Row>
            </Grid>

        </div>

    )

}
export default EndGrid


/*
                        <TableofContents counter = {props.counter} setCounter = {props.setCounter} setPlaying = {props.setPlaying}/>


*/