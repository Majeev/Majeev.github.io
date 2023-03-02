import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    Navbar,
    Header,
    About,
    Skills,
    Projects,
    Contact,
} from './components/index';

function App() {
    useEffect(() => {
        AOS.init({ duration: 500, easing: 'ease-out', disable: 'mobile' });
    }, []);

    return (
        <div className='App'>
            <Navbar />
            <Header />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
}

export default App;
