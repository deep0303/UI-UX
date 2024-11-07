import logo from './logo.svg';
import './App.css';
import './styles.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MoviesGrid from './components/MoviesGrid'

function App() {
  return (
    <div className="App">
      <header className="container">
        <Header></Header>
       <h1>Welcome</h1>
      </header>
      <MoviesGrid></MoviesGrid>
      <Footer></Footer>
    </div>
  );
}

export default App;
