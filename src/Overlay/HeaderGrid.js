import { React, useRef, useState } from 'react';

import ContentSlider from './ContentSlider';
import Caption from './Caption';
import TabExampleBasic from './InfoTabs';
import slides from '../slides.json'
import EndGrid from './EndGrid';
import ClickInfo from './ClickInfo';

import { Grid } from 'semantic-ui-react';
function HeaderGrid(props) {
    const [viewedBox, setviewedBox] = useState(-1)

    return (
        <Grid className='header_grid'>
            <Grid.Row className='header_row' onMouseLeave={() => setviewedBox(-1)}>
                <Grid.Column width={8} style={{ height: "100%" }}>
                    <div className={(props.counter == 0 ? 'title title_collapsed' : 'title ')} onClick={() => {
                        props.setScrubbing(true)
                        props.setCounter(0);
                    }
                    }>
                        <img className='regular_icon' src="Icon/Living13.svg" />
                    </div>
                </Grid.Column>
                <Grid.Column width={1}>
                </Grid.Column>
                <Grid.Column width={7}>
                    <ContentSlider counter={props.counter}
                        setCounter={props.setCounter}
                        setScrubbing={props.setScrubbing}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row className='info_row'>
                <Grid.Column width={1} verticalAlign='middle' className='button_column'>
                    {props.counter != 0 &&
                        <button className="click_button" type="button"
                            onClick={() => {
                                props.setCounter(Math.max(props.counter - 1, 0));
                                props.setPlaying(true);
                                props.setScrubbing(false);
                                props.setcounterHit(false);
                            }}>
                            <img src="Icon/Left.svg" ></img>
                        </button>
                    }
                </Grid.Column>
                <Grid.Column width={14} style={{ height: "100%", padding: "0%" }}>
                    {props.counter < 31 && (
                        <Grid className='internal_grid'>

                            <Grid.Row>
                                <Grid.Column width={5} style={{ position: "relative" }}>
                                    <div className={props.hovered[0] ? "" : "hidden"}>
                                        <ClickInfo info={props.info} setInfoPage={props.setInfoPage}
                                            hovered={props.hovered} setHoveringInfo={props.setHoveringInfo}
                                            counter={props.counter} />
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={4} >
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Caption counter={props.counter} setHovered={props.setHovered} setOpenModal={props.setOpenModal} />

                                </Grid.Column>

                            </Grid.Row>
                        </Grid>
                    )}

                    <div className={(props.counter == 32 && props.counterHit) ? "visible_overlay " : "visible_overlay hide_overlay"}>
                        <EndGrid />
                    </div>
                    
                </Grid.Column>
                <Grid.Column width={1} verticalAlign='middle' className='button_column'>
                    {((props.counter != 0)) && props.counter < Object.keys(slides).length - 1 &&
                        <button className="click_button" style={{ float: "right" }} type="button"
                            onClick={() => {
                                props.setCounter(Math.min(props.counter + 1, 32));
                                props.setPlaying(true);
                                props.setScrubbing(false);
                                props.setcounterHit(false);
                            }}>
                            <img src="Icon/Right.svg" ></img>
                        </button>
                    }
                </Grid.Column>
            </Grid.Row>


            <Grid.Row className='bottom_row'>
                <Grid.Column width={8} style={{ "padding": "0px" }}>
                    <div className='overlay_credit tiny_aktiv'>
                        © <a href="https://menard.pha.jhu.edu/" target="_blank">Ménard</a> and <a href="https://nikitashtarkman.com/" target="_blank">Shtarkman </a>
                    </div>
                </Grid.Column>
                <Grid.Column width={8} style={{ "padding": "0px" }}>
                    <TabExampleBasic setimageCreditModal={props.setimageCreditModal} />
                </Grid.Column>

            </Grid.Row>

        </Grid>

    )

}
export default HeaderGrid