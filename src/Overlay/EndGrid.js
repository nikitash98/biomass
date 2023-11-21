import React from 'react';
import { Grid, Divider, Button, Icon } from 'semantic-ui-react'
import './Overlay.css';
import TableofContents from './TableofContents';
import { Accordion } from 'semantic-ui-react'
import ClickInfo from './ClickInfo';
import ContentSlider from './ContentSlider';
import Caption from './Caption';
import './EndGrid.css'
import { FacebookShareButton, TwitterShareButton, RedditShareButton } from 'react-share';
import { TwitterIcon, FacebookIcon, RedditIcon } from 'react-share';
function EndGrid(props) {


    return (
        <div className='end_section'>
            <Divider />

            <div className='third_col'>
                <div class="poster-download">
                    <img src="Posters/thumbs/BIO_2K_ALT.png" />
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
                <div class="poster-download">

                    <img src="Posters/thumbs/TECHO_2k.png" />
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
            <div className='two_third_col'>
                <div class="poster-download">

                    <img src="Posters/thumbs/BIO_TECHNO_2K.png" />
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
            <div className='aktiv_small'>
                Learn more
            </div>
            <Grid divided>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <a href="https://www.pnas.org/doi/10.1073/pnas.1711842115">
                            The biomass distribution on Earths
                            Bar-On, Y.M., Phillips R., & Milo, R.
                            Proceedings of the National Academy of Sciences.
                        </a>

                    </Grid.Column>
                    <Grid.Column>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/33299177/">
                            Global human-made mass exceeds all living biomass
                            Elhacham E, Ben-Uri L, Grozovski J, Bar-On YM, Milo R.
                            Nature. 2020
                        </a>

                    </Grid.Column>
                    <Grid.Column>
                        <a href="https://ourworldindata.org/plastic-pollution">
                            Hannah Ritchie and Max Roser (2018)
                            "Plastic Pollution".
                            Published online at OurWorldInData.org.
                        </a>

                    </Grid.Column>

                </Grid.Row>
            </Grid>


        </div>

    )

}
export default EndGrid