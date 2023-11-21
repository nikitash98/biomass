import React, { useRef } from 'react';
import { Grid, Modal, Button, Header, Icon, Divider, Form, Radio } from 'semantic-ui-react'
import './Overlay.css';
import ClickInfo from './ClickInfo';
import slides from '../slides.json'
import { useState } from 'react';
import ImageCreditModal from './ImageCreditModal';
import HeaderGrid from './HeaderGrid';
function Overlay(props) {

    const [imageCreditModal, setimageCreditModal] = useState(false)
    const [rotateModal, setrotateModal] = useState(false)
    const [headerImage, setHeaderImage] = useState(0)
    const videoRef = useRef()



    const handleVideoEnded = () => {
        videoRef.current.currentTime = 2;
        videoRef.current.play();

    }
    return (
        <>
            {props.counter != 0 &&
                <button className="click_button small_click_left" type="button"
                    onClick={() => {
                        props.setCounter(Math.max(props.counter - 1, 0));
                        props.setPlaying(true);
                        props.setScrubbing(false);
                        props.setcounterHit(false);
                    }}>
                    <img src="Icon/Left.svg" ></img>
                </button>
            }
            {(props.counter != 0) && ((props.counter != 0 && props.counter != 12)) && props.counter < Object.keys(slides).length - 1 &&
                <button className="click_button small_click_right" style={{ float: "right" }} type="button"
                    onClick={() => {
                        props.setCounter(Math.min(props.counter + 1, 33));
                        props.setPlaying(true);
                        props.setScrubbing(false);
                        props.setcounterHit(false);
                    }}>
                    <img src="Icon/Right.svg" ></img>
                </button>
            }


            <div className='breaking_open'>
                <div className='breaking_container'>
                    <div className={(props.counter == 0) ? 'breaking' : 'breaking collapsed_breaking'}>
                        <div className='breaking_title'>
                            {/*

                            <img className='logo_icon' src="Icon/Living14.svg" />
                            */}

                        <img className='logo_icon' src = "backdrop/06.png"/>

                        </div>
                        <button className='new_start_button'

                            onClick={() => {
                                props.setCounter(Math.min(props.counter + 1, 32));
                                props.setPlaying(true);
                                props.setScrubbing(false);
                                props.setcounterHit(false);
                            }}

                        >start</button>
                        {/*
                        <img className='backdrop' src="backdrop/05.png" />
                        */}

                    </div>

                </div>
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

            <ImageCreditModal
                setimageCreditModal={setimageCreditModal}
                imageCreditModal={imageCreditModal}
            />

            <div className={props.rotatePhoneContainer ? 'rotate_phone_container  ' : 'rotate_phone_container hidden'}>
                <div className='rotate_phone_header'>
                    We recommend rotating your device to landscape
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

                    <div className={(props.counter == 21 && props.counterHit) ? ' big_caption_type chapter_title' : 'chapter_title fadeOut'}>
                        <div style={{ "position": "relative" }}>

                            they have caused the recent rise of the <span className="extra_info_title">
                                <div className="hidden_info_title">
                                    <span style={{ color: "black" }}>Technomass </span> refers to the aggregate amount of technological infrastructure.
                                </div>
                                technomass</span>
                        </div>
                    </div>
                </>
            )}

            <div className={(props.counter == 30 && props.counterHit) ? ' big_caption_type chapter_title chapter_left_align' : ' big_caption_type chapter_title chapter_left_align fadeOut'}>
                most of the technomass has been created during our lifetime
            </div>

            <div className={(props.counter == 31 && props.counterHit) ? ' big_caption_type chapter_title end_chapter' : ' big_caption_type chapter_title end_chapter fadeOut'}>
                the mass of man-made structures now outweighs the dry-mass of the entire living world.
            </div>
            <div className={(props.counter == 22 || props.counter == 23) ? ' big_caption_type chapter_title  chapter_year_counter' : ' big_caption_type chapter_title chapter_year_counter fadeOut'}>
                the technomass in year {(Math.max(Math.min(1900 + Math.round(123 * props.yearPercentage), 2023), 1900)).toString()}:
            </div>

            <div className={(props.counter == 1 && props.counterHit) ? "dna_box " : "dna_box hide_overlay"} >
                <div className="dna_caption big_caption_type">
                    <video autoPlay muted webkit-playsinline playsinline loop>
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

