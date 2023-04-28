import React, {useState} from 'react'
import { Tab, Button, Grid } from 'semantic-ui-react'
import "./InfoTabs.css"

const panes = [
  { menuItem: 'Info', render: () => <Tab.Pane onMouseEnter = {() => {console.log("ABC")}}>
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
    <Button primary>4k</Button>
    <Button primary>2k</Button>
    <Button primary>Mobile</Button>
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
              <p>These blocks represent the "dry" weight of each division. <br/>
              The units are in gigatons of carbon – abbreviated Gt C.</p>
          }
          {
            showSegment == 1 && <p>

            Data from Bar-On, Y.M., Phillips R., & Milo, R. The biomass distribution on Earth.(2018), 
            <br/>
            Proceedings of the National Academy of Sciences. <br/>© <a href="https://menard.pha.jhu.edu/">Ménard</a> and <a href = "https://nikitashtarkman.com/">Shtarkman </a>
            </p>

          }

          {
          showSegment == 2 && 
              <div>
                  <a className='download_button' href = "Posters/Biomass_Poster.png" target = "_blank">2K</a>
                  <a className='download_button' href = "Posters/Biomass_Poster.png" target = "_blank">4k</a>
                  <a className='download_button' href = "Posters/Biomass_Poster.png" target = "_blank">Print</a>

                </div>
          }
      </div>
      }

      <ul>
        <li onMouseEnter={() => {handleTabHover(0)}} >Info</li>
        <li onMouseEnter={() => {handleTabHover(1)}} >Credits</li>
        <li onMouseEnter={() => {handleTabHover(2)}} >Poster</li>
      </ul>


    </div>
    )
} 

export default TabExampleBasic
