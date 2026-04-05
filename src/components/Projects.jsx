"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { Globe, Smartphone, BarChart3, ArrowRight, ChevronLeft, ChevronRight, TrendingUp, Target } from 'lucide-react';

const categories = [
    { id: 'web', name: 'Web', icon: Globe },
    { id: 'mobile', name: 'App', icon: Smartphone },
    { id: 'marketing', name: 'Digital Market', icon: BarChart3 }
];

const MarketingCard = ({ project }) => {
    const [activeImage, setActiveImage] = useState(0);
    
    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-6 sm:p-12 shadow-2xl relative overflow-hidden group">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 blur-[100px] -mr-32 -mt-32 rounded-full" />
            
            <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 items-center relative z-10">
                {/* Left side: Interactive Image Gallery */}
                <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl mb-6 bg-slate-100 dark:bg-slate-800">
                        <AnimatePresence mode="wait">
                            <motion.img 
                                key={activeImage}
                                src={project.images[activeImage]} 
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full object-cover"
                                alt={project.name}
                            />
                        </AnimatePresence>
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Image Counter Badge */}
                        <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold font-mono">
                            {String(activeImage + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}
                        </div>
                    </div>
                    
                    {/* Thumbnail Navigation */}
                    <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                        <style jsx>{`
                            .no-scrollbar::-webkit-scrollbar { display: none; }
                            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                        `}</style>
                        {project.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImage(idx)}
                                className={`flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                                    activeImage === idx 
                                        ? 'border-brand-500 scale-105 shadow-lg shadow-brand-500/20' 
                                        : 'border-transparent opacity-60 hover:opacity-100'
                                }`}
                            >
                                <img src={img} className="w-full h-full object-cover" alt="" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right side: Strategy Details */}
                <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 font-bold text-xs uppercase tracking-widest mb-6">
                        <BarChart3 className="h-3.5 w-3.5" />
                        Digital Strategy Case Study
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                        {project.name.split('—')[0]}
                        <span className="block text-brand-600 dark:text-brand-500 text-2xl sm:text-3xl mt-2 font-bold italic">
                           {project.name.split('—')[1]}
                        </span>
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                        {project.description}
                    </p>
                    
                    {/* Performance Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        <div className="flex items-start gap-4 p-5 rounded-[1.5rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                <TrendingUp className="h-5 w-5 text-green-500" />
                            </div>
                            <div>
                                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1 block">Outcome</span>
                                <span className="text-slate-900 dark:text-white font-bold leading-tight line-clamp-2">{project.result}</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-5 rounded-[1.5rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                                <Target className="h-5 w-5 text-orange-500" />
                            </div>
                            <div>
                                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1 block">Targeting</span>
                                <span className="text-slate-900 dark:text-white font-bold leading-tight">Millennials & Gen Z</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-10">
                        {project.stack.map(tag => (
                            <span key={tag} className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold border border-slate-200 dark:border-slate-700">
                                #{tag.trim()}
                            </span>
                        ))}
                    </div>

                    <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-5 rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-2xl group text-lg">
                        View Strategy Details
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

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
                    
                    {/* Only show scroll buttons for web/mobile categories */}
                    {activeCategory !== 'marketing' && (
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
                    )}
                </div>

                {/* Projects Container */}
                <div className="relative group/container">
                    {activeCategory === 'marketing' ? (
                        <div className="grid grid-cols-1 gap-12">
                            <AnimatePresence mode="popLayout">
                                {filteredProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ 
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 20,
                                            delay: index * 0.1 
                                        }}
                                    >
                                        <MarketingCard project={project} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <>
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
                                                    src={project.images && project.images.length > 0 ? project.images[0] : (project.video ? '' : '')} 
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
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
