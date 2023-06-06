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
            
            <Divider/>
            Images courtesy of Wikimedia Commons License
            <Divider/>
            © <a href="https://menard.pha.jhu.edu/">Ménard</a> and <a href = "https://nikitashtarkman.com/">Shtarkman </a>
            </p>

          }

          {
          showSegment == 2 && 
              <div>

                  <div class = "row">
                      <div class = "dropdown-item">

                        <img src='Posters/thumbnail.png'></img>
                          <div class = "download-click-section">
                            <div class = "row download-row vertical-row">
                              <a class = "col" href="Posters/Biomass_Poster.png" download target="_blank" rel="noopener noreferrer">medium (2k)</a>
                            </div>

                            <div class = "row download-row vertical-row">
                              <a class = "col"  href="Posters/Biomass_Poster.png" download target="_blank" rel="noopener noreferrer">high (4k)</a>
                            </div>

                            <div class = "row download-row vertical-row">
                              <a class = "col" href="Posters/Biomass_Poster.png" download target="_blank" rel="noopener noreferrer">very high (8k)</a>
                            </div>

                            <div class = "row download-row vertical-row">
                              <a class = "col" href="https://www.redbubble.com/i/poster/Map-of-the-Universe-by-scientific-viz/132238837.G7H47" target="_blank" rel="noopener noreferrer">                        
                                order a poster
                              </a>
                            </div>
                          </div>
                        </div>
                  </div>
              </div>
                
          }
      </div>
      }

      <ul>
      <li onMouseEnter={() => {handleTabHover(1)}} >Credits</li>

        <li onMouseEnter={() => {handleTabHover(0)}} >Info</li>


        <li onMouseEnter={() => {handleTabHover(2)}} >Poster</li>

      </ul>


    </div>
    )
} 

export default TabExampleBasic
