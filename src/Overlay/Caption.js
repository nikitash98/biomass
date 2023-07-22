import ReactSlider from "react-slider";
import data from "../slides.json"
import { Grid, Divider, Button, Icon} from 'semantic-ui-react'
import "./Caption.css"
const HoverSpan = (props) => {
    return(
        <span id={props.id} className="hoverText" onPointerOver={() => {props.setHovered(props.hover_id)}} onPointerOut={()=>{props.setHovered([])}}>{props.children}</span>
    )
}


function getText(sel, setHovered){
    switch(sel){
        case 0:
            return <div>
                <h3>

                </h3>
                <h3 className ="start_caption">
                </h3>
            </div>
        case 1:
            return <div>
                <h3>
                    Let's put all animals into a box.
                </h3>
            </div>


        case 2:
            return <div>
                <h3>
                    These cubes represent the biomass of the six biological kingdoms. They show the <span className="extra_info"> "dry" weight </span>  of each division.
                    <div className="hidden_info">
                        <Divider/>
                        Dry weight will provide a precise measurement of biomass eliminating fluctuations caused by water content.
                    </div>
                </h3>
            </div>
        case 3:
            return <div>
                <h3>
                    Most of the biomass is found in <HoverSpan id = "plant_text" hover_id = "Plants" setHovered = {setHovered}>plants</HoverSpan>. 
                </h3>
            </div>
        case 4:
            return <div>
                <h3>
                <HoverSpan id = "fungi_text" hover_id = "Fungi" setHovered = {setHovered}>Fungi</HoverSpan> and <HoverSpan id = "animal_text" hover_id = "Animals" setHovered = {setHovered}>animals</HoverSpan>  are heterotrophs: they feed on other living organisms.
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
                <HoverSpan id = "protists_text" hover_id = "Bacteria" setHovered = {setHovered}>Bacteria</HoverSpan> and  <HoverSpan id = "protists_text" hover_id = "Archaea" setHovered = {setHovered}>archaea</HoverSpan> are micro-organisms most of which are located in deep subsurface environments. 
                </h3>
            </div>
        case 7:
            return <div>
                <h3>
                <HoverSpan id = "protists_text" hover_id = "Protists" setHovered = {setHovered}>Protists</HoverSpan> are micro-organisms found in almost any environment that contains liquid water.
                </h3>
            </div>

        case 8:
            return <div>
                <h3>
                <HoverSpan id = "virus_text" hover_id = "Viruses" setHovered = {setHovered}>Viruses</HoverSpan> are made up of organic material but are technically not alive. Being tiny, they are abundant in many environments, despite having a small contribution to the total biomass.
                </h3>
            </div>
        case 9:
            return <div>
                <h3>
                All forms of life originated from the <HoverSpan id = "virus_text" hover_id = "LUCA" setHovered = {setHovered}>last universal common ancestor (LUCA),</HoverSpan> about 4 billions years ago.
                </h3> 
            </div>
        case 10:
            return <div>
                <h3>
                <HoverSpan id = "animal_text" hover_id = "Animals" setHovered = {setHovered}>Animals</HoverSpan> are a diverse Kingdom.
                </h3> 
            </div>
        case 11:
            return <div>
                <h3>
                Animals are spread out across different environments on the earth.
                <br/>
                {/* 
                <div>
                    <Divider/>
                    <a id = "download_button" href = "Posters/Biomass_Poster.png" target="_blank" download>Click to download a poster</a>
                </div>
                                <Divider/>
                <div className="instruction">
                        Click the Animals container to explore.
                    </div>

                */}
                </h3> 
            </div>
        case 12:
            return <div>
                <h3>
                    Animals are mainly marine, dominated by  <HoverSpan id = "fish_text" hover_id = "Fish" setHovered = {setHovered}>fish</HoverSpan>, 
                    and   <HoverSpan id = "fish_text" hover_id = "Marine Arthropods" setHovered = {setHovered}>marine arthropods</HoverSpan>.
                </h3>
            </div>
        case 13:
            return <div>
                <h3>
                We then find an abundance of life forms  underground (<HoverSpan id = "fish_text" hover_id = "Nematodes" setHovered = {setHovered}>nematodes</HoverSpan>, <HoverSpan id = "fish_text" hover_id = "Annelids" setHovered = {setHovered}>annelids </HoverSpan> and <HoverSpan id = "fish_text" hover_id = "Arthropods" setHovered = {setHovered}>arthropods</HoverSpan>).
                </h3>
            </div>
        case 14:
            return <div>
                <h3>
                <HoverSpan id = "fish_text" hover_id = "Arthropods" setHovered = {setHovered}>Arthropods</HoverSpan> contribute more than three times the amount of biomass  <HoverSpan id = "fish_text" hover_id = "Humans" setHovered = {setHovered}>humans</HoverSpan>.
                </h3>
            </div>
        case 15:
            return <div>
                <h3>
                <HoverSpan id = "fish_text" hover_id = "Wild Mammals" setHovered = {setHovered}>Wild mammals</HoverSpan> and   <HoverSpan id = "fish_text" hover_id = "Wild Birds" setHovered = {setHovered}>birds</HoverSpan> comprise only a tiny fraction, smaller than 1%, of the animal biomass. 
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
                To generate enough proteins, humans have created <HoverSpan id = "fish_text" hover_id = "Livestock" setHovered = {setHovered}>livestock</HoverSpan>  that now weighs almost twice the entire world population.
                </h3>
            </div>
        case 18:
            return <div>
            </div>
        case 19:
            return <div>
                <h3>
                </h3>
            </div>
        case 22:
            return <div>
                <h3>
                    In creating structures, and cars, humans have created gigatons of artificial materials. 
                </h3>
            </div>

        case 23:
            return <div>
                <h3>
                    In creating structures, and cars, humans have created gigatons of artificial materials. 
                </h3>
            </div>
        case 24:
            return <div>
                <h3>
                    <HoverSpan id = "plastic_text" hover_id = "Plastics" setHovered = {setHovered}>Plastics</HoverSpan> were developed in the early 1900's and have become a staple material in human production. 
                </h3>
            </div>                       
        case 25:
            return <div>
                <h3>
                    Much of human production, including that of cars, uses <HoverSpan id = "metal_text" hover_id = "Metals" setHovered = {setHovered}>Metals</HoverSpan>.
                </h3>
            </div>
        case 26:
            return <div>
                <h3>
                <HoverSpan id = "asphalt_text" hover_id = "Asphalt" setHovered = {setHovered}>Asphalt</HoverSpan> is the next heaviest artifical material. It is a petroleum based material used to develop roads.
                </h3>
            </div>
        case 27:
            return <div>
                <h3>
                <HoverSpan id = "brick_text" hover_id = "Bricks" setHovered = {setHovered}>Bricks</HoverSpan> have been used for thousands of years. They now outweigh the human mass by 700%.
                </h3>
            </div>
        case 28:
            return <div>
                <h3>
                <HoverSpan id = "aggregate_text" hover_id = "Aggregates" setHovered = {setHovered}>Aggregates</HoverSpan> are materials used in construction.

                </h3>
            </div>
        case 29:
            return <div>
                <h3>
                <HoverSpan id = "concrete_text" hover_id = "Concrete" setHovered = {setHovered}>Concrete</HoverSpan> is the second most used substance in the world after water.

                </h3>
            </div>
        case 30:
            return <div>
                <h3>
                    The mass of man-made structures now outweighs the dry-mass of the entire living world.
                </h3>

            </div>
        case 31:
            return <div>
                <h3>

                </h3>
            </div>
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
            <h3>
            {getText(props.counter, props.setHovered)}
            </h3>

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