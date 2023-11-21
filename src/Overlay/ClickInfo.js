import {React, useRef} from 'react';
import { Grid, Button, Icon, Divider} from 'semantic-ui-react'
import { Vector3 } from 'three';
import myData from './data.json';
import './ClickInfo.css';

function ClickInfo(props) {
    const name = useRef("Humans")
    const position = useRef(new Vector3(0, 0, 0))
    let trans =  "translate(-120%, 0)"
    const testRef = useRef("ABC")
    if(props.hovered[0]) {

        if(props.hovered[0].includes("Hover")) {
            name.current = [props.hovered[0].split("_")[0]]
        } else if(props.hovered[0].includes("_")) {
            name.current = props.hovered[0].replace("_", " ")
        } else {

            name.current = props.hovered
        }
        //name.current = "Humans"
    }
    //
    //if(true){
    if(name.current) {
        return (
            <div className = {props.hovered[0] ? "ClickInfo" : "ClickInfo"}>
                <div className='ClickInfo_image'>

                    <img src={myData[name.current].image}></img>
                    
                    <div className = "ClickInfo_image_overlay">
                        
                    </div>

                </div>

                <div className = "header">
                <Grid style = {{"padding-bottom": "10px"}}>
                    <Grid.Row verticalAlign='bottom'>
                        <Grid.Column width = {10}>
                        <div className='info_title'>
                            
                            <h3>
                            {name.current} 
                            </h3>
                        </div>

                        </Grid.Column>
                        <Grid.Column width = {6} style = {{"text-align": "right"}}>
                        <div className='info_value'>
                        <h3>{myData[name.current].weight} Gt</h3>
                    </div>
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