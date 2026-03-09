"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "How long does it take to build a website or app?",
        answer: "The timeline depends on the project's complexity. A standard business website usually takes 2-4 weeks, while a complex mobile application or custom software could take 8-12 weeks from design to deployment."
    },
    {
        question: "What is your typical development process?",
        answer: "We follow a 4-step process: Discovery & Planning, Design & Prototyping, Development, and finally Testing & Launch. We keep you involved at every stage to ensure the final product meets your vision."
    },
    {
        question: "Do you provide maintenance after the project is launched?",
        answer: "Yes, we offer ongoing maintenance and support packages to ensure your website or app remains secure, updated, and performs at its best as technology evolves."
    },
    {
        question: "How do you handle project pricing?",
        answer: "Every project is unique. We provide custom quotes based on your specific requirements, features, and technical needs. We offer both fixed-price project models and hourly consulting."
    },
    {
        question: "Can you help with digital marketing for an existing business?",
        answer: "Absolutely! We specialize in Meta Ads, Google Ads, and social media strategy. We can conduct an audit of your current presence and create a data-driven growth plan to increase your ROAS."
    },
    {
        question: "Will my website be mobile-friendly and SEO optimized?",
        answer: "Yes, every product we build is 'Mobile-First' and follows the latest SEO best practices to ensure you rank well on search engines and provide a great user experience on all devices."
    }
];

const FAQItem = ({ faq, isOpen, toggleOpen, index }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`border-b border-slate-200 dark:border-slate-800 last:border-0 overflow-hidden transition-all duration-300 ${isOpen ? 'bg-slate-50/50 dark:bg-slate-900/20' : ''}`}
        >
            <button
                onClick={toggleOpen}
                className="flex w-full items-center justify-between py-6 px-4 text-left focus:outline-none"
            >
                <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-brand-600 dark:text-brand-400' : 'text-slate-900 dark:text-white'}`}>
                    {faq.question}
                </span>
                <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-500' : 'text-slate-400'}`}>
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="pb-8 px-4 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 sm:py-32 bg-white dark:bg-slate-950 overflow-hidden" id="faq">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Header Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-brand-600 dark:text-brand-400 font-bold tracking-tight text-sm uppercase mb-4 flex items-center gap-2">
                            <HelpCircle className="h-5 w-5" /> Questions & Answers
                        </h2>
                        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8">
                            Got <span className="text-gradient">Questions?</span> We have answers.
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-lg">
                            Whether you're curious about our process, pricing, or support, we've gathered the most common queries to help you start your journey with confidence.
                        </p>
                        <div className="mt-8 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                            <p className="text-slate-700 dark:text-slate-300 font-medium mb-4">Still have more questions?</p>
                            <a href="/#contact" className="inline-flex items-center text-brand-600 dark:text-brand-400 font-bold hover:gap-2 transition-all">
                                Chat with our team <Plus className="ml-1 h-4 w-4 rotate-45" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side: Accordion */}
                    <div className="bg-white dark:bg-slate-900/30 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
                        {faqs.map((faq, index) => (
                            <FAQItem 
                                key={index} 
                                faq={faq} 
                                index={index}
                                isOpen={openIndex === index}
                                toggleOpen={() => setOpenIndex(openIndex === index ? -1 : index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
