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
    const [imageCreditModal, setimageCreditModal] = useState(false);
    const videoRef = useRef();

    let scrollYearsRef = useRef(null);

    const [sourcesModal, setsourcesModal] = useState(false)

    let [height, setHeight] = useState(null);


    const years = [...Array(124).keys()].reverse()

    useEffect(() => {
    })
    let calculated_year_value = Math.trunc(1900 + Math.min(Math.max(props.yearPercentage * 123, 0.0), 123))
    




    return (
        <>
            <div className={(props.counter == 0) ? "logo_container" : 'logo_container logo_moved_position'} >
                <div style={{ "position": "relative", "height": "100%" }}>
                    <div className='icon_container'>
                        
                    <img src="Icon/Living13.svg"  onClick={() => { props.setCounter(0) }}/>
                    {(props.counter == 0) && (
                        <>
                        <img src='Icon/subtitle.svg'/>
                        </>
                    )}
                    </div>

                </div>
            </div>

            {(props.loaded3D) && (props.counter == 0) && (
                <div className='button_container'>

                    <button className='new_start_button big_caption_type'
                    onClick={() => {console.log("CLICKED");
                        props.right_click()
                    }}>
                                            click to start <img src="Icon/Right.svg" ></img>
                    </button>
                    </div>

                )}
            {props.counter != 0 &&
                <button className="click_button small_click_left" type="button"
                    onClick={() => {
                        props.left_click()
                    }}>
                    <img src="Icon/Left.svg" ></img>
                </button>
            }
            
            {(props.counter != 0) && props.counter < Object.keys(slides).length - 1 &&
                <button className="click_button small_click_right" style={{ float: "right" }} type="button"
                    onClick={() => {
                        props.right_click()
                    }}>
                    <img src="Icon/Right.svg" ></img>
                </button>
            }

            
            <div className={(props.counter == 0) ? 'breaking_title basicfadeIn' : 'breaking_title basicfadeOut'}>
                <img className='bottom_drop' src="backdrop/20.png" />
            </div>
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
                sourcesModal={sourcesModal}
                setsourcesModal={setsourcesModal}
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



            <HeaderGrid setimageCreditModal={setimageCreditModal}
                counter={props.counter}
                setCounter={props.setCounter}
                setScrubbing={props.setScrubbing}
                hovered={props.hovered}
                setPlaying={props.setPlaying}
                setcounterHit={props.setcounterHit}
                counterHit={props.counterHit}
                setHovered={props.setHovered}
                setOpenModal={props.setOpenModal}
                setsourcesModal={setsourcesModal}
            />

            {(props.counter >= 18 && props.counter < 22) && (
                <>
                    <div className={(props.counter == 18 && props.counterHit) ? 'chapter_title big_caption_type side_title' : 'chapter_title big_caption_type side_title fadeOut'}>
                        the biomass is the result of <br/> <span className='nowrap'> 4 billion </span> years of evolution
                    </div>

                    <div className={(props.counter == 19 && props.counterHit) ? ' big_caption_type chapter_title ' : ' big_caption_type chapter_title fadeOut'}>
                        humans have built nearly two billion cars
                    </div>

                    <div className={(props.counter == 20 && props.counterHit) ? 'chapter_title big_caption_type' : ' big_caption_type chapter_title fadeOut'}>
                        humans are dramatically changing<br/> the surface of the Earth
                    </div>

                    <div id="lets_return" className={(props.counter == 21 && props.counterHit) ? ' big_caption_type chapter_title' : ' big_caption_type chapter_title fadeOut'}>
                        <div style={{ "position": "relative" }}>
                            let's return to the year 1900<br/> to see the rise of the <span className="extra_info_title">
                                technomass</span>
                                <div className="hidden_info_title">
                                    Technomass refers to the aggregate amount of technological infrastructure.
                                </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                            <br />
                            <br />

                            the human population was 1.6 billion
                        </div>
                    </div>
                </>
            )}

            <div className={(props.counter == 30 && props.counterHit) ? ' big_caption_type chapter_title chapter_left_align' : ' big_caption_type chapter_title chapter_left_align fadeOut'}>
                most of the technomass <br/> was created during our lifetime
            </div>

            <div className={(props.counter == 31 && props.counterHit) ? ' big_caption_type chapter_title end_chapter' : ' big_caption_type chapter_title end_chapter fadeOut'}>
                man-made structures now outweigh the mass of the living world
            </div>
            <div className={(props.counter == 22 || props.counter == 23) ? ' big_caption_type chapter_title  chapter_year_counter' : ' big_caption_type chapter_title chapter_year_counter fadeOut'} style={{top: 60 - (Math.max(props.yearPercentage, 0) ** 2 * 100) * 0.3 + "%"}}>
                the technomass in year {calculated_year_value}
                {(props.counter == 22 && props.counterHit) && (
                <div style={{ "display": "inline-block"}}>
                <button className='click_button'
                    onClick={() => {
                        props.right_click()
                    }}>
                    <img src="Icon/play.svg" ></img>
                </button>
            </div>

                )}           

                {/** 1 - ((Math.abs((e/123) - props.yearPercentage)) * 10) */}
                {/*style={{opacity: 1-(e/124.0 - Math.max(props.yearPercentage, 0.0))}}  props.yearPercentage* /}
                {/*(Math.max(Math.min(1900 + Math.round(123 * props.yearPercentage), 2023), 1900)).toString() */}
            </div>
            <div id="test_id">

            </div>

            <div className={(props.counter == 1 && props.counterHit) ? "dna_box basicfadeIn" : "dna_box basicfadeOut"} >
                <div className="dna_caption big_caption_type">
                all life on earth started from a chemical soup
                    <br />
                    <video autoPlay muted webkit-playsinline playsinline loop playsInline webkit-playsInline>
                        <source src="dna/DNA_14.mp4" type="video/mp4" />
                    </video>
                    these chemical bonds have spawned <br/> an enormous diversity of life forms
                </div>
            </div>

            <div className={(props.counter == 32 && props.counterHit) ? "total_cover " : "total_cover hide_overlay"}>
            </div>

        </>

    )

}
export default Overlay

