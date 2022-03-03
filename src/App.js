import logo from './jelimet.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="Logo" alt="logo" />
        <div className="Title">ordonnarie</div>
        <div className="Subtitle">A solo creative computing exploration project coming up into a web3 ecosystem. Music, generative art, illustration, and any other possibilities are up. Stay tune and wait for the next update.</div>
        <div className="Socials">
          <a href="https://github.com/ordonnarie" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://twitter.com/ordonnarie" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com/ordonnarie" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://audius.co/ordonnarie" target="_blank" rel="noopener noreferrer">Audius</a>
          <a href="https://soundcloud.com/ordonnarie" target="_blank" rel="noopener noreferrer">Soundcloud</a>
          <a href="https://www.tiktok.com/@ordonnarie" target="_blank" rel="noopener noreferrer">Tiktok</a>
        </div>
    </div>
  );
}

export default App;
