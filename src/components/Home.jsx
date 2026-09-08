import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Showcase from './Showcase';
import Process from './Process';
import WhoWeWorkWith from './WhoWeWorkWith';
import FAQ from './FAQ';
import Contact from './Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <Services />
            <Showcase />
            <Process />
            <WhoWeWorkWith />
            <FAQ />
            <Contact />
        </main>
    );
};

export default Home;
