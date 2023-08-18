import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Palautelomake() {
    return (
        <>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nimi</Form.Label>
            <Form.Control type="input" placeholder="Syötä nimesi tähän" 
            className='bg-warning'/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Sähköpostiosoite</Form.Label>
            <Form.Control type="email" placeholder="Anna sähköpostiosoitteesi" 
            className='bg-warning'/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Palautteesi</Form.Label>
            <Form.Control as="textarea" rows={5} className='bg-warning'/>
          </Form.Group>

          <Button variant="warning" type="submit">
            Lähetä
          </Button>
        </Form>
        <hr />
        </>
      )
}

export default Palautelomake