import logo from './logo.svg';
import './App.css';
import Nav from './Component/Navbar/Nav';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Contact />
      <About />
    </div>
  );
}

export default App;
