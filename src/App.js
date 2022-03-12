import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ImmagineFilmHeader from './components/ImmagineFilmHeader';
import Hero from './components/Hero';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ImmagineFilmHeader top="0px" left="400px" immagine= "https://pad.mymovies.it/filmclub/2014/01/001/locandina.jpg"/>
      <ImmagineFilmHeader top="200px" left= "-60px" immagine= "https://m.media-amazon.com/images/I/81FNja+9-iL._SL1500_.jpg"/>
      <div className="content">
        <div className="titolone">
          <Hero 
          title={'Tutte le novità cinematografiche, \n finalmente in un unico posto.'}
          paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}
          button={'scopri'}
          />
        </div>
        <div className="rettangolo">

        </div>

      </div>
    </div>
  );
}

export default App;
