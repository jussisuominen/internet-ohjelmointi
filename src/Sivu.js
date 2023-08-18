import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function Sivu({otsikko, sisältö}) {
    return <>
    <Row>
        <Col sm="3">
            <Image src="juusto.png" thumbnail style={{backgroundColor: 'goldenrod'}}/>
        </Col>
        <Col sm="6">
            <h1>{otsikko}</h1>
            {sisältö}
        </Col>

        <Col lg="3">
        [Mainokset tähän]
        </Col>
    </Row>
    </>
}

export default Sivu