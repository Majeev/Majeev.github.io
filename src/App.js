import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from './components/Header/Header';
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Header/>
            <About />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
