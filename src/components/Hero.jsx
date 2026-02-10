import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 1,
        title: 'Web Development',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 2,
        title: 'Mobile Applications',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 3,
        title: 'Digital Marketing',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    },
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative isolate overflow-hidden bg-white dark:bg-slate-950 pt-32 pb-24 sm:pt-48 sm:pb-32">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 bg-mesh opacity-20 dark:opacity-40" />
            <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] bg-brand-500/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] bg-accent-500/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
                    <div className="max-w-2xl lg:max-w-none">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-100 dark:border-brand-900/50 text-brand-700 dark:text-brand-300 text-sm font-semibold mb-8">
                                <Sparkles className="h-4 w-4" /> Trusted by Startups & Brands
                            </span>

                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-7xl mb-6 leading-[1.1]">
                                Build <span className="text-gradient">Better</span>. Market <span className="text-gradient">Smarter</span>.
                            </h1>

                            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-slate-600 dark:text-slate-400 mb-8 sm:mb-10 max-w-xl">
                                We Build Products That Get Results — From Web & Mobile Applications to Marketing Growth. Helping brands, startups, and small businesses scale in the digital age.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="/#contact"
                                    className="btn-primary w-full sm:w-auto text-center justify-center py-4 sm:py-3"
                                >
                                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="/#work"
                                    className="btn-secondary w-full sm:w-auto text-center justify-center py-4 sm:py-3"
                                >
                                    View Our Work
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="mt-12 flex items-center gap-x-8 text-slate-400 dark:text-slate-600"
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800" />
                                ))}
                            </div>
                            <span className="text-sm font-medium">Joined by 50+ successful clients</span>
                        </motion.div> */}
                    </div>

                    <div className="mt-20 lg:mt-0 relative">
                        <div className="aspect-[4/3] rounded-3xl bg-slate-900 overflow-hidden shadow-2xl border border-white/10 relative group">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/40 to-accent-500/40 opacity-50 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                                    <img
                                        src={slides[currentSlide].image}
                                        alt={slides[currentSlide].title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-6 left-6 z-20">
                                        <span className="px-4 py-2 glass-nav !bg-brand-600/20 backdrop-blur-md rounded-xl text-white font-bold border border-white/20">
                                            {slides[currentSlide].title}
                                        </span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Slider Indicators */}
                            <div className="absolute bottom-6 right-6 z-20 flex gap-2">
                                {slides.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`h-1.5 transition-all duration-300 rounded-full ${index === currentSlide ? 'w-8 bg-brand-500' : 'w-2 bg-white/30'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
