import {React, useRef} from 'react';
import { Grid, Button, Icon, Divider} from 'semantic-ui-react'
import { Vector3 } from 'three';
import myData from './data.json';
import './ClickInfo.css';

function ClickInfo(props) {
    const name = useRef("")
    const position = useRef(new Vector3(0, 0, 0))
    let trans =  "translate(-120%, 0)"
    if(props.hovered) {
        name.current = props.hovered

    }

    //
    if(props.hovered[0]){
    //if(true){
        return (
            <div className = "ClickInfo" 
                onMouseEnter={e=> {props.setHoveringInfo(true)}} onMouseLeave = {e=> {props.setHoveringInfo(false)} }
                >
                    <div className = "header">

                        <img src={myData[name.current].image}></img>
                    </div>
                    <div className='content'>

                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column width = {10}>
                                <div className='info_title'>
                                    <h3>{name.current} </h3>
                                </div>
                            </Grid.Column>
                            <Grid.Column width = {6}>


                                {/*
                                
                                    {props.counter < 20 && (
                                         <div className='info_value'>

                                            <h3>{myData[name.current].value} Gt C</h3>
                                        </div>
                                    )}\
                                    
                                    {props.counter >=20 && (

                                    ) }
                                */}

                                <div className='info_value'>
                                    <h3>{myData[name.current].weight} Gt</h3>
                                </div>

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Divider></Divider>
                    <p>{myData[name.current].src} </p>
                    
                    {/*<Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column width = {6}>
                                <h3>{name.current} </h3>
                                <img src={myData[name.current].image}></img>

                            </Grid.Column>
                            <Grid.Column width = {10}>
                                <div className = "read">

                                <h3>{myData[name.current].value} Gt C</h3>
                                <p>{myData[name.current].src} </p>
                                </div>

                            </Grid.Column>
                        </Grid.Row>
        </Grid>*/}
                    </div>

            </div>
        )
    }

}
export default ClickInfo