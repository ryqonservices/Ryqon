import React from 'react';

const PrivacyPolicy = () => {
    return (
        <section className="bg-white dark:bg-slate-950 py-32">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="card-modern !p-8 sm:!p-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-brand-600 font-bold mb-12">Last updated: February 10, 2026</p>

                    <div className="space-y-12 text-slate-600 dark:text-slate-400 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
                            <p>
                                At Ryqon Digital Solutions, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or contact us for our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Information We Collect</h2>
                            <p className="mb-4">We may collect personal information such as:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Name and contact information</li>
                                <li>Email address and phone number</li>
                                <li>Project details shared through contact forms</li>
                                <li>Basic usage data and analytics</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Data Protection</h2>
                            <p>
                                We take reasonable measures to protect your personal information from unauthorized access, misuse, or disclosure. However, no method of transmission over the internet is 100% secure. We implement best practices in data security to ensure your information remains confidential.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Contact Us</h2>
                            <p>
                                If you have any questions regarding this Privacy Policy, you can contact us at: <a href="mailto:ryqonservices@gmail.com" className="text-brand-600 font-bold hover:underline">ryqonservices@gmail.com</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
