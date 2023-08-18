import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import LoremTäyteteksti from './LoremTäyteteksti'

function Etusivu() {
    return <>
    <Row>
        <Col sm="3">
            <Image src="juusto.png" thumbnail style={{backgroundColor: 'goldenrod'}}/>
        </Col>
        <Col sm="6">
            <h1>Juustopojat Oy - Halpaa, laadukasta ja edullista juustoa jo 
            vuodesta 1997</h1>
            <LoremTäyteteksti />
        </Col>

        <Col lg="3">
        [Mainokset tähän]
        </Col>
    </Row></>
}

export default Etusivu