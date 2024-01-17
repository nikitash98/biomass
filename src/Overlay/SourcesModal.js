import React, { useRef } from 'react';
import { Grid, Modal, Button, Header, Icon, Divider, Form, Radio } from 'semantic-ui-react'
function SourcesModal(props) {
    return <Modal
    basic
    onClose={() => props.setsourcesModal(false)}
    onOpen={() => props.setsourcesModal(true)}
    open={props.sourcesModal}
    size='small'
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
                        <a href="https://www.pnas.org/doi/10.1073/pnas.1711842115">
                            The biomass distribution on Earths
                            Bar-On, Y.M., Phillips R., & Milo, R.
                            Proceedings of the National Academy of Sciences.
                        </a>

                    </Grid.Column>
                    <Grid.Column>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/33299177/">
                            Global human-made mass exceeds all living biomass
                            Elhacham E, Ben-Uri L, Grozovski J, Bar-On YM, Milo R.
                            Nature. 2020
                        </a>

                    </Grid.Column>
                    <Grid.Column>
                        <a href="https://ourworldindata.org/plastic-pollution">
                            Hannah Ritchie and Max Roser (2018)
                            "Plastic Pollution".
                            Published online at OurWorldInData.org.
                        </a>

                    </Grid.Column>

                </Grid.Row>
            </Grid>
        </div>
    </Modal.Content>
</Modal>

}

export default SourcesModal