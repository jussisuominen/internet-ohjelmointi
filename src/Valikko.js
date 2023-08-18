import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function Valikko({sivut, nykyinenSivu, vaihdaSivuaFunktio}) {
    const [expanded, setExpanded] = useState(false)

    function valitse(valinta) {
        setExpanded(false)
        vaihdaSivuaFunktio(valinta)
    }

    let valinnat = []

    console.log(nykyinenSivu)

    for(let sivu in sivut) {
        valinnat.push(
            <Nav.Link onClick={() => valitse(sivu)} href="#etusivu" key={sivu}>
                <Button style={{
                    background: nykyinenSivu === sivut[sivu] ? 'goldenrod' : '#F5E1A3',
                    borderColor: '#BD8437',
                    color: '#222'}}
            >
                {sivut[sivu]['valikkovalinta']}</Button>
            </Nav.Link>)
    }

    return (
        <Navbar expand="lg" expanded={expanded}>
          <Container className="fluid" style={
                {
                    backgroundColor: '#F5E1A3',
                    borderRadius: '5px',
                    opacity: '0.9',
                    width: '100%'
                }
            }>
            <Navbar.Brand href="/etusivu"><strong>Juustopojat Oy</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}/>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav className="justify-content-center">
                {valinnat}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Valikko