import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const expectations = [
    {
        title: 'Clear timelines & scope',
        description: 'You\'ll know exactly what we\'re building, when it will be delivered, and what the milestones look like.',
    },
    {
        title: 'Honest recommendations',
        description: 'We won\'t just say yes. We\'ll provide expert insights on what\'s best for your product and business goals.',
    },
    {
        title: 'Direct communication',
        description: 'No middle managers or technical jargon. Speak directly with the experts building your solution.',
    },
    {
        title: 'No unnecessary upselling',
        description: 'We focus on what you actually need to succeed, not on padding our invoices with features you won\'t use.',
    },
];

const Showcase = () => {
    return (
        <section className="py-24 sm:py-32 bg-white dark:bg-slate-950" id="work">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-brand-600 dark:text-brand-400 font-bold tracking-tight text-sm uppercase mb-4"
                    >
                        Our Commitment
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
                    >
                        What You Can <span className="text-gradient">Expect</span>
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 text-lg text-slate-600 dark:text-slate-400"
                    >
                        Working with Ryqon Digital Solutions means clarity, communication, and consistency from day one.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {expectations.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative flex gap-6 p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-brand-500/30 dark:hover:border-brand-500/30 transition-all duration-300 group"
                        >
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcase;
