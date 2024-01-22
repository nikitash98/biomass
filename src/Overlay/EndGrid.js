import React from 'react';
import { Grid, Divider, Button, Icon } from 'semantic-ui-react'
import './Overlay.css';
import './EndGrid.css'
import PosterDownload from './PosterDownload';
function EndGrid(props) {


    return (
        <div className='end_section'>
            <div className='interior_section' style={{ "textAlign": "center" }}>
                <div className='big_caption_type'>
                    <span > <a style={{ "position": "relative" }} id="share" >
                        share
                        <div className='sharing_box'>
                            <a href="https://twitter.com/share?url=https://biocubes.net/&text=biocubes" target='_blank'>
                                <img src="Icon/twitter.svg" />
                            </a>

                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://biocubes.net/" target='_blank'>
                                <img src="Icon/facebook.svg" />
                            </a>

                            <a href="https://reddit.com/submit?url=https://biocubes.net/&title=<Check%20out%20biocubes.net>" target='_blank'>
                                <img src="Icon/reddit.svg" />
                            </a>

                            <a href="https://www.linkedin.com/shareArticle?url=https://biocubes.net/&title=Biocubes&summary=thebiocubes&source=https://biocubes.net/" target='_blank'>
                                <img src="Icon/linkedin.svg" />
                            </a>

                            <a href="mailto:?subject=biocubes&body=https://biocubes.net/" target='_blank'>
                                <img src="Icon/mail_02.svg" />
                            </a>
                        </div>

                    </a></span>   this information, get a <a id = "poster" style={{ "position": "relative" }}> poster
                        <div className='poster_box'>
                            download  below
                        </div>
                    
                     </a>,
                    or <a id = "learnmore" style={{ "position": "relative" }}>learn more
                    <div className='credit_box'>
                        <div className="imageCreditContent">
                            <div className='small_type'>
                                learn more
                            </div>
                            <p>

                            <Divider />
                            <Grid divided>
                                <Grid.Row columns={3} style={{ "textAlign": "left", "line-height": "16pt" }}>
                                    <Grid.Column>
                                        <a href="https://www.pnas.org/doi/10.1073/pnas.1711842115" target="_blank">
                                            The biomass distribution on Earth
                                            <br />
                                            Bar-On, Y.M., Phillips R., & Milo, R.
                                            <br />
                                            Proceedings of the National Academy of Sciences.
                                        </a>

                                    </Grid.Column>
                                    <Grid.Column>
                                        <a href="https://pubmed.ncbi.nlm.nih.gov/33299177/" target="_blank">
                                            Global human-made mass exceeds all living biomass
                                            <br />
                                            Elhacham E, Ben-Uri L, Grozovski J, Bar-On YM, Milo R.
                                            <br />
                                            Nature. 2020
                                        </a>

                                    </Grid.Column>
                                    <Grid.Column>
                                        <a href="https://ourworldindata.org/plastic-pollution" target="_blank">
                                            Hannah Ritchie and Max Roser (2018)
                                            <br />

                                            "Plastic Pollution".
                                            <br />
                                            Published online at OurWorldInData.org.
                                        </a>

                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            </p>

                            <Divider />
                            <div className='small_type'>
                                explore very large scales: <a href="https://mapoftheuniverse.net/" target="_blank"> Map of the Universe</a>
                            </div>
                        </div>
                    </div>
                    </a>
                    
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

                {/*
                <div className='small_type' style={{ "text-align": "center" }}>
                    <a onClick={() => { props.setsourcesModal(true) }} style={{ "cursor": "pointer" }}>learn more</a>
                </div>
                                */}

            </div>


        </div>

    )

}
export default EndGrid


{/*
                        <div>
                            <div class="poster-download" style={{ "padding-bottom": "5px" }}>
                                <div className='poster-download-container'>
                                    <img src="Posters/thumbs/bio_thumb.jpg" />
                                    <div class="poster-download-section">
                                        <div class="row download-row vertical-row">
                                            <a class="col" href="https://www.dropbox.com/scl/fi/c243ftk5ar00eqrgrm3ot/BIO_2K_ALT.png?rlkey=x13h5qvs61qpauha124an7svu&dl=1" download target="_blank" rel="noopener noreferrer">screen (2k)</a>
                                        </div>
                                        <div class="row download-row vertical-row">
                                            <a class="col" href="https://www.dropbox.com/scl/fi/76wbf0pq9dgpuwh7z7mli/BIO_4k_8k.png?rlkey=9zo0c74tc44mm7gn1e9kama55&dl=1" download target="_blank" rel="noopener noreferrer">high res (4k)</a>
                                        </div>
                                        <div class="row download-row vertical-row">
                                            <a class="col" href="https://www.dropbox.com/scl/fi/76wbf0pq9dgpuwh7z7mli/BIO_4k_8k.png?rlkey=9zo0c74tc44mm7gn1e9kama55&dl=1" download target="_blank" rel="noopener noreferrer">print (8k)</a>
                                        </div>
                                        <div class="row download-row vertical-row">
                                            <a class="col" href="https://www.redbubble.com/people/scientific-viz/shop" download target="_blank" rel="noopener noreferrer">order a poster</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="poster-download">
                                <div className='poster-download-container'>
                                    <img src="Posters/thumbs/techno_thumb.jpg" />
                                    <div class="poster-download-section">
                                        <div class="row download-row vertical-row">
                                            <a class="col" href="https://www.dropbox.com/scl/fi/z09upomy8yd2tzpvwpctq/TECHO_2k.png?rlkey=4362iu7y0qeodpzm29p8ddlld&dl=1" download target="_blank" rel="noopener noreferrer">screen (2k)</a>
                                        </div>
                                        <div class="row download-row vertical-row">
                                            <a class="col" href="https://www.dropbox.com/scl/fi/m1fdovybwyl13ou8sqwo2/TECHNO_PRINT.png?rlkey=f2o3vl0na84eqf5uvhvqk92ch&dl=1" download target="_blank" rel="noopener noreferrer">high res (4k)</a>
                                        </div>
                                        <div class="row download-row vertical-row">
                                            <a class="col" href="https://www.dropbox.com/scl/fi/m1fdovybwyl13ou8sqwo2/TECHNO_PRINT.png?rlkey=f2o3vl0na84eqf5uvhvqk92ch&dl=1" download target="_blank" rel="noopener noreferrer">print (8k)</a>
                                        </div>
                                        <div class="row download-row vertical-row">
                                            <a class="col" href="https://www.redbubble.com/people/scientific-viz/shop" download target="_blank" rel="noopener noreferrer">order a poster</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="poster-download"  >
                                <div className='poster-download-container'>
                                    <img src="Posters/thumbs/bio_techno_thumb.jpg" />
                                    <div class="poster-download-section">

                                        <div class="row download-row vertical-row">
                                            <a class="col" href="https://www.dropbox.com/scl/fi/e12d1j974jg3leil87lwx/BIO_TECHNO_2K.png?rlkey=7zlslpu6i6xhvrpn0tnvehij3&dl=1" download target="_blank" rel="noopener noreferrer">screen (2k)</a>
                                        </div>

                                        <div class="row download-row vertical-row">
                                            <a class="col" href="https://www.dropbox.com/scl/fi/tmyntud56hzbsvhittnvk/BIO_TECHNO_PRINT.png?rlkey=ckrc8tw0njx2qkm6zxsl2181o&dl=1" download target="_blank" rel="noopener noreferrer">high res (4k)</a>
                                        </div>
                                        <div class="row download-row vertical-row">
                                            <a class="col" href="https://www.dropbox.com/scl/fi/tmyntud56hzbsvhittnvk/BIO_TECHNO_PRINT.png?rlkey=ckrc8tw0njx2qkm6zxsl2181o&dl=1" download target="_blank" rel="noopener noreferrer">print (8k)</a>
                                        </div>
                                        <div class="row download-row vertical-row">
                                            <a class="col" href="https://www.redbubble.com/people/scientific-viz/shop" download target="_blank" rel="noopener noreferrer">order a poster</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    */}
