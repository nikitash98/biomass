import React, {useState} from 'react'
import { Tab, Button, Grid, Divider } from 'semantic-ui-react'
import "./InfoTabs.css"

const panes = [
  { menuItem: 'Info', render: () => <Tab.Pane onMouseEnter = {() => {}}>
    <p>These blocks represent the "dry" weight of each division. <br/>
  The units are in gigatons of carbon – abbreviated Gt C.</p>
</Tab.Pane> },
  { menuItem: 'Credits', render: () => <Tab.Pane>
    
    <div className = "copyrights_text">
        Data from Bar-On, Y.M., Phillips R., & Milo, R. The biomass distribution on Earth.(2018), 
    <br/> 
        Proceedings of the National Academy of Sciences. <br/>© Ménard and Shtarkman
    </div>
  </Tab.Pane> },
  { menuItem: 'Poster', render: () => <Tab.Pane>
    <Button >4k</Button>
    <Button >2k</Button>
    <Button >Mobile</Button>
    <div>
      ABC
    </div>
  </Tab.Pane> },
]

const TabExampleBasic = () => {
  const [showSegment, setShowSegment] = useState(null);

  const handleTabHover = (value) => {

    setShowSegment(value);
  }

  const handleTabLeave = () => {
    setShowSegment(null);
  }

  return(
    <div className='tabs'  onMouseLeave = {handleTabLeave}>
      { showSegment != null &&

      <div className='segment' onMouseLeave={handleTabLeave}>
          {
          showSegment == 0 && 
              <p className='info'>These blocks represent the "dry" weight of each division. <br/>
              The units are in gigatons of carbon – abbreviated Gt C.</p>
          }
          {
            showSegment == 1 && <p style={{textAlign: "right"}}>

            Data from:             <a href = "https://www.pnas.org/doi/10.1073/pnas.1711842115">
            Bar-On, Y.M., Phillips R., & Milo, R. The biomass distribution on Earth.(2018), 
            <br/>

            Proceedings of the National Academy of Sciences.
            </a>
            <br/>
            <br/>

            <a href = "https://www.pnas.org/doi/10.1073/pnas.1711842115">
            Elhacham E, Ben-Uri L, Grozovski J, Bar-On YM, Milo R. 
            Global human-made mass exceeds all living biomass. 
            <br/>

            Nature. 2020
                        </a>
            
            <Divider/>
            Images courtesy of Wikimedia Commons License
            <Divider/>
            © <a href="https://menard.pha.jhu.edu/">Ménard</a> and <a href = "https://nikitashtarkman.com/">Shtarkman </a>
            </p>

          }

          {
          showSegment == 2 && 
              <div>
<Grid className='endgrid'>
                <Grid.Row columns={2}>
                    <Grid.Column >
                        
                        <div class = "poster-download">
                            <img src="Posters/Biotech0.jpg" />
                            <div class = "poster-download-section">
                                <div class = "row download-row vertical-row">
                                <a class = "col" href="https://www.dropbox.com/scl/fi/4dw6zo2pmvl0ecu5qchc8/Biotech0.jpg?dl=1&rlkey=s1bbdkniye3sn0vmcw5v0eukb?dl=1" download target="_blank" rel="noopener noreferrer">download</a>
                                </div>
                                {/* 

                                <div class = "row download-row vertical-row">
                                <a class = "col"  href="https://menard.pha.jhu.edu/MapoftheUniverse/Images/Deliverables/Files/MapoftheUniverse-multiscale-4k.png" download target="_blank" rel="noopener noreferrer">high (4k)</a>
                                </div>
                                <div class = "row download-row vertical-row">
                                <a class = "col" href="https://menard.pha.jhu.edu/MapoftheUniverse/Images/Deliverables/Files/MapoftheUniverse-multiscale-8k.png" download target="_blank" rel="noopener noreferrer">very high (8k)</a>
                                </div>
                                <div class = "row download-row vertical-row">
                                <a class = "col" href="https://www.redbubble.com/i/poster/Map-of-the-Universe-3-zoom-levels-by-scientific-viz/134357219.G7H47" target="_blank" rel="noopener noreferrer">                        
                                    order a poster
                                </a>
                                </div>
                                */}

                            </div>
                        </div>

                     </Grid.Column>
                    <Grid.Column >


                    <div class = "poster-download">

                            <img src="Posters/Biotech1.jpg" />
                            <div class = "poster-download-section">

                                <div class = "row download-row vertical-row">
                                <a class = "col" href="https://www.dropbox.com/scl/fi/d0o2cahrsdwk4oon1pyll/Biotech1.jpg?dl=1&rlkey=7j5pbir30vd7g26clwhtkm0ao" download target="_blank" rel="noopener noreferrer">download</a>
                                </div>
                                {/* 

                                <div class = "row download-row vertical-row">
                                <a class = "col"  href="https://menard.pha.jhu.edu/MapoftheUniverse/Images/Deliverables/Files/MapoftheUniverse-multiscale-4k.png" download target="_blank" rel="noopener noreferrer">high (4k)</a>
                                </div>
                                <div class = "row download-row vertical-row">
                                <a class = "col" href="https://menard.pha.jhu.edu/MapoftheUniverse/Images/Deliverables/Files/MapoftheUniverse-multiscale-8k.png" download target="_blank" rel="noopener noreferrer">very high (8k)</a>
                                </div>
                                <div class = "row download-row vertical-row">
                                <a class = "col" href="https://www.redbubble.com/i/poster/Map-of-the-Universe-3-zoom-levels-by-scientific-viz/134357219.G7H47" target="_blank" rel="noopener noreferrer">                        
                                    order a poster
                                </a>
                                </div>
                                */}

                            </div>
                        </div>

                    </Grid.Column >
                    <Grid.Column >


                    <div class = "poster-download">

                            <img src="Posters/Biotech4.jpg" />
                            <div class = "poster-download-section">

                                <div class = "row download-row vertical-row">
                                <a class = "col" href="https://www.dropbox.com/scl/fi/t7lfvchnm3ybnc0mbec5b/Biotech4.jpg?dl=1&rlkey=wgochfw6varii01dwitnmgnct" download target="_blank" rel="noopener noreferrer">download</a>
                                </div>
                                
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
              </div>
                
          }
      </div>
      }

      <ul>
      <li onMouseEnter={() => {handleTabHover(1)}} >Credits</li>



        <li onMouseEnter={() => {handleTabHover(2)}} >Poster</li>

      </ul>


    </div>
    )
} 

export default TabExampleBasic
