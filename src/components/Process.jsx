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
                    {/* Connection Line (Desktop horizontal) */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 hidden lg:block" />

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
                                <div className={`h-20 w-20 rounded-3xl ${step.bg} dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-8 relative z-10 group-hover:shadow-xl transition-all duration-300`}>
                                    <step.icon className={`h-10 w-10 ${step.color}`} />
                                    <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center text-xs font-bold text-slate-400">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{step.name}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-[200px]">
                                    {step.description}
                                </p>

                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-[70%] w-full h-0 z-0">
                                        <ArrowRight className="h-6 w-6 text-slate-200 dark:text-slate-800" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
