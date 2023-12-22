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
            <div className='interior_section' style={{"textAlign" : "center"}}>
                 
            <div className='big_caption_type'>download a poster</div>
            <div>
            <div class="wrapper">
                <div>
                <div class="poster-download"  >
                <div className='poster-download-container'>

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

                    
                </div>
                <div>
                    




                <div class="poster-download" style={{"padding-bottom": "5px"}}>
                    <div className='poster-download-container'>

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

                </div>
                <div class="poster-download">
                <div className='poster-download-container'>

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

                </div>
            </div>
                            {/*

            <div className='third_col'>
                <div className='test'>
                    abc
                </div>
                <div class="poster-download">
                    <div className='poster-download-container'>

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

                </div>
                <div class="poster-download">
                <div className='poster-download-container'>

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

            </div>
            <div className='two_third_col'>
                <div class="poster-download">
                <div className='poster-download-container'>

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


            </div>
        */}

            </div>

            <div className='aktiv_small' style={{"text-align" : "center"}}>
                <a onClick={()=>{props.setsourcesModal(true)}} style={{"cursor": "pointer"}}>learn more</a>
            </div>
            </div>


            {/*
           
            */}

        </div>

    )

}
export default EndGrid