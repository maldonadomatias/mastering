import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Logos from './components/Logos/Logos';
import Section from './components/Section/Section';
import Waves from './components/Waves/Waves';
import Section2 from './components/Section2/Section2';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Logos/>
      <Section/>
      <Waves/>
      <Section2/>
    </div>
  );
}

export default App;
