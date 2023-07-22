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
            <div className = "ClickInfo">
                <div className='ClickInfo_image'>

                    <img src={myData[name.current].image}></img>
                    <div className='info_value'>
                        <h3>{myData[name.current].weight} Gt</h3>
                    </div>
                    <div className = "ClickInfo_image_overlay">
                        
                    </div>

                </div>

                                <div className = "header">
                <Grid>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column width = {12}>
                        <div className='info_title'>
                            <h3>{name.current} </h3>
                        </div>

                        </Grid.Column>
                        <Grid.Column width = {4} style = {{"text-align": "right"}}>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                

                </div>
                <div className='ClickInfo_content'>
                    <p>{myData[name.current].src} </p>
                </div>

            </div>
        )
    }

}
export default ClickInfo