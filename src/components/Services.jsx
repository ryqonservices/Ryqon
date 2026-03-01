"use client";
import React from 'react';
import { Smartphone, Monitor, Database, Wrench, Megaphone, TrendingUp, Target, BarChart3, ArrowUpRight, Globe, Server, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const devServices = [
    {
        title: 'Mobile App Development',
        description: 'Native and Cross-platform apps using Flutter and React Native with high performance.',
        icon: Smartphone,
        color: 'bg-blue-500',
    },
    {
        title: 'Web Development',
        description: 'Scalable web applications with React, Next.js, and modern CSS frameworks.',
        icon: Monitor,
        color: 'bg-indigo-500',
    },
    {
        title: 'Hosting & Deployment',
        description: 'Professional setup for Play Store, App Store, and cloud hosting with AWS & Google Cloud.',
        icon: Server,
        color: 'bg-blue-600',
    },
    {
        title: 'Maintenance & Support',
        description: 'Ongoing support, bug fixes, and performance optimization to keep your product running smoothly.',
        icon: Wrench,
        color: 'bg-slate-500',
    },
];

const marketingServices = [
    {
        title: 'Strategy & Planning',
        description: 'Comprehensive digital strategy and brand positioning to establish a dominant online presence.',
        icon: Target,
        color: 'bg-rose-500',
    },
    {
        title: 'Social Media & Content',
        description: 'Strategic social media management and content calendars designed to drive engagement.',
        icon: Megaphone,
        color: 'bg-orange-500',
    },
    {
        title: 'Paid Ads & Leads',
        description: 'Meta platform advertising and lead generation campaigns optimized for conversion.',
        icon: TrendingUp,
        color: 'bg-emerald-500',
    },
    {
        title: 'Analytics & Reporting',
        description: 'Detailed performance tracking and reporting to identify growth opportunities and ROI.',
        icon: BarChart3,
        color: 'bg-cyan-500',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Services = () => {
    return (
        <section className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/30" id="services">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-brand-600 dark:text-brand-400 font-bold tracking-tight text-sm uppercase mb-4"
                    >
                        Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
                    >
                        Solutions built for <span className="text-gradient">Impact</span>
                    </motion.p>
                </div>

                {/* Development Services Row */}
                <div className="mb-16">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                        <span className="h-px w-8 bg-brand-500"></span>
                        Development Services
                    </h3>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {devServices.map((service) => (
                            <motion.div
                                key={service.title}
                                variants={itemVariants}
                                className="card-modern group"
                            >
                                <div className={`h-12 w-12 rounded-2xl ${service.color} flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-between">
                                    {service.title}
                                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-brand-500" />
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Marketing Services Row */}
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                        <span className="h-px w-8 bg-accent-500"></span>
                        Digital Marketing
                    </h3>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {marketingServices.map((service) => (
                            <motion.div
                                key={service.title}
                                variants={itemVariants}
                                className="card-modern group"
                            >
                                <div className={`h-12 w-12 rounded-2xl ${service.color} flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-between">
                                    {service.title}
                                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-brand-500" />
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
