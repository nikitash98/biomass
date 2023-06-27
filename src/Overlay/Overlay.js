import React from 'react';
import { Grid} from 'semantic-ui-react'
import './Overlay.css';
import ClickInfo from './ClickInfo';
import ContentSlider from './ContentSlider';
import Caption from './Caption';
import TabExampleBasic from './InfoTabs';
import slides from '../slides.json'
import EndGrid from './EndGrid';
function Overlay(props) {
    return (
            <>
            <ClickInfo info = {props.info} setInfoPage = {props.setInfoPage} 
            hovered = {props.hovered} setHoveringInfo = {props.setHoveringInfo}
            counter = {props.counter}/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <div className='title' onClick={()=> {
                            props.setScrubbing(true)
                            props.setCounter(0);
                            }
                            }>
                            <h1>The Living and the Built</h1>
                        </div>
                        <br/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        
                    </Grid.Column>
                    <Grid.Column width={7}>
                        
                        <ContentSlider counter = {props.counter} 
                        setCounter = {props.setCounter}
                        setScrubbing = {props.setScrubbing}
                        />
                        <Caption counter = {props.counter} setHovered = {props.setHovered}/>
                    </Grid.Column>
                    <Grid.Column width={4}>

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>


                    </Grid.Column>
                </Grid.Row>
            </Grid>

            {props.counter == 31 && (
            <EndGrid/>

            )}

            <Grid className='slider_container'>
                <Grid.Row>
                    <Grid.Column width={10}>

                    </Grid.Column>

                    <Grid.Column width={6}>
                    <TabExampleBasic/>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
            {props.counter == 0 && (

                <div className='start_container'>
                    <div className = "start_caption">
                        How much life is there on Earth?
                    </div>
                </div>
            )}
            {(props.counter >= 18 && props.counter < 22) && (
                <>
                <div className = {(props.counter == 18 && props.counterHit) ? 'chapter_title side_title': 'chapter_title side_title fadeOut'}>
                    this biomass is the result of 4 billion years of evolution
                </div>
                
                <div className = {(props.counter == 19 && props.counterHit)  ? 'chapter_title': 'chapter_title fadeOut'}>
                    cars are one of humankind's most successful and global inventions

                </div>


                <div className = { (props.counter == 20 && props.counterHit) ? 'chapter_title': 'chapter_title fadeOut'}>
                    humans are dramatically changing the surface of the earth
                </div>




                <div className = { (props.counter == 21 && props.counterHit)  ? 'chapter_title': 'chapter_title fadeOut'}>
                    they have caused the recent rise of the <span className="extra_info_title"> 
                    <div className="hidden_info_title">
                    Technomass refers to the aggregate amount of technological infrastructure.
                    </div>
                    technomass</span>

                </div>
                </>

            ) }
            
            {/*
            props.counter >=  22 && props.counter < 23 && (
                <div className='years'>
                    <div className = "yearCounter" >
                        <h1>{(Math.max(Math.min(1900 + Math.round(123 * props.yearPercentage), 2023),1900)).toString()}</h1>
                    </div>
                </div>
            )
            */}

            <div className='button-set '>
                {props.counter != 0 &&
                    <button className = "click_button" type="button" 
                    onClick={()=>{
                        props.setCounter(Math.max(props.counter - 1, 0)); 
                        props.setPlaying(true);
                        props.setScrubbing(false);
                        props.setcounterHit(false);
                        
                    }}>
                        <img src="Icon/Left.svg" ></img>
                    </button>
                }
                
                { ((true) || (props.counter != 0 && props.counter != 12)) && props.counter != 1 && props.counter <  Object.keys(slides).length -1 &&
                    <button className = "click_button" style = {{float: "right"}} type="button" 
                    onClick={()=>{
                        props.setCounter(Math.min(props.counter + 1, 31)); 
                        props.setPlaying(true);
                        props.setScrubbing(false);
                        props.setcounterHit(false);

                    }}>
                        <img src="Icon/Right.svg" ></img>
                    </button>
                }

            </div>
            </>

    )

}
export default Overlay
