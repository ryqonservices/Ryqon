import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Showcase from './Showcase';
import Process from './Process';
import WhoWeWorkWith from './WhoWeWorkWith';
import Contact from './Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <Services />
            <Showcase />
            <Process />
            <WhoWeWorkWith />
            <Contact />
        </main>
    );
};

export default Home;
