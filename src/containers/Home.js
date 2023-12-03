import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TestsContext from '../context/testsContext';

import '../css/Home.scss';

function Home() {
  const { contextState } = useContext(TestsContext);

  return (
    <div className='home'>
      <div className="home-logo">
        <img className='logo' alt='Blinklearning logo' src='assets/img/logo.png' />
      </div>
      <div className="home-buttons">
        <Link className='button' to={`/test`} disabled={contextState.tests.done}>Realizar prueba</Link>
        <Link className='button' to={`/results`} disabled={!contextState.tests.done}>Ver resultados</Link>
      </div>
    </div>
  );
}

export default Home;
