import React, { useState } from 'react'
import { Tab, Button, Grid, Divider } from 'semantic-ui-react'
import "./InfoTabs.css"

const panes = [
  {
    menuItem: 'Info', render: () => <Tab.Pane onMouseEnter={() => { }}>
      <p>These blocks represent the "dry" weight of each division. <br />
        The units are in gigatons of carbon – abbreviated Gt C.</p>
    </Tab.Pane>
  },
  {
    menuItem: 'Credits', render: () => <Tab.Pane>

      <div className="copyrights_text">
        Data from Bar-On, Y.M., Phillips R., & Milo, R. The biomass distribution on Earth.(2018),
        <br />
        Proceedings of the National Academy of Sciences. <br />© Ménard and Shtarkman
      </div>
    </Tab.Pane>
  },
  {
    menuItem: 'Poster', render: () => <Tab.Pane>
      <Button >4k</Button>
      <Button >2k</Button>
      <Button >Mobile</Button>
      <div>
        ABC
      </div>
    </Tab.Pane>
  },
]

const TabExampleBasic = (props) => {
  const [showSegment, setShowSegment] = useState(null);

  const handleTabHover = (value) => {
    setShowSegment(value);
  }

  const handleTabLeave = () => {
    setShowSegment(null);
  }
  //data from Bar-On, Phillips, Milo, PNAS (2018) Elhacham, Ben-Uri, Grozovski, Bar-On, Milo, Nature (2020) Ritchie, Roser,  ourworldindata.org (2018)

  return (
    <div className='tabs' onMouseLeave={handleTabLeave}>
      {showSegment != null &&

        <div className='segment' onMouseLeave={handleTabLeave}>
          {
            showSegment == 1 &&
            <div className='credit_drop_up'>


              <p style={{ textAlign: "left" }} className='small_type'>
               <Grid >
                  <Grid.Row columns={2}>
                    <Grid.Column  width={10}>
                    Designed by <a href="https://menard.pha.jhu.edu/" target="_blank">Ménard</a> & <a href="https://nikitashtarkman.com/" target="_blank">Shtarkman </a>

                    </Grid.Column>
                    <Grid.Column style={{ textAlign: "right" }} width={6}>
                    <div className='imageCredit' onClick={() => { props.setimageCreditModal(true) }}>Image Credits</div>

                    </Grid.Column>
                  </Grid.Row>
                </Grid>

                <Divider/>
                <ul>
                  <li> 
                     <a href="https://www.pnas.org/doi/10.1073/pnas.1711842115">
                      Bar-On, Phillips, Milo, PNAS (2018)
                    </a>
                  </li>
                  <li>
                  <a href="https://www.pnas.org/doi/10.1073/pnas.1711842115">
                  Elhacham, Ben-Uri, Grozovski, Bar-On, Milo, Nature (2020)
                  </a>
                  </li>
                  <li>
                  <a href="https://ourworldindata.org/plastic-pollution">
                  Ritchie, Roser, ourworldindata.org (2018)
                  </a>
                  </li>
                </ul>
              </p>
            </div>
          }

          {
            showSegment == 2 &&

            <div className='download_drop_up'>


              <div class="poster-download">
                <img src="Posters/thumbs/bio_thumb.jpg" />

                <div class="poster-download-section">
                  <div class="row download-row vertical-row">
                    <a class="col" href="https://www.dropbox.com/scl/fi/c243ftk5ar00eqrgrm3ot/BIO_2K_ALT.png?rlkey=x13h5qvs61qpauha124an7svu&dl=1" download target="_blank" rel="noopener noreferrer">screen (2k)</a>
                  </div>
                  <div class="row download-row vertical-row">
                    <a class="col" href="https://www.dropbox.com/scl/fi/76wbf0pq9dgpuwh7z7mli/BIO_4k_8k.png?rlkey=9zo0c74tc44mm7gn1e9kama55&dl=1" download target="_blank" rel="noopener noreferrer">high res (4k)</a>
                  </div>
                  <div class="row download-row vertical-row">
                    <a class="col" href="https://www.dropbox.com/scl/fi/76wbf0pq9dgpuwh7z7mli/BIO_4k_8k.png?rlkey=9zo0c74tc44mm7gn1e9kama55&dl=1" download target="_blank" rel="noopener noreferrer">print (8k)</a>
                  </div>
                  <div class="row download-row vertical-row">
                    <a class="col" href="https://www.redbubble.com/people/scientific-viz/shop" download target="_blank" rel="noopener noreferrer">order a poster</a>
                  </div>

                </div>
              </div>
              <div class="poster-download">

                <img src="Posters/thumbs/techno_thumb.jpg" />
                <div class="poster-download-section">

                  <div class="row download-row vertical-row">
                    <a class="col" href="https://www.dropbox.com/scl/fi/z09upomy8yd2tzpvwpctq/TECHO_2k.png?rlkey=4362iu7y0qeodpzm29p8ddlld&dl=1" download target="_blank" rel="noopener noreferrer">download</a>
                  </div>

                  <div class="row download-row vertical-row">
                    <a class="col" href="https://www.dropbox.com/scl/fi/m1fdovybwyl13ou8sqwo2/TECHNO_PRINT.png?rlkey=f2o3vl0na84eqf5uvhvqk92ch&dl=1" download target="_blank" rel="noopener noreferrer">high res (4k)</a>
                  </div>
                  <div class="row download-row vertical-row">
                    <a class="col" href="https://www.dropbox.com/scl/fi/m1fdovybwyl13ou8sqwo2/TECHNO_PRINT.png?rlkey=f2o3vl0na84eqf5uvhvqk92ch&dl=1" download target="_blank" rel="noopener noreferrer">print (8k)</a>
                  </div>
                  <div class="row download-row vertical-row">
                    <a class="col" href="https://www.redbubble.com/people/scientific-viz/shop" download target="_blank" rel="noopener noreferrer">order a poster</a>
                  </div>

                </div>
              </div>

              <div class="poster-download">

                <img src="Posters/thumbs/bio_techno_thumb.jpg" />

                <div class="poster-download-section">

                  <div class="row download-row vertical-row">
                    <a class="col" href="https://www.dropbox.com/scl/fi/e12d1j974jg3leil87lwx/BIO_TECHNO_2K.png?rlkey=7zlslpu6i6xhvrpn0tnvehij3&dl=1" download target="_blank" rel="noopener noreferrer">download</a>
                  </div>
                  <div class="row download-row vertical-row">
                    <a class="col" href="https://www.dropbox.com/scl/fi/tmyntud56hzbsvhittnvk/BIO_TECHNO_PRINT.png?rlkey=ckrc8tw0njx2qkm6zxsl2181o&dl=1" download target="_blank" rel="noopener noreferrer">high res (4k)</a>
                  </div>
                  <div class="row download-row vertical-row">
                    <a class="col" href="https://www.dropbox.com/scl/fi/tmyntud56hzbsvhittnvk/BIO_TECHNO_PRINT.png?rlkey=ckrc8tw0njx2qkm6zxsl2181o&dl=1" download target="_blank" rel="noopener noreferrer">print (8k)</a>
                  </div>
                  <div class="row download-row vertical-row">
                    <a class="col" href="https://www.redbubble.com/people/scientific-viz/shop" download target="_blank" rel="noopener noreferrer">order a poster</a>
                  </div>

                </div>
              </div>



            </div>
          }

        </div>
      }

      <div className='infoTabs ' style={{ right: "0%" }}>
        <div onMouseEnter={() => { handleTabHover(1) }} className={showSegment == 1 ? 'small_type hovered_list' : 'small_type '}> credits</div>
        <div onMouseEnter={() => { handleTabHover(2) }} className={showSegment == 2 ? 'small_type hovered_list' : 'small_type '}> posters</div>
      </div>
    </div>
  )
}

export default TabExampleBasic
