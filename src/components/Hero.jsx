import React from 'react';
import { ArrowRight, Code, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-white dark:bg-gray-900 pt-16 pb-32 space-y-24">
            <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div>
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 dark:bg-indigo-600">
                                    <Code className="h-8 w-8 text-white" aria-hidden="true" />
                                </span>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    We build Web & Mobile Applications for Startups and Businesses
                                </h2>
                                <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                                    A small, reliable development team delivering scalable, high-quality products. We turn your ideas into reality with modern tech stacks.
                                </p>
                                <div className="mt-6 flex gap-4">
                                    <a
                                        href="#contact"
                                        className="inline-flex rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700 transition-all"
                                    >
                                        Contact Us
                                    </a>
                                    <a
                                        href="#work"
                                        className="inline-flex rounded-lg bg-white px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-700 dark:hover:bg-gray-700 transition-all"
                                    >
                                        View Our Work
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-12 sm:mt-16 lg:mt-0"
                    >
                        <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                            <div className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                                {/* Placeholder for illustration */}
                                <div className="p-8 text-center">
                                    <Smartphone className="inline-block h-24 w-24 mb-4 opacity-80" />
                                    <Code className="inline-block h-24 w-24 mb-4 opacity-80 ml-4" />
                                    <p className="text-xl font-medium">Modern Solutions</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
