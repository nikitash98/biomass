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
    return (
        <div className='game_overlay'> 
        {props.counter == 0 && (

        <div className='start_container'>
        <div className = "start_caption">
            How much does all life on earth weigh?
        </div>
        
        <div className='start_button'>

        </div>
    </div>
        )

        }
                    <ClickInfo info = {props.info} setInfoPage = {props.setInfoPage} 
                    hovered = {props.hovered} setHoveringInfo = {props.setHoveringInfo}
                    counter = {props.counter}/>
            <Grid >
                <Grid.Row>
                    <Grid.Column width={5}>
                    <div className='title'>
                    <h1>Biomass on Earth</h1>
                    </div>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <ContentSlider counter = {props.counter} setCounter = {props.setCounter}/>
                        <div style = {{height: "20%"}}></div>

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
          <div className='button-set'>
            {props.counter != 0 &&

            <Button className = "click_button" type="button" onClick={()=>{props.setCounter(Math.max(props.counter - 1, 0)); props.setPlaying(true)}}>
                <img src="Icon/Left.svg" ></img>
            </Button>
            }
            {props.counter != 0 && props.counter != 11 && props.counter <  Object.keys(slides).length -1 &&

            <Button className = "click_button" style = {{float: "right"}} type="button" onClick={()=>{props.setCounter(Math.min(props.counter + 1, 30)); props.setPlaying(true)}}>
                <img src="Icon/Right.svg" ></img>
            </Button>
            }
          </div>

        </div>
    )

}
export default Overlay


/*
                        <TableofContents counter = {props.counter} setCounter = {props.setCounter} setPlaying = {props.setPlaying}/>


*/