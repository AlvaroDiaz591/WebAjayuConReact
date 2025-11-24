import Header from './components/Header';
import Hero from './components/Hero';
import Caracteristicas from './components/caracteristicas';
import Historia from './components/Historia';
import Trailer from './components/Trailer';

const App = () => {
  return (
    <div className=''>
      <Header/>
      <Hero/>
      <Historia/>
      <Caracteristicas/>
      <Trailer/>
    </div>
  )
}

export default App