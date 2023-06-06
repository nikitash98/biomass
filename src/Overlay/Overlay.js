import React from 'react';
import { Grid, Divider, Button, Icon} from 'semantic-ui-react'
import './Overlay.css';
import TableofContents from './TableofContents';
import { Accordion } from 'semantic-ui-react'
import ClickInfo from './ClickInfo';
import ContentSlider from './ContentSlider';
import Caption from './Caption';
import TabExampleBasic from './InfoTabs';
import slides from '../slides.json'
function Overlay(props) {
    const panels = [{
        key: 'credit',
        title: 'credits',
        content: (
            <div className = "copyrights_text">
            Data from Bar-On, Y.M., Phillips R., & Milo, R. The biomass distribution on Earth.(2018), 
           <br/>
          Proceedings of the National Academy of Sciences. <br/>© Ménard and Shtarkman
       </div>
        )
    }]




    let year = 1990;
    const perc = 0;

    return (
        <div className='game_overlay'> 

            <ClickInfo info = {props.info} setInfoPage = {props.setInfoPage} 
            hovered = {props.hovered} setHoveringInfo = {props.setHoveringInfo}
            counter = {props.counter}/>
            <Grid >
                <Grid.Row>
                    <Grid.Column width={6}>
                        <div className='title'>
                            <h1>The Living and the Built</h1>

                            {/* 
                            <h1>Blocks of Life</h1>
                            <h2>The living and the built</h2>
                            */}
                        </div>
                        <br/>

                    

                    </Grid.Column>
                    <Grid.Column width={3}>
                        
                    </Grid.Column>
                    <Grid.Column width={7}>
                        
                        <ContentSlider counter = {props.counter} setCounter = {props.setCounter}/>
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
            <div >

            </div>

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


            <div className = {props.counter == 20 ? 'chapter_title': 'chapter_title fadeOut'}>
                the biomass is the result of 4 billion years of evolution
            </div>
            
            <div className = {props.counter == 21 ? 'chapter_title': 'chapter_title fadeOut'}>
                humans are dramatically changing the surface of the earth
            </div>

            <div className = {props.counter == 22 ? 'chapter_title': 'chapter_title fadeOut'}>
                the recent rise of the technomass
            </div>

            {/*
            <div className = {props.counter == 2 ? 'chapter_title': 'chapter_title fadeOut'}>
                The reign of biomass
            </div>
            */}

            {props.counter >=  24 && props.counter < 25 && (
                <div className='years'>
                    <div className = "yearCounter" >
                        <h1>{props.yearPercentage.toString()}</h1>
                    </div>
                </div>
            )}

            <div className='button-set'>
                {props.counter != 0 &&
                    <button className = "click_button" type="button" onClick={()=>{props.setCounter(Math.max(props.counter - 1, 0)); props.setPlaying(true)}}>
                        <img src="Icon/Left.svg" ></img>
                    </button>
                }

                {props.counter != 0 && props.counter != 12 && props.counter != 2 && props.counter <  Object.keys(slides).length -1 &&
                    <button className = "click_button" style = {{float: "right"}} type="button" onClick={()=>{props.setCounter(Math.min(props.counter + 1, 31)); props.setPlaying(true)}}>
                        <img src="Icon/Right.svg" ></img>
                    </button>
                }

            </div>

        </div>
    )

}
export default Overlay


/*
                        <TableofContents counter = {props.counter} setCounter = {props.setCounter} setPlaying = {props.setPlaying}/>


*/