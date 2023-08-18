import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';

import LoremTäyteteksti from './LoremTäyteteksti';
import Sivu from './Sivu';
import Valikko from './Valikko';
import Palautelomake from './PalauteLomake';

const etusivu = {
  valikkovalinta: 'Etusivu',
  otsikko: `Juustopojat - Halpaa, hyvää, laadukasta ja edullista juustoa
  jo vuodesta 1997`,
  sisältö: <LoremTäyteteksti />
}

const juustonValmistusSivu = {
  valikkovalinta: 'Juuston valmistus',
  otsikko: 'Juuston valmistus',
  sisältö: <LoremTäyteteksti />
}

const tietojaMeistäSivu = {
  valikkovalinta: 'Tietoja meistä',
  otsikko: 'Tietoja meistä',
  sisältö: <LoremTäyteteksti />
}

const yhteystiedotSivu = {
  valikkovalinta: 'Yhteystiedot',
  otsikko: 'Yhteystiedot',
  sisältö: <LoremTäyteteksti />
}

const palauteSivu = {
  valikkovalinta: 'Palaute',
  otsikko: 'Palaute',
  sisältö: <Palautelomake />
}

const sivut = {
  'etusivu': etusivu,
  'juuston-valmistus': juustonValmistusSivu,
  'tietoja': tietojaMeistäSivu,
  'yhteystiedot': yhteystiedotSivu,
  'palaute': palauteSivu
}

function App() {
  const [nykyinenSivu, vaihdaNykyinenSivu] = useState(sivut['etusivu'])
  
  function vaihdaSivua(sivu) {
    vaihdaNykyinenSivu(sivut[sivu])
  }

  return (
    <>
      <header className="fixed-top" style={{
        backgroundColor: 'goldenrod'
        }}>
        <Valikko sivut={sivut} nykyinenSivu={nykyinenSivu} vaihdaSivuaFunktio={vaihdaSivua}/>
      </header>
      <Container style={
        {
          backgroundColor: '#F5E1A3',
          borderRadius: '20px',
          marginTop: '5rem',
          opacity: '0.9',
          paddingTop: '1rem',
          marginBottom: '2rem'
        }}>
          <Sivu 
              otsikko={nykyinenSivu['otsikko']}
              sisältö={nykyinenSivu['sisältö']}
          />

        <footer className="fixed-bottom bg-warning d-flex justify-content-center">&copy; Jussi Suominen</footer>
      </Container>
    </>
  )
}

export default App;
