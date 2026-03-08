"use client";
import React from 'react';
import { Lightbulb, Map, Code2, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        name: 'Understand',
        description: 'We dive deep into your business goals, challenges, and target audience to build a solid foundation.',
        icon: Lightbulb,
        color: 'text-yellow-500',
        bg: 'bg-yellow-50',
    },
    {
        name: 'Plan',
        description: 'We create a comprehensive roadmap and strategy, ensuring every step is aligned with your objectives.',
        icon: Map,
        color: 'text-blue-500',
        bg: 'bg-blue-50',
    },
    {
        name: 'Build',
        description: 'Our team brings the vision to life with clean code, modern design, and robust implementation.',
        icon: Code2,
        color: 'text-brand-600',
        bg: 'bg-brand-50',
    },
    {
        name: 'Grow',
        description: 'We launch, monitor, and continuously optimise your product or campaign to drive real results.',
        icon: TrendingUp,
        color: 'text-accent-600',
        bg: 'bg-accent-50',
    },
];

const Process = () => {
    return (
        <section className="py-24 sm:py-32 bg-white dark:bg-slate-950" id="process">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-20">
                    <h2 className="text-brand-600 font-bold tracking-tight text-sm uppercase mb-4 transition-all">Workflow</h2>
                    <p className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        From Concept to <span className="text-gradient">Growth</span>
                    </p>
                </div>

                <div className="relative">
                    {/* Connection Line Container (Desktop horizontal) */}
                    <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 hidden lg:block overflow-visible">
                        {/* Background Line */}
                        <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 rounded-full" />
                        
                        {/* Moving Light - Soft, Slow, Bounded Traversal */}
                        <motion.div
                            className="absolute top-0 h-full w-48 bg-gradient-to-r from-transparent via-brand-500/80 to-transparent z-10"
                            initial={{ left: "12.5%" }}
                            whileInView={{
                                left: "87.5%",
                            }}
                            viewport={{ once: true, threshold: 0.1 }}
                            transition={{
                                duration: 6, // Very slow and soft
                                ease: "easeInOut",
                            }}
                        />

                        {/* Bullet Points - Synchronized with new slow timing */}
                        <div className="absolute inset-0 flex justify-between items-center px-[12.5%] pointer-events-none">
                            {[0, 1, 2, 3].map((i) => (
                                <div key={i} className="relative flex items-center justify-center">
                                    {/* Static Bullet */}
                                    <motion.div 
                                        initial={{ backgroundColor: "rgb(226, 232, 240)", scale: 1 }}
                                        whileInView={{ 
                                            backgroundColor: ["rgb(226, 232, 240)", "rgb(79, 70, 229)", "rgb(79, 70, 229)", "rgb(226, 232, 240)"],
                                            scale: [1, 1.4, 1.4, 1],
                                            boxShadow: ["0px 0px 0px rgba(79, 70, 229, 0)", "0px 0px 20px rgba(79, 70, 229, 0.6)", "0px 0px 20px rgba(79, 70, 229, 0.6)", "0px 0px 0px rgba(79, 70, 229, 0)"]
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 1.5, // Matching the slow speed
                                            delay: i * 1.8, // Adjusted delay for 6s total duration
                                            ease: "easeInOut"
                                        }}
                                        className="h-4 w-4 rounded-full border-2 border-white dark:border-slate-950 z-20 shadow-sm" 
                                    />
                                    
                                    {/* Soft Pulse Effect */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{
                                            opacity: [0, 0.5, 0],
                                            scale: [0.5, 1.8, 2],
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 2,
                                            delay: i * 1.8,
                                            ease: "easeOut",
                                        }}
                                        className="absolute h-10 w-10 rounded-full bg-brand-500/20 blur-md z-10"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Vertical line for mobile */}
                    <div className="absolute left-1/2 top-10 w-0.5 h-[80%] bg-slate-100 dark:bg-slate-800 -translate-x-1/2 lg:hidden" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className={`h-22 w-22 rounded-[2rem] ${step.bg} dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-8 relative z-10 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 ease-out`}>
                                    <step.icon className={`h-10 w-10 ${step.color} group-hover:scale-110 transition-transform duration-500`} />
                                    <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center shadow-md">
                                        <span className={`text-xs font-bold ${step.color}`}>{index + 1}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-600 transition-colors duration-300">{step.name}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-[200px]">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
