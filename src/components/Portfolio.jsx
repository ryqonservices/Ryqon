"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ExternalLink, 
    ArrowUp, 
    X, 
    ChevronLeft, 
    ChevronRight, 
    Play, 
    Code2, 
    Layers, 
    Layout, 
    TrendingUp,
    AppWindow,
    Smartphone,
    Globe
} from 'lucide-react';
import { projects } from '../data/portfolioData';

const stats = [
    { label: 'Projects', value: '9+' },
    { label: 'Service Areas', value: '3' },
    { label: 'Client Satisfaction', value: '100%' },
];

const categories = [
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'marketing', name: 'Digital Marketing' },
];

const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
        case 'web': return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
        case 'mobile': return 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400';
        case 'marketing': return 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400';
        default: return 'bg-slate-100 text-slate-600 dark:bg-slate-900/30 dark:text-slate-400';
    }
};

const PortfolioPage = () => {
    const [activeFilter, setActiveFilter] = useState('web');
    const [lightboxImage, setLightboxImage] = useState(null);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [lightboxProject, setLightboxProject] = useState(null);
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Filter projects based on active tab
    const filteredProjects = useMemo(() => {
        return projects
            .filter(project => activeFilter === 'all' || project.category.toLowerCase() === activeFilter.toLowerCase())
            .sort((a, b) => a.order - b.order);
    }, [activeFilter]);

    // Handle scroll for "To Top" button
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Lightbox functions
    const openLightbox = (project, index) => {
        if (!project.images || project.images.length === 0) return;
        setLightboxProject(project);
        setLightboxIndex(index);
        setLightboxImage(project.images[index]);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxImage(null);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (!lightboxProject) return;
        const nextIdx = (lightboxIndex + 1) % lightboxProject.images.length;
        setLightboxIndex(nextIdx);
        setLightboxImage(lightboxProject.images[nextIdx]);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (!lightboxProject) return;
        const prevIdx = (lightboxIndex - 1 + lightboxProject.images.length) % lightboxProject.images.length;
        setLightboxIndex(prevIdx);
        setLightboxImage(lightboxProject.images[prevIdx]);
    };

    // Close lightbox on escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage(e);
            if (e.key === 'ArrowLeft') prevImage(e);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxImage, lightboxIndex, lightboxProject]);

    return (
        <main className="min-h-screen pt-32 pb-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-brand-600 dark:text-brand-400 font-bold tracking-tight text-sm uppercase mb-4 flex items-center justify-center gap-2">
                            <span className="h-px w-8 bg-brand-500"></span>
                            Showcase
                            <span className="h-px w-8 bg-brand-500"></span>
                        </h2>
                        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6">
                            Our <span className="text-gradient underline decoration-brand-500/30">Work</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                            Real projects. Real results. We take pride in delivering high-quality solutions that help our clients achieve their digital goals.
                        </p>
                    </motion.div>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-100 dark:border-slate-800/50">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <p className="text-4xl font-extrabold text-brand-600 dark:text-brand-400 mb-2">{stat.value}</p>
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-widest">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveFilter(cat.id)}
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                                activeFilter === cat.id 
                                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30' 
                                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="group relative flex flex-col h-full card-modern !p-0 overflow-hidden"
                            >
                                {/* Media Section */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-slate-800">
                                    {project.video ? (
                                        <video 
                                            src={project.video}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                            onError={(e) => {
                                                // Fallback to image if video fails or is missing
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'block';
                                            }}
                                        />
                                    ) : null}
                                    <img 
                                        src={project.images[0]} 
                                        alt={project.name}
                                        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${project.video ? 'hidden' : 'block hover:cursor-pointer'}`}
                                        onClick={() => project.video ? null : openLightbox(project, 0)}
                                    />
                                    
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                                        {project.images && project.images.length > 0 && (
                                            <button 
                                                onClick={() => openLightbox(project, 0)}
                                                className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2"
                                                title={project.type === 'casestudy' ? "View Case Study" : "View Gallery"}
                                            >
                                                <Layout className="w-5 h-5" />
                                                <span>{project.type === 'casestudy' ? 'View Case Study →' : 'View Details'}</span>
                                            </button>
                                        )}
                                    </div>
                                    
                                    {/* Case Study Badge */}
                                    {project.type === 'casestudy' && (
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className="bg-amber-500 text-white text-[10px] font-black uppercase tracking-tighter px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 animate-pulse">
                                                <Layers className="w-3 h-3" />
                                                Case Study
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(project.category)}`}>
                                            {project.category}
                                        </span >
                                        {project.result && (
                                            <span className="flex items-center gap-1.5 text-[10px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                                                <TrendingUp className="h-3 w-3" />
                                                {project.result}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                        {project.name}
                                    </h3>
                                    
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto flex flex-wrap gap-1.5">
                                        {project.stack.map(tech => (
                                            <span key={tech} className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-50 dark:bg-slate-900/80 text-slate-500 dark:text-slate-500 border border-slate-100 dark:border-slate-800">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/98 backdrop-blur-2xl"
                        onClick={closeLightbox}
                    >
                        <button 
                            className="absolute top-8 right-8 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-[110]"
                            onClick={closeLightbox}
                        >
                            <X className="w-10 h-10" />
                        </button>

                        <div className="relative w-full max-w-7xl h-full flex items-center justify-center cursor-default" onClick={(e) => e.stopPropagation()}>
                            <button 
                                className="absolute left-4 md:left-8 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all disabled:opacity-0 z-[110]"
                                onClick={prevImage}
                                disabled={lightboxProject?.images.length <= 1}
                            >
                                <ChevronLeft className="w-12 h-12" />
                            </button>

                            <motion.div 
                                className="w-full h-full flex items-center justify-center p-4 md:p-12"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -100, opacity: 0 }}
                                key={lightboxImage}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = offset.x;
                                    if (swipe < -100) nextImage(e);
                                    else if (swipe > 100) prevImage(e);
                                }}
                            >
                                <img 
                                    src={lightboxImage}
                                    alt="Case Study Slide"
                                    className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5"
                                    draggable="false"
                                />
                            </motion.div>

                            <button 
                                className="absolute right-4 md:right-8 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all disabled:opacity-0 z-[110]"
                                onClick={nextImage}
                                disabled={lightboxProject?.images.length <= 1}
                            >
                                <ChevronRight className="w-12 h-12" />
                            </button>
                        </div>
                        
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/5 backdrop-blur-xl rounded-full text-white/80 text-sm font-bold border border-white/10 tracking-widest uppercase">
                            Slide {lightboxIndex + 1} <span className="text-white/30 mx-2">/</span> {lightboxProject?.images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll to top button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-24 right-8 p-4 bg-brand-600 text-white rounded-full shadow-2xl shadow-brand-500/40 hover:bg-brand-700 transition-all z-40 group"
                    >
                        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>
        </main>
    );
};

export default PortfolioPage;
