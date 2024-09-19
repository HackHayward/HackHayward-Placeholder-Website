import ReactGA from 'react-ga4';

ReactGA.initialize('G-RC9XCMGX1W');

import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import FAQ from './Components/FAQ';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import PilotFalcon from './Components/PilotFalcon';
import Sponsor from './Components/Sponsor';

function App() {
    return (
        <>
            <header id="home" className="overflow-x-hidden">
                <NavBar />
            </header>
            <main className="mainBackground bg-contain bg-repeat-y overflow-x-hidden">
                <section className="border-b-8 border-[#c593e9]">
                    <Hero />
                </section>
                {/* about us */}
                <section
                    className="pt-16 p-10 bg-black/50 max-w-screen-2xl:overflow-hidden"
                    id="about"
                >
                    <AboutUs />
                </section>
                {/* FAQ */}
                <section className="p-10 bg-black/50 overflow-hidden" id="faq">
                    <FAQ />
                </section>
                {/* sponsor */}
                <section
                    className="pb-16 p-10 bg-black/50 overflow-hidden"
                    id="sponsor-us"
                >
                    <Sponsor />
                </section>
                {/* Scene */}
                <section className="overflow-hidden">
                    <PilotFalcon />
                </section>
            </main>
            {/* footer */}
            <footer className="bg-[rgb(48,37,45)] border-t-8 border-[#c593e9] overflow-hidden">
                <Footer />
            </footer>
        </>
    );
}

export default App;
