import React from 'react';
import { CheckCircle2, Rocket, Users, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const targets = [
    {
        title: 'Startups',
        description: 'New ventures looking to build their first MVP or scale their product fast.',
        icon: Rocket,
        color: 'bg-orange-500',
    },
    {
        title: 'Small Businesses',
        description: 'Established teams needing a professional digital presence or custom software tools.',
        icon: Users,
        color: 'bg-brand-600',
    },
    {
        title: 'Growing Brands',
        description: 'Brands ready to optimize their marketing funnel and increase their digital footprint.',
        icon: Building2,
        color: 'bg-accent-500',
    },
];

const checklists = [
    'You want a team that understands business goals, not just code.',
    'You need a partner who can handle both Dev and Marketing.',
    'You value clean design and high-performance applications.',
    'You are ready to scale and need a reliable technical foundation.',
];

const WhoWeWorkWith = () => {
    return (
        <section className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/30" id="who-we-work-with">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-600 font-bold tracking-tight text-sm uppercase mb-4"
                        >
                            Partnership
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-8"
                        >
                            Helping <span className="text-gradient">Visionaries</span> Succeed
                        </motion.h3>

                        <dl className="grid grid-cols-1 gap-6">
                            {targets.map((target, index) => (
                                <motion.div
                                    key={target.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4 p-4 rounded-2xl hover:bg-white dark:hover:bg-slate-900 transition-colors group"
                                >
                                    <div className={`h-12 w-12 shrink-0 rounded-xl ${target.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                        <target.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <dt className="text-lg font-bold text-slate-900 dark:text-white">{target.title}</dt>
                                        <dd className="text-slate-600 dark:text-slate-400 text-sm mt-1">{target.description}</dd>
                                    </div>
                                </motion.div>
                            ))}
                        </dl>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 h-40 w-40 bg-brand-500/10 blur-[60px] rounded-full" />

                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">This is right for you if...</h4>
                        <ul className="space-y-6">
                            {checklists.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                    className="flex items-start gap-4 group"
                                >
                                    <CheckCircle2 className="h-6 w-6 text-accent-500 shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                                    <span className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeWorkWith;
