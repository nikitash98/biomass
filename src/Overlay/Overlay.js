import React, { useEffect, useRef } from 'react';
import { Grid, Modal, Button, Header, Icon, Divider, Form, Radio } from 'semantic-ui-react'
import './Overlay.css';
import ClickInfo from './ClickInfo';
import slides from '../slides.json'
import { useState } from 'react';
import ImageCreditModal from './ImageCreditModal';
import HeaderGrid from './HeaderGrid';
import SourcesModal from './SourcesModal';
function Overlay(props) {

    const [imageCreditModal, setimageCreditModal] = useState(false)
    const [rotateModal, setrotateModal] = useState(false)
    const [headerImage, setHeaderImage] = useState(0)
    const videoRef = useRef()
    let scrollYearsRef = useRef(null);

    const [sourcesModal, setsourcesModal] = useState(false)

    const handleVideoEnded = () => {
        videoRef.current.currentTime = 2;
        videoRef.current.play();
    }
    let [height, setHeight] = useState(null);


    const years = [...Array(124).keys()].reverse()
    useEffect(()=> {
        setHeight(scrollYearsRef.current.offsetHeight)
    })
    return (
        <>
            <div className={(props.counter == 0) ? "logo_container":'logo_container moved'} onClick={()=>{props.setCounter(0)}}>
                <div style={{"position": "relative", "height": "100%"}}>
                <img src="Icon/Living13.svg" />
                </div>
            </div>
            
            {props.counter != 0 &&
                <button className="click_button small_click_left" type="button"
                    onClick={() => {
                        props.left_click()
                    }}>
                    <img src="Icon/Left.svg" ></img>
                </button>
            }
            {(props.counter != 0) && (props.counter != 1) && props.counter < Object.keys(slides).length - 1 &&
                <button className="click_button small_click_right" style={{ float: "right" }} type="button"
                    onClick={() => {
                        props.right_click()
                    }}>
                    <img src="Icon/Right.svg" ></img>
                </button>
            }


                        <div className={(props.counter == 0) ? 'breaking_title basicfadeIn' : 'breaking_title basicfadeOut'}>
                            <div className='logo_subtitle' >
                                an inventory of biomass and technomass
                            </div>
                            <button className='new_start_button'
                            onClick={() => {
                               props.right_click()
                            }}>start</button>
                        <img className='bottom_drop' src="backdrop/18.png" />

                        </div>
            
            {/*
            <div className={(props.counter == 0) ? "title_container":'title_container elevated'}>
                <img className={(props.counter < 2) ? "":'collapsed_breaking'} src="Icon/the_living_piece.svg"/>
                <img className={(props.counter == 0) ? "":'collapsed_breaking'} src="Icon/the_built_piece.svg " />

            </div>
            */}


            {/*
            <div className='breaking_open'>
                <div className='breaking_container'>
                    <div className={(props.counter == 0) ? 'breaking basicfadeIn' : 'breaking basicfadeOut'}>
                        <div className='breaking_title'>
                            <div className='logo_subtitle' >
                                an inventory of biomass and technomass
                            </div>



                        </div>
                        <button className='new_start_button'
                            onClick={() => {
                               props.right_click()
                            }}>start</button>
                        <img className='bottom_drop' src="backdrop/16.png" />


                    </div>
                </div>
            </div>
            */}
                        {/*
                        <img className='backdrop' src="backdrop/08.png" />
                        <img className='bottom_drop' src="backdrop/09.png" />
                        */}
                            {/*
                            <div className='desktop'>
                                <img className='logo_icon' src="backdrop/11.png" />
                            </div>
                            */}
                            {/*
                            <div className='phone_logo_icon'>
                                <div className='phone_logo_cont'>
                                    <img src="Icon/Phone_Icon.svg" />
                                    <h2>an interactive inventory of biomass and technomass</h2>
                                </div>

                            </div>
                            */}
                        {/*
                            <img className='logo_icon' src = "backdrop/07.png"/>
                            <img className='logo_icon' src="Icon/Living14.svg" />
                        */}

            <Modal
                basic
                onClose={() => { props.setOpenModal(false); props.setHovered([]) }}
                onOpen={() => props.setOpenModal(true)}
                open={props.openModal}
                size='small'
            >
                <Modal.Content>
                    <ClickInfo info={props.info} setInfoPage={props.setInfoPage}
                        hovered={props.hovered} setHoveringInfo={props.setHoveringInfo}
                        counter={props.counter} />
                </Modal.Content>
            </Modal>

            
            <SourcesModal
                sourcesModal = {sourcesModal}
                setsourcesModal = {setsourcesModal}
            />

            <ImageCreditModal
                setimageCreditModal={setimageCreditModal}
                imageCreditModal={imageCreditModal}
            />




            <div className={props.rotatePhoneContainer ? 'rotate_phone_container  ' : 'rotate_phone_container hidden'}>
                <div className='rotate_phone_header'>
                    rotate your device
                </div>

                <img className='regular_icon' src="Icon/Rotate_Phone.svg" />
            </div>

            
            <HeaderGrid setimageCreditModal = {setimageCreditModal}
            counter = {props.counter}
            setCounter = {props.setCounter}
            setScrubbing = {props.setScrubbing}
            hovered = {props.hovered}
            setPlaying = {props.setPlaying}
            setcounterHit = {props.setcounterHit}
            counterHit = {props.counterHit}
            setHovered = {props.setHovered}
            setOpenModal = {props.setOpenModal}
            setsourcesModal = {setsourcesModal}
            />

            {(props.counter >= 18 && props.counter < 22) && (
                <>
                    <div className={(props.counter == 18 && props.counterHit) ? 'chapter_title big_caption_type side_title' : 'chapter_title big_caption_type side_title fadeOut'}>
                        this biomass is the result of <span> 4 billion </span> years of evolution
                    </div>

                    <div className={(props.counter == 19 && props.counterHit) ? ' big_caption_type chapter_title ' : ' big_caption_type chapter_title fadeOut'}>
                        cars are one of humankind's most successful and global inventions

                    </div>

                    <div className={(props.counter == 20 && props.counterHit) ? 'chapter_title big_caption_type' : ' big_caption_type chapter_title fadeOut'}>
                        humans are dramatically changing the surface of the earth
                    </div>

                    <div id="lets_return" className={(props.counter == 21 && props.counterHit) ? ' big_caption_type chapter_title' : ' big_caption_type chapter_title fadeOut'}>
                        <div style={{ "position": "relative" }}>
                            let's return to the year 1900 to see the rise of the <span className="extra_info_title">
                                <div className="hidden_info_title">
                                    <span style={{ color: "black" }}>Technomass </span> refers to the aggregate amount of technological infrastructure.
                                </div>
                                technomass</span>
                                <br/>
                                <br/>
                                 the human population was 1.6 billion.
                        </div>
                    </div>
                </>
            )}

            <div className={(props.counter == 30 && props.counterHit) ? ' big_caption_type chapter_title chapter_left_align' : ' big_caption_type chapter_title chapter_left_align fadeOut'}>
                most of the technomass has been created during our lifetime
            </div>

            <div className={(props.counter == 31 && props.counterHit) ? ' big_caption_type chapter_title end_chapter' : ' big_caption_type chapter_title end_chapter fadeOut'}>
                man-made structures now outweigh the dry-mass of the living world.
            </div>
            <div className={(props.counter == 22 || props.counter == 23) ? ' big_caption_type chapter_title  chapter_year_counter' : ' big_caption_type chapter_title chapter_year_counter fadeOut'}>
            the technomass in year  
            <span style={{position: "relative", "margin-left": "5px", "margin-right": "5px"}}>  <span style={{visibility: "hidden"}}> 1900</span>
                 <div id = "year_slider"  ref = {scrollYearsRef} className='year_slider' style = {{"bottom": -height * Math.floor(Math.max(props.yearPercentage * 123, 0.0))/123 + "px"}} >
                    <ul >
                        {years.map(function(e, i) {
                            let opacity = 0.1;
                            let dist = Math.abs((e/123) - Math.min(Math.max(props.yearPercentage, 0), 1.0))
                            if(dist < 0.005) {
                                opacity = 1.0
                            }
                            if(dist > 0.05) {
                                opacity = 0.0;
                            }

                            return <li style={{opacity:opacity}}>
                                {1900 + e}
                            </li>
                        })}
                    </ul>
                    {/*
                    <button className="click_button small_click_right" style={{ float: "right" }} type="button"
                        onClick={() => {
                            props.right_click()
                        }}>
                        <img src="Icon/Right.svg" ></img>
                    </button>
                    */}

                    </div>
                </span>
                <div style={{"display": "inline-block"}}>
                <button className='click_button'
                onClick={() => {
                    props.right_click()
                }}>
                    <img src="Icon/play.svg" ></img>
                    </button>
                </div>

                {/** 1 - ((Math.abs((e/123) - props.yearPercentage)) * 10) */}
                {/*style={{opacity: 1-(e/124.0 - Math.max(props.yearPercentage, 0.0))}}  props.yearPercentage* /}
                {/*(Math.max(Math.min(1900 + Math.round(123 * props.yearPercentage), 2023), 1900)).toString() */}
            </div>
            <div id = "test_id">

            </div>

            <div className={(props.counter == 1 && props.counterHit) ? "dna_box basicfadeIn" : "dna_box basicfadeOut"} >
                <div className="dna_caption big_caption_type">
                    <video autoPlay muted webkit-playsinline playsinline loop playsInline webkit-playsInline>
                        <source src="dna/DNA_14.mp4" type="video/mp4" />
                    </video>
                    All life on earth started from a chemical soup.
                    <br />
                    <br />
                    These chemical bonds have spawned an enormous diversity of life forms.
                </div>
            </div>

            <div className={(props.counter == 32 && props.counterHit) ? "total_cover " : "total_cover hide_overlay"}>
            </div>

        </>

    )

}
export default Overlay

