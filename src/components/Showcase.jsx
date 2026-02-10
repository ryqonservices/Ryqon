import React from 'react';
import { motion } from 'framer-motion';
// import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Cloud Infrastructure Ops',
        category: 'Services',
        description: 'High-availability AWS server architectures and automated deployment pipelines for global scale.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Custom ERP Solution',
        category: 'Development',
        description: 'Scalable internal business tools and management dashboards built with React and Node.js.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Real-time Data Sync',
        category: 'Development',
        description: 'Low-latency backend systems and WebSocket integrations for live collaborative platforms.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    },
];

const Showcase = () => {
    return (
        <section className="py-24 sm:py-32 bg-white dark:bg-slate-950" id="work">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-600 font-bold tracking-tight text-sm uppercase mb-4"
                        >
                            Portfolio
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
                        >
                            What We’ve <span className="text-gradient">Worked On</span>
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-6 text-lg text-slate-600 dark:text-slate-400"
                        >
                            New studio, experienced team. We’ve helped dozens of companies build and scale. Here are some of our highlight projects.
                        </motion.p>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href="/#contact" className="btn-secondary whitespace-nowrap">View All Projects</a>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                        >
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-brand-400 text-xs font-bold uppercase mb-2 tracking-widest">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-slate-300 text-sm mb-6 line-clamp-2">{project.description}</p>
                                {/* <div className="flex gap-4">
                                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white transition-colors">
                                        <ExternalLink className="h-5 w-5" />
                                    </button>
                                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white transition-colors">
                                        <Github className="h-5 w-5" />
                                    </button>
                                </div> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcase;
