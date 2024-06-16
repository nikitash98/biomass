import ReactSlider from "react-slider";
import data from "../slides.json"
import { Grid, Divider, Button, Icon} from 'semantic-ui-react'
import "./Caption.css"
const HoverSpan = (props) => {
    return(
        <span id={props.id} className="hoverText" onPointerOver={() => {props.setHovered([props.hover_id])}} onPointerOut={()=>{props.setHovered([])}} onClick={() => {props.setOpenModal(true); props.setHovered([props.hover_id]);}}>{props.children}</span>
    )
}


function getText(sel, setHovered, openModal){
    switch(sel){
        case 0:
            return 
        case 1:
            return
        case 2:
            return <div>
                <p>
                    All life on earth is captured in this image. 
                    <br/> <br/>
                    These cubes represent the <span className="extra_info">biomass</span> of the six biological kingdoms.
                    <br/>
                    <br/>
                    <span id = "clickorhover"> 
                    Click or hover on them for more details.</span>
                    <div className="hidden_info">
                        <Divider/>
                        The values are estimates of the dry weight (that is, excluding water)
                    </div>
                </p>
            </div>
        case 3:
            return <div>
                <p>
                    Most of the biomass is found in <HoverSpan id = "plant_text" hover_id = "Plants" setHovered = {setHovered} setOpenModal = {openModal}>plants</HoverSpan>. 
                </p>
            </div>
        case 4:
            return <div>
                <p>
                <HoverSpan id = "fungi_text" hover_id = "Fungi" setHovered = {setHovered} setOpenModal = {openModal}>Fungi</HoverSpan> and <HoverSpan id = "animal_text" hover_id = "Animals" setHovered = {setHovered} setOpenModal = {openModal}>animals</HoverSpan>  are heterotrophs: they feed on other living organisms.
                </p>
            </div>
        case 5:
            return <div>
                <p>
                    A surprising amount of biomass is found in micro-organisms, which are microscopically small.
                </p>
            </div>
        case 6:
            return <div>
                <p>
                <HoverSpan id = "protists_text" hover_id = "Bacteria" setHovered = {setHovered} setOpenModal = {openModal}>Bacteria</HoverSpan> and  <HoverSpan id = "protists_text" hover_id = "Archaea" setHovered = {setHovered} setOpenModal = {openModal}>archaea</HoverSpan> are micro-organisms most of which are located in deep subsurface environments. 
                </p>
            </div>
        case 7:
            return <div>
                <p>
                <HoverSpan id = "protists_text" hover_id = "Protists" setHovered = {setHovered} setOpenModal = {openModal}>Protists</HoverSpan> are micro-organisms found in almost any environment that contains liquid water.
                </p>
            </div>

        case 8:
            return <div>
                <p>
                <HoverSpan id = "virus_text" hover_id = "Viruses" setHovered = {setHovered} setOpenModal = {openModal}>Viruses</HoverSpan> are made up of organic material but are technically not alive. <span id = "clickorhover"> Being tiny, they are abundant in many environments, despite having a small contribution to the total biomass.
                    </span>
                </p>
            </div>
        case 9:
            return <div>
                <p>
                All forms of life originated from the Last Universal Common Ancestor <HoverSpan id = "virus_text" hover_id = "LUCA" setHovered = {setHovered} setOpenModal = {openModal}> (LUCA)</HoverSpan> about <span className="nowrap">4 billion</span> years ago.
                </p> 
            </div>
        case 10:
            return <div>
                <p>
                <HoverSpan id = "animal_text" hover_id = "Animals" setHovered = {setHovered} setOpenModal = {openModal}>Animals</HoverSpan> are a diverse Kingdom.
                </p> 
            </div>
        case 11:
            return <div>
                <p>
                Animals are spread out across different environments on the earth.
                <br/>
                </p> 
            </div>
        case 12:
            return <div>
                <p>
                    Animals are mainly marine, dominated by  <HoverSpan id = "fish_text" hover_id = "Fish" setHovered = {setHovered} setOpenModal = {openModal}>fish</HoverSpan>, 
                    and   <HoverSpan id = "fish_text" hover_id = "Marine_Arthropods" setHovered = {setHovered} setOpenModal = {openModal}>marine arthropods</HoverSpan>.
                </p>
            </div>
        case 13:
            return <div>
                <p>
                We then find an abundance of life forms underground <span className="nowrap">(<HoverSpan id = "fish_text" hover_id = "Nematodes" setHovered = {setHovered} setOpenModal = {openModal}>nematodes</HoverSpan></span>, <HoverSpan id = "fish_text" hover_id = "Annelids" setHovered = {setHovered} setOpenModal = {openModal}>annelids </HoverSpan> and <HoverSpan id = "fish_text" hover_id = "Arthropods" setHovered = {setHovered} setOpenModal = {openModal}>arthropods</HoverSpan>).
                </p>
            </div>
        case 14:
            return <div>
                <p>
                <HoverSpan id = "fish_text" hover_id = "Arthropods" setHovered = {setHovered} setOpenModal = {openModal} >Arthropods</HoverSpan> contribute more than three times the amount of biomass of <HoverSpan id = "fish_text" hover_id = "Humans" setHovered = {setHovered} setOpenModal = {openModal}>humans</HoverSpan>.
                </p>
            </div>
        case 15:
            return <div>
                <p>
                <HoverSpan id = "fish_text" hover_id = "Wild_Mammals" setHovered = {setHovered} setOpenModal = {openModal}>Wild mammals</HoverSpan> and   <HoverSpan id = "fish_text" hover_id = "Wild_Birds" setHovered = {setHovered} setOpenModal = {openModal}>birds</HoverSpan> comprise only a tiny fraction, less than 1%, of the animal biomass. 
                </p>
            </div>
        case 16:
            return <div>
                <p>
                Today, <HoverSpan id = "fish_text" hover_id = "Humans" setHovered = {setHovered} setOpenModal = {openModal}>humans</HoverSpan> weigh about 10 times more than all <HoverSpan id = "fish_text" hover_id = "Wild_Mammals" setHovered = {setHovered} setOpenModal = {openModal}>wild mammals</HoverSpan>. 
                </p>
            </div>
        case 17:
            return <div>
                <p>
                To generate enough protein, humans have created <HoverSpan id = "fish_text" hover_id = "Livestock" setHovered = {setHovered} setOpenModal = {openModal}>livestock</HoverSpan> that now weighs almost twice the entire world population.
                </p>
            </div>
        case 18:
            return 
        case 19:
        case 22:
            return 
        case 23:
            return 
        case 24:
            return <div>
                <p>
                    <HoverSpan id = "plastic_text" hover_id = "Plastics" setHovered = {setHovered} setOpenModal = {openModal}>Plastics</HoverSpan> were developed in the early 1900's and have become a staple material in human production. 
                </p>
            </div>                       
        case 25:
            return <div>
                <p>
                    Much of human production, including that of cars, uses <HoverSpan id = "metal_text" hover_id = "Metals" setHovered = {setHovered} setOpenModal = {openModal}>Metals</HoverSpan>.
                </p>
            </div>
        case 26:
            return <div>
                <p>
                <HoverSpan id = "asphalt_text" hover_id = "Asphalt" setHovered = {setHovered} setOpenModal = {openModal}>Asphalt</HoverSpan> is the next heaviest artifical material. It is a petroleum based material used to develop roads.
                </p>
            </div>
        case 27:
            return <div>
                <p>
                <HoverSpan id = "brick_text" hover_id = "Bricks" setHovered = {setHovered} setOpenModal = {openModal}>Bricks</HoverSpan> have been used for thousands of years. Their mass is almost one thousand times that of all humans.
                </p>
            </div>
        case 28:
            return <div>
                <p>
                <HoverSpan id = "aggregate_text" hover_id = "Aggregates" setHovered = {setHovered} setOpenModal = {openModal}>Aggregates</HoverSpan> are materials used in construction.

                </p>
            </div>
        case 29:
            return <div>
                <p>
                <HoverSpan id = "concrete_text" hover_id = "Concrete" setHovered = {setHovered} setOpenModal = {openModal}>Concrete</HoverSpan> is the second most used substance in the world after water.

                </p>
            </div>
        case 30:
            return
        case 31:
            return 
}

}

const Caption = (props) => {
    return (
        <>
        <div className="ContentCaption">
            {getText(props.counter, props.setHovered, props.setOpenModal)}
        </div>
        </>

    );
};

export default Caption;
