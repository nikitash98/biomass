import ReactSlider from "react-slider";
import data from "../slides.json"
import { Grid, Divider, Button, Icon} from 'semantic-ui-react'
import "./Caption.css"
const HoverSpan = (props) => {
    return(
        <span id={props.id} className="hoverText" onPointerOver={() => {props.setHovered(props.hover_id)}} onPointerOut={()=>{props.setHovered(null)}}>{props.children}</span>
    )
}


function getText(sel, setHovered){
    switch(sel){
        case 0:
            return <div>
                <h3 className ="start_caption">

                </h3>
            </div>
            case 1:
                return <div>
                    <h3>
                        Lets put all of the animals in a box. 
    
    
                    </h3>
                </div>
        case 2:
            return <div>
                <h3>
                    These cubes represent the biomass of the six biological kingdoms. They show the "dry" weight of each division.
The units are in gigatons of carbon – abbreviated Gt C.


                </h3>
            </div>
        case 3:
            return <div>
                <h3>
                    Most of the biomass is found in macro-organisms, which are organisms that can be seen by eye.
                </h3>
            </div>
        case 4:
            return <div>
                <h3>
                    Most of the biomass is found in <HoverSpan id = "plant_text" hover_id = "Plants" setHovered = {setHovered}>plants</HoverSpan>. 
                </h3>
            </div>
        case 5:
            return <div>
                <h3>
                <HoverSpan id = "fungi_text" hover_id = "Fungi" setHovered = {setHovered}>Fungi</HoverSpan> and <HoverSpan id = "animal_text" hover_id = "Animals" setHovered = {setHovered}>animals</HoverSpan>  are heterotrophs: they feed on other living organisms.
                </h3>
            </div>
        case 6:
            return <div>
                <h3>
                    A surprising amount of biomass is found in micro-organisms, which are microscopically small.
                </h3>
            </div>
        case 7:
            return <div>
                <h3>
                <HoverSpan id = "protists_text" hover_id = "Bacteria" setHovered = {setHovered}>Bacteria</HoverSpan> and  <HoverSpan id = "protists_text" hover_id = "Archaea" setHovered = {setHovered}>archaea</HoverSpan> are micro-organisms most of which are located in deep subsurface environments. 
                </h3>
            </div>
        case 8:
            return <div>
                <h3>
                <HoverSpan id = "protists_text" hover_id = "Protists" setHovered = {setHovered}>Protists</HoverSpan> are micro-organisms found in almost any environment that contains liquid water.
                </h3>
            </div>

        case 9:
            return <div>
                <h3>
                <HoverSpan id = "virus_text" hover_id = "Virus" setHovered = {setHovered}>Viruses</HoverSpan> are made up of organic material but are technically not alive. Being tiny, they are abundant in many environments, despite having a small contribution to the total biomass.
                </h3>
            </div>
        case 10:
            return <div>
                <h3>
                The last universal common ancestor (LUCA) is the most recent population from which all organisms now living on Earth share common descent.
                </h3> 
            </div>
        case 11:
            return <div>
                <h3>
                <HoverSpan id = "animal_text" hover_id = "Animals" setHovered = {setHovered}>Animals</HoverSpan> are a diverse Kingdom. Click the next button to open the animal box.
                </h3> 
            </div>
        case 12:
            return <div>
                <h3>
                Animals are spread out across different environments on the earth.
                <br/>
                
                <div>
                    <Divider/>
                    <a id = "download_button" href = "Posters/Biomass_Poster.png" target="_blank" download>Download a poster</a>
                </div>
                </h3> 
            </div>
        case 13:
            return <div>
                <h3>
                    Animals are mainly marine, dominated by  <HoverSpan id = "fish_text" hover_id = "Fish" setHovered = {setHovered}>fish</HoverSpan>, 
                    and   <HoverSpan id = "fish_text" hover_id = "Marine Arthropods" setHovered = {setHovered}>marine arthropods</HoverSpan>.
                </h3>
            </div>
        case 14:
            return <div>
                <h3>
                We then find an abundance of life forms  underground (<HoverSpan id = "fish_text" hover_id = "Nematodes" setHovered = {setHovered}>nematodes</HoverSpan>, <HoverSpan id = "fish_text" hover_id = "Annelids" setHovered = {setHovered}>annelids </HoverSpan> and <HoverSpan id = "fish_text" hover_id = "Arthropods" setHovered = {setHovered}>arthropods</HoverSpan>).
                </h3>
            </div>
        case 15:
            return <div>
                <h3>
                <HoverSpan id = "fish_text" hover_id = "Arthropods" setHovered = {setHovered}>Arthropods</HoverSpan> contribute more than three times the amount of biomass  <HoverSpan id = "fish_text" hover_id = "Humans" setHovered = {setHovered}>humans</HoverSpan>.
                </h3>
            </div>
        case 16:
            return <div>
                <h3>
                <HoverSpan id = "fish_text" hover_id = "Wild Mammals" setHovered = {setHovered}>Wild mammals</HoverSpan> and   <HoverSpan id = "fish_text" hover_id = "Wild Birds" setHovered = {setHovered}>birds</HoverSpan>
                comprise only a tiny fraction, smaller than 1%, of the animal biomass. 
                </h3>
            </div>
        case 17:
            return <div>
                <h3>
                Today, <HoverSpan id = "fish_text" hover_id = "Humans" setHovered = {setHovered}>humans</HoverSpan> weigh about 10 times more than all <HoverSpan id = "fish_text" hover_id = "Wild Mammals" setHovered = {setHovered}>wild mammals</HoverSpan>. 
                </h3>
            </div>
        case 18:
            return <div>
                <h3>
                To generate enough proteins, humans have created <HoverSpan id = "fish_text" hover_id = "Livestock" setHovered = {setHovered}>livestock</HoverSpan>  that now weighs almost twice the entire world population.
                </h3>
            </div>


    }

}

const Caption = (props) => {
    return (
        <div className="ContentCaption">
            <h3>
            {getText(props.counter, props.setHovered)}
            </h3>

        </div>
    );
};

export default Caption;