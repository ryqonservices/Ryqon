"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Globe, Smartphone, BarChart3, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
    { id: 'web', name: 'Web', icon: Globe },
    { id: 'app', name: 'App', icon: Smartphone },
    { id: 'marketing', name: 'Digital Market', icon: BarChart3 }
];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('');
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        // Pick a random category on mount
        const randomCat = categories[Math.floor(Math.random() * categories.length)].id;
        setActiveCategory(randomCat);
    }, []);

    const filteredProjects = projects.filter(p => !activeCategory || p.category === activeCategory);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollContainerRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/20 overflow-hidden" id="projects">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-600 dark:text-brand-400 font-bold tracking-tight text-sm uppercase mb-4"
                    >
                        Our Portfolio
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
                    >
                        Recent <span className="text-gradient">Projects</span>
                    </motion.p>
                </div>

                {/* Split Controls: Categories Left, Navigation Right */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6">
                    <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 ${
                                        activeCategory === cat.id
                                            ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30'
                                            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                                    }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    {cat.name}
                                </button>
                            );
                        })}
                    </div>
                    
                    <div className="flex gap-3">
                        <button 
                            onClick={() => scroll('left')}
                            className="h-12 w-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-brand-50 dark:hover:bg-brand-900/20 text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-all shadow-sm group/btn"
                        >
                            <ChevronLeft className="h-6 w-6 group-hover/btn:-translate-x-0.5 transition-transform" />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="h-12 w-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-brand-50 dark:hover:bg-brand-900/20 text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-all shadow-sm group/btn"
                        >
                            <ChevronRight className="h-6 w-6 group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Sliding Projects Row */}
                <div className="relative group/container">
                    <div 
                        ref={scrollContainerRef}
                        className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 no-scrollbar scroll-smooth"
                        style={{ scrollSnapType: 'x mandatory', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                    >
                        <style jsx>{`
                            .no-scrollbar::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 20,
                                        delay: index * 0.1 
                                    }}
                                    className="flex-shrink-0 w-[85%] sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] group scroll-snap-align-start"
                                    style={{ scrollSnapAlign: 'start' }}
                                >
                                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-xl border border-slate-200 dark:border-slate-800">
                                        <img 
                                            src={project.image} 
                                            alt={project.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8 translate-y-4 group-hover:translate-y-0">
                                            <button className="flex items-center gap-2 bg-white text-brand-600 px-6 py-2 rounded-full font-bold text-sm shadow-xl hover:bg-brand-50 transition-colors">
                                                View Case Study <ArrowRight className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                                        {project.description}
                                    </p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Gradient Fades */}
                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50 dark:from-slate-950/10 to-transparent pointer-events-none z-10 hidden sm:block" />
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-50 dark:from-slate-950/10 to-transparent pointer-events-none z-10 hidden sm:block" />
                </div>
            </div>
        </section>
    );
};

export default Projects;
