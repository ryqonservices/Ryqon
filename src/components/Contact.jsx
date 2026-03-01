"use client";

import React, { useRef, useState } from 'react';
import { Mail, Send, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || SERVICE_ID === "your_service_id_here") {
            toast.error("Please configure EmailJS credentials in .env file");
            setLoading(false);
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                toast.success('Message sent successfully!');
                form.current.reset();
            }, (error) => {
                console.error(error.text);
                toast.error('Failed to send message. Please try again.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section className="relative isolate bg-slate-50 dark:bg-slate-900/30 py-24 sm:py-32" id="contact">
            <Toaster position="bottom-right" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative glass-nav !bg-white dark:!bg-slate-900 rounded-3xl sm:rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Info Panel */}
                        <div className="relative bg-brand-600 p-8 sm:p-12 text-white">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-extrabold mb-6">Build Better. Market Smarter.</h2>
                                <p className="text-brand-100 mb-12 max-w-sm">Ready to transform your ideas into reality? Let's discuss how we can help your brand grow.</p>

                                <div className="space-y-8">
                                    <div className="flex gap-4 items-center">
                                        <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-brand-200">Email Us</p>
                                            <p className="font-bold">ryqonservices@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-brand-200">Call Us</p>
                                            <p className="font-bold">7994802431</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-brand-200">Location</p>
                                            <p className="font-bold">Hyderabad, Telangana</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16 pt-8 border-t border-white/10 flex gap-4">
                                    {[
                                        { Icon: Instagram, href: 'https://www.instagram.com/ryqon_services/' },
                                        { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61587584260076' },
                                        { Icon: Linkedin, href: 'https://www.linkedin.com/company/ryqon-services/about/?viewAsMember=true' }
                                    ].map(({ Icon, href }, i) => (
                                        <a
                                            key={i}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                        >
                                            <Icon className="h-6 w-6" />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>

                            <div className="absolute bottom-0 right-0 h-40 w-40 bg-white/5 blur-3xl rounded-full translate-y-1/2 translate-x-1/2" />
                        </div>

                        {/* Form Panel */}
                        <div className="p-8 sm:p-12">
                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            required
                                            className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-500 transition-all outline-none"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            name="user_lastname"
                                            className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-500 transition-all outline-none"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="user_phone"
                                        required
                                        pattern="[0-9\+\-\s]{10,20}"
                                        title="Please enter a valid phone number (10-20 digits)"
                                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-500 transition-all outline-none"
                                        placeholder="Add your number here"
                                    />
                                    <p className="mt-2 text-[10px] text-slate-500 dark:text-slate-400 italic uppercase tracking-wider font-semibold">
                                        * Hint: Add your number with country code (e.g., +91)
                                    </p>
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Project Details</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-500 transition-all outline-none resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={loading}
                                    className="w-full btn-primary !rounded-2xl py-5 text-lg font-bold disabled:opacity-50"
                                >
                                    {loading ? 'Sending Message...' : (
                                        <>Send Message <Send className="ml-2 h-5 w-5" /></>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
