import Header from './components/Header';
import Hero from './components/Hero';
import Caracteristicas from './components/Caracteristicas';
import Historia from './components/Historia';
import Trailer from './components/Trailer';
import Autores from './components/Autores';

const App = () => {
  return (
    <div className=''>
      <Header/>
      <Hero/>
      <Historia/>
      <Caracteristicas/>
      <Trailer/>
      <Autores/>
    </div>
  )
}

export default App