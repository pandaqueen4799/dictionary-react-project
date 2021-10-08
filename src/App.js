import './App.css';
import Dictionary from './dictionary';
import logo from "./dictionary.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
    </div>
    </div>
  );
}


 