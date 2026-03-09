"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Monitor, Server, Wrench, Target, Megaphone, TrendingUp, BarChart3, Plus, Minus, CheckCircle2 } from 'lucide-react';

const services = [
    {
        id: 'mobile-app',
        title: 'Mobile App Development',
        icon: Smartphone,
        color: 'from-blue-600 to-blue-400',
        shortDescription: 'Native and Cross-platform apps using Flutter and React Native with high performance.',
        fullDescription: 'We build high-performance, scalable mobile applications that provide a seamless user experience across iOS and Android. Our approach combines cutting-edge technology with user-centric design to ensure your app stands out in the crowded marketplace.',
        features: [
            'Native iOS & Android Development',
            'Cross-platform Solutions (Flutter/React Native)',
            'Custom UI/UX Design',
            'App Store Optimization (ASO)',
            'Third-party API Integration',
            'Real-time Data Sync'
        ]
    },
    {
        id: 'web-dev',
        title: 'Web Development',
        icon: Monitor,
        color: 'from-indigo-600 to-indigo-400',
        shortDescription: 'Scalable web applications with React, Next.js, and modern CSS frameworks.',
        fullDescription: 'From responsive landing pages to complex web ecosystems, we deliver web solutions that are fast, secure, and built to convert. We prioritize performance and SEO to ensure your digital presence is both impactful and discoverable.',
        features: [
            'Next.js & React Applications',
            'Responsive Web Design',
            'E-commerce Solutions',
            'Progressive Web Apps (PWA)',
            'Performance Optimization',
            'SEO-friendly Architecture'
        ]
    },
    {
        id: 'hosting',
        title: 'Hosting & Deployment',
        icon: Server,
        color: 'from-blue-700 to-blue-500',
        shortDescription: 'Professional setup for Play Store, App Store, and cloud hosting with AWS & Google Cloud.',
        fullDescription: 'Minimize downtime and maximize reliability with our infrastructure experts. We handle the complexities of cloud deployment, server management, and app store submissions so you can focus on your business.',
        features: [
            'AWS & Google Cloud Setup',
            'CI/CD Pipeline Implementation',
            'App Store & Play Store Submissions',
            'Database Management',
            'SSL & Security Configuration',
            'Scalability Planning'
        ]
    },
    {
        id: 'maintenance',
        title: 'Maintenance & Support',
        icon: Wrench,
        color: 'from-slate-600 to-slate-400',
        shortDescription: 'Ongoing support, bug fixes, and performance optimization to keep your product running smoothly.',
        fullDescription: 'Technology evolves, and so should your product. Our maintenance services ensure your platform remains secure, bug-free, and updated with the latest features and security patches.',
        features: [
            '24/7 Monitoring & Support',
            'Regular Security Audits',
            'Bug Fixing & Performance Tuning',
            'Operating System Updates',
            'Feature Enhancements',
            'Backup & Recovery'
        ]
    },
    {
        id: 'strategy',
        title: 'Strategy & Planning',
        icon: Target,
        color: 'from-rose-600 to-rose-400',
        shortDescription: 'Comprehensive digital strategy and brand positioning to establish a dominant online presence.',
        fullDescription: 'We don’t just build; we strategize. Our team works closely with you to define your goals, understand your audience, and create a roadmap for long-term digital success.',
        features: [
            'Market & Competitor Analysis',
            'Brand Identity Development',
            'User Journey Mapping',
            'Technology Stack Selection',
            'Go-to-Market Strategy',
            'ROI Projections'
        ]
    },
    {
        id: 'social-media',
        title: 'Social Media & Content',
        icon: Megaphone,
        color: 'from-orange-600 to-orange-400',
        shortDescription: 'Strategic social media management and content calendars designed to drive engagement.',
        fullDescription: 'Build a community around your brand with engaging content and strategic social media management. We help you tell your story where your audience is most active.',
        features: [
            'Content Strategy & Creation',
            'Social Media Management',
            'Community Building',
            'Influencer Partnerships',
            'Video & Graphics Design',
            'Engagement Growth Plans'
        ]
    },
    {
        id: 'paid-ads',
        title: 'Paid Ads & Leads',
        icon: TrendingUp,
        color: 'from-emerald-600 to-emerald-400',
        shortDescription: 'Meta platform advertising and lead generation campaigns optimized for conversion.',
        fullDescription: 'Accelerate your growth with targeted advertising. Our data-driven approach to paid media ensures every dollar spent contributes to your bottom line through high-quality lead generation.',
        features: [
            'Meta (FB/IG) Ads Management',
            'Google Search & Display Ads',
            'Retargeting Campaigns',
            'Lead Funnel Optimization',
            'A/B Testing & Analysis',
            'Conversion Rate Optimization'
        ]
    },
    {
        id: 'analytics',
        title: 'Analytics & Reporting',
        icon: BarChart3,
        color: 'from-cyan-600 to-cyan-400',
        shortDescription: 'Detailed performance tracking and reporting to identify growth opportunities and ROI.',
        fullDescription: 'Make informed decisions with clear, actionable insights. We provide comprehensive reporting that goes beyond numbers, explaining what the data means for your business growth.',
        features: [
            'Google Analytics 4 Implementation',
            'Custom Performance Dashboards',
            'User Behavior Tracking',
            'Conversion Tracking Setup',
            'Monthly ROI Reports',
            'Actionable Growth Insights'
        ]
    }
];

const ServiceCard = ({ service }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            transition={{ 
                layout: { duration: 0.6, type: "spring", bounce: 0.2 },
                opacity: { duration: 0.4 }
            }}
            className="card-modern overflow-hidden group border border-slate-200 dark:border-slate-800 h-fit"
        >
            <div className="flex flex-col">
                <div className="flex items-start justify-between mb-6">
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-7 w-7" />
                    </div>
                </div>

                <motion.h3 layout="position" className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                </motion.h3>

                <motion.p layout="position" className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                </motion.p>

                <motion.div layout="position" className="mt-auto">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold text-sm hover:gap-3 transition-all"
                    >
                        {isExpanded ? (
                            <>
                                <Minus className="h-4 w-4" />
                                <span>Show Less</span>
                            </>
                        ) : (
                            <>
                                <Plus className="h-4 w-4" />
                                <span>Learn More</span>
                            </>
                        )}
                    </button>
                </motion.div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="pt-6 border-t border-slate-100 dark:border-slate-800"
                        >
                            <motion.p 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-slate-700 dark:text-slate-300 text-sm mb-6 italic"
                            >
                                {service.fullDescription}
                            </motion.p>
                            
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="grid grid-cols-1 gap-3"
                            >
                                {service.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <CheckCircle2 className="h-4 w-4 text-brand-500 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8"
                            >
                                <a 
                                    href="/#contact" 
                                    className="block text-center py-3 px-6 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold hover:bg-brand-600 hover:text-white transition-colors"
                                >
                                    Get Started with {service.title}
                                </a>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-white dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Hero Section */}
                <div className="max-w-3xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-brand-600 dark:text-brand-400 font-bold tracking-tight text-sm uppercase mb-4 flex items-center gap-2">
                            <span className="h-px w-8 bg-brand-500"></span>
                            Expertise & Solutions
                        </h2>
                        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8">
                            Our <span className="text-gradient underline decoration-brand-500/30">Service</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                            At Ryqon Digitals, we blend creativity with technical excellence to build products that spark innovation and drive growth. Whether you're looking to launch a disruptive mobile app, scale your web presence, or dominate your market with strategic digital marketing, we're here to turn your vision into reality.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid with Independent Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {[0, 1, 2].map((colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-8">
                            {services
                                .filter((_, index) => index % 3 === colIndex)
                                .map((service, index) => (
                                    <motion.div
                                        key={service.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: (colIndex + index * 3) * 0.1 }}
                                    >
                                        <ServiceCard service={service} />
                                    </motion.div>
                                ))}
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 p-8 sm:p-16 rounded-[2.5rem] bg-gradient-to-br from-brand-600 to-indigo-700 text-white relative overflow-hidden shadow-2xl shadow-brand-500/20"
                >
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-brand-400/20 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10 text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to scale your business?</h2>
                        <p className="text-brand-100 text-lg mb-10 leading-relaxed">
                            Let's discuss how our services can be tailored to meet your specific business needs and help you achieve your goals faster.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/#contact" className="bg-white text-brand-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl">
                                Start a Conversation
                            </a>
                            <a href="/" className="bg-brand-500/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-500/30 transition-all">
                                Back to Home
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
