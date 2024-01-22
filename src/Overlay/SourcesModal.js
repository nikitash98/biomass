import React, { useRef } from 'react';
import { Grid, Modal, Button, Header, Icon, Divider, Form, Radio } from 'semantic-ui-react'
function SourcesModal(props) {
    return <Modal
    basic
    onClose={() => props.setsourcesModal(false)}
    onOpen={() => props.setsourcesModal(true)}
    open={props.sourcesModal}
    size='medium'
    >
    <Modal.Content>
        <div className = "imageCreditContent">
            <div className='small_type'>
                learn more
            </div>
            <Divider/>
            <Grid divided>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <a href="https://www.pnas.org/doi/10.1073/pnas.1711842115" target ="_blank">
                            The biomass distribution on Earth
                            <br/>
                            Bar-On, Y.M., Phillips R., & Milo, R.
                            <br/>
                            Proceedings of the National Academy of Sciences.
                        </a>

                    </Grid.Column>
                    <Grid.Column>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/33299177/" target ="_blank">
                            Global human-made mass exceeds all living biomass
                            <br/>
                            Elhacham E, Ben-Uri L, Grozovski J, Bar-On YM, Milo R.
                            <br/>
                            Nature. 2020
                        </a>

                    </Grid.Column>
                    <Grid.Column>
                        <a href="https://ourworldindata.org/plastic-pollution" target ="_blank">
                            Hannah Ritchie and Max Roser (2018)
                            <br/>

                            "Plastic Pollution".
                            <br/>
                            Published online at OurWorldInData.org.
                        </a>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider/>
            <div className='small_type'>
                explore very large scales: <a href = "https://mapoftheuniverse.net/" target ="_blank"> Map of the Universe</a>
            </div>
        </div>
    </Modal.Content>
</Modal>

}

export default SourcesModal