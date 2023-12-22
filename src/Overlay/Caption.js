import ReactSlider from "react-slider";
import data from "../slides.json"
import { Grid, Divider, Button, Icon} from 'semantic-ui-react'
import "./Caption.css"
const HoverSpan = (props) => {
    return(
        <span id={props.id} className="hoverText" onPointerOver={() => {props.setHovered([props.hover_id])}} onPointerOut={()=>{props.setHovered([])}} onClick={() => {props.setOpenModal(true); props.setHovered(props.hover_id);}}>{props.children}</span>
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
                <h3>
                    All life on earth is captured in this image. <br/> <br/>
                    These cubes represent the biomass of the six biological kingdoms. They show the <span className="extra_info"> "wet" weight </span>  of each division.
                    <div className="hidden_info">
                        <Divider/>
                        Wet weight is an estimation of the total weight, including water weight.
                    </div>
                </h3>
            </div>
        case 3:
            return <div>
                <h3>
                    Most of the biomass is found in <HoverSpan id = "plant_text" hover_id = "Plants" setHovered = {setHovered} setOpenModal = {openModal}>plants</HoverSpan>. 
                </h3>
            </div>
        case 4:
            return <div>
                <h3>
                <HoverSpan id = "fungi_text" hover_id = "Fungi" setHovered = {setHovered} setOpenModal = {openModal}>Fungi</HoverSpan> and <HoverSpan id = "animal_text" hover_id = "Animals" setHovered = {setHovered} setOpenModal = {openModal}>animals</HoverSpan>  are heterotrophs: they feed on other living organisms.
                </h3>
            </div>
        case 5:
            return <div>
                <h3>
                    A surprising amount of biomass is found in micro-organisms, which are microscopically small.
                </h3>
            </div>
        case 6:
            return <div>
                <h3>
                <HoverSpan id = "protists_text" hover_id = "Bacteria" setHovered = {setHovered} setOpenModal = {openModal}>Bacteria</HoverSpan> and  <HoverSpan id = "protists_text" hover_id = "Archaea" setHovered = {setHovered} setOpenModal = {openModal}>archaea</HoverSpan> are micro-organisms most of which are located in deep subsurface environments. 
                </h3>
            </div>
        case 7:
            return <div>
                <h3>
                <HoverSpan id = "protists_text" hover_id = "Protists" setHovered = {setHovered} setOpenModal = {openModal}>Protists</HoverSpan> are micro-organisms found in almost any environment that contains liquid water.
                </h3>
            </div>

        case 8:
            return <div>
                <h3>
                <HoverSpan id = "virus_text" hover_id = "Viruses" setHovered = {setHovered} setOpenModal = {openModal}>Viruses</HoverSpan> are made up of organic material but are technically not alive. Being tiny, they are abundant in many environments, despite having a small contribution to the total biomass.
                </h3>
            </div>
        case 9:
            return <div>
                <h3>
                All forms of life originated from the <HoverSpan id = "virus_text" hover_id = "LUCA" setHovered = {setHovered} setOpenModal = {openModal}>last universal common ancestor (LUCA),</HoverSpan> about 4 billions years ago.
                </h3> 
            </div>
        case 10:
            return <div>
                <h3>
                <HoverSpan id = "animal_text" hover_id = "Animals" setHovered = {setHovered} setOpenModal = {openModal}>Animals</HoverSpan> are a diverse Kingdom.
                </h3> 
            </div>
        case 11:
            return <div>
                <h3>
                Animals are spread out across different environments on the earth.
                <br/>
                </h3> 
            </div>
        case 12:
            return <div>
                <h3>
                    Animals are mainly marine, dominated by  <HoverSpan id = "fish_text" hover_id = "Fish" setHovered = {setHovered} setOpenModal = {openModal}>fish</HoverSpan>, 
                    and   <HoverSpan id = "fish_text" hover_id = "Marine_Arthropods" setHovered = {setHovered} setOpenModal = {openModal}>marine arthropods</HoverSpan>.
                </h3>
            </div>
        case 13:
            return <div>
                <h3>
                We then find an abundance of life forms  underground <HoverSpan id = "fish_text" hover_id = "Nematodes" setHovered = {setHovered} setOpenModal = {openModal}>(nematodes</HoverSpan>, <HoverSpan id = "fish_text" hover_id = "Annelids" setHovered = {setHovered} setOpenModal = {openModal}>annelids </HoverSpan> and <HoverSpan id = "fish_text" hover_id = "Arthropods" setHovered = {setHovered} setOpenModal = {openModal}>arthropods)</HoverSpan>.
                </h3>
            </div>
        case 14:
            return <div>
                <h3>
                <HoverSpan id = "fish_text" hover_id = "Arthropods" setHovered = {setHovered} setOpenModal = {openModal} >Arthropods</HoverSpan> contribute more than three times the amount of biomass  <HoverSpan id = "fish_text" hover_id = "Humans" setHovered = {setHovered} setOpenModal = {openModal}>humans</HoverSpan>.
                </h3>
            </div>
        case 15:
            return <div>
                <h3>
                <HoverSpan id = "fish_text" hover_id = "Wild_Mammals" setHovered = {setHovered} setOpenModal = {openModal}>Wild mammals</HoverSpan> and   <HoverSpan id = "fish_text" hover_id = "Wild Birds" setHovered = {setHovered} setOpenModal = {openModal}>birds</HoverSpan> comprise only a tiny fraction, smaller than 1%, of the animal biomass. 
                </h3>
            </div>
        case 16:
            return <div>
                <h3>
                Today, <HoverSpan id = "fish_text" hover_id = "Humans" setHovered = {setHovered}>humans</HoverSpan> weigh about 10 times more than all <HoverSpan id = "fish_text" hover_id = "Wild Mammals" setHovered = {setHovered}>wild mammals</HoverSpan>. 
                </h3>
            </div>
        case 17:
            return <div>
                <h3>
                To generate enough proteins, humans have created <HoverSpan id = "fish_text" hover_id = "Livestock" setHovered = {setHovered} setOpenModal = {openModal}>livestock</HoverSpan>  that now weighs almost twice the entire world population.
                </h3>
            </div>
        case 18:
            return 
        case 19:

        case 22:
            return <div>

            </div>

        case 23:
            return <div>
            </div>
        case 24:
            return <div>
                <h3>
                    <HoverSpan id = "plastic_text" hover_id = "Plastics" setHovered = {setHovered} setOpenModal = {openModal}>Plastics</HoverSpan> were developed in the early 1900's and have become a staple material in human production. 
                </h3>
            </div>                       
        case 25:
            return <div>
                <h3>
                    Much of human production, including that of cars, uses <HoverSpan id = "metal_text" hover_id = "Metals" setHovered = {setHovered} setOpenModal = {openModal}>Metals</HoverSpan>.
                </h3>
            </div>
        case 26:
            return <div>
                <h3>
                <HoverSpan id = "asphalt_text" hover_id = "Asphalt" setHovered = {setHovered} setOpenModal = {openModal}>Asphalt</HoverSpan> is the next heaviest artifical material. It is a petroleum based material used to develop roads.
                </h3>
            </div>
        case 27:
            return <div>
                <h3>
                <HoverSpan id = "brick_text" hover_id = "Bricks" setHovered = {setHovered} setOpenModal = {openModal}>Bricks</HoverSpan> have been used for thousands of years. They now outweigh the human mass by 700%.
                </h3>
            </div>
        case 28:
            return <div>
                <h3>
                <HoverSpan id = "aggregate_text" hover_id = "Aggregates" setHovered = {setHovered} setOpenModal = {openModal}>Aggregates</HoverSpan> are materials used in construction.

                </h3>
            </div>
        case 29:
            return <div>
                <h3>
                <HoverSpan id = "concrete_text" hover_id = "Concrete" setHovered = {setHovered} setOpenModal = {openModal}>Concrete</HoverSpan> is the second most used substance in the world after water.

                </h3>
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
        {/*
        {props.counter < 12 && (
            <div className="caption_divider"></div>

        )

        }
        */}


        <div className="ContentCaption">
            {getText(props.counter, props.setHovered, props.setOpenModal)}
        </div>
        </>

    );
};

export default Caption;


                {/*
                <Divider/>

                <div>
                    <a id = "download_button" href = "Posters/Biomass_Poster.png" target="_blank" download>Click to download a poster</a>
                </div>
                        case 24:
            return <div>
                <h3>
                    In the past 50 years, the rate of technomass production has accelerated to an exponential pace.
                </h3>
            </div>    
        case 2:
            return <div>
                <h3>
                    There are billions upon billions of animals in the world. <br/>
                    <Divider/>
                    {/*
                    <div className="instruction">
                        Click the container to close the box.
                    </div>

</h3>
            </div>

                 */}