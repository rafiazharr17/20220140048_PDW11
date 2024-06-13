import logo from "./berang.gif";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Lucuunyaa berang-berang, kalo bisa saya beli 1</p>
        <a
          className="App-link"
          href="https://id.wikipedia.org/wiki/Berang-berang"
          target="_blank"
          rel="noopener noreferrer"
        >
          Belajar tentang Berang-Berang
        </a>
      </header>
    </div>
  );
}

export default App;
