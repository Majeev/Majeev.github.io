import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

function App() {
    useEffect(() => {
        AOS.init({ duration: 500, easing: 'ease-out', disable: 'mobile' });
    }, []);

    return (
        <div className='App'>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
