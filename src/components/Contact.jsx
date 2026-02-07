
import React, { useRef, useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        // Replace these with your actual EmailJS credentials
        // Get them from https://dashboard.emailjs.com/
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Check if credentials are set
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
        <div className="relative isolate bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8" id="contact">
            <Toaster position="bottom-right" />
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Let’s Build Something Together</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    Ready to start your project? Reach out to us for a free consultation.
                </p>
            </div>

            <div className="mx-auto mt-12 max-w-xl flex flex-col sm:flex-row gap-6 justify-center">
                <a
                    href="mailto:contact@ryqon.com"
                    className="flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                >
                    <Mail className="h-5 w-5" />
                    Email Us Directly
                </a>
                <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] transition-colors"
                >
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                </a>
            </div>

            <form ref={form} onSubmit={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="user_name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="user_name"
                                id="user_name"
                                autoComplete="given-name"
                                required
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="user_lastname" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="user_lastname"
                                id="user_lastname"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="user_email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="user_email"
                                id="user_email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                required
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                    >
                        {loading ? 'Sending...' : (
                            <>
                                Send Message <Send className="h-4 w-4" />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
