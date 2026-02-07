import React from 'react';
import { Smartphone, Monitor, Database, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Mobile App Development',
        description: 'Native and Cross-platform apps using Flutter and React Native. High performance and smooth UI.',
        icon: Smartphone,
    },
    {
        title: 'Web Development',
        description: 'Scalable web applications with React, Next.js, and modern CSS frameworks.',
        icon: Monitor,
    },
    {
        title: 'Backend & API Integration',
        description: 'Robust server-side solutions using Node.js, Python, or Go. Secure and scalable APIs.',
        icon: Database,
    },
    {
        title: 'Maintenance & Support',
        description: 'Ongoing support, bug fixes, and performance optimization to keep your app running smoothly.',
        icon: Wrench,
    },
];

const Services = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32" id="services">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">What We Do</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Everything you need to verify your idea
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        From concept to deployment, we handle the entire development lifecycle with precision and care.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="relative pl-16 p-6 rounded-2xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all"
                                whileHover={{ scale: 1.02 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                    <div className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {service.title}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">{service.description}</dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Services;
