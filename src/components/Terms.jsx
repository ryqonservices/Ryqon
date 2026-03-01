"use client";
import React, { useEffect } from 'react';

const Terms = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="bg-white dark:bg-slate-950 py-32 min-h-screen">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="card-modern !p-8 sm:!p-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
                        Terms & Conditions
                    </h1>
                    <p className="text-brand-600 font-bold mb-8">Last updated: 10 February, 2026</p>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 border-b border-slate-100 dark:border-slate-800 pb-12">
                            Welcome to Ryqon Digital Solutions. By accessing or using our website and services, you agree to be bound by the following Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.
                        </p>

                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. About Us</h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Ryqon Digital Solutions provides digital services including, but not limited to, web development, mobile app development, and digital marketing services. All services are offered on a project or contract basis unless stated otherwise.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Use of Website</h2>
                                <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                                    <li>The content on this website is for general information purposes only.</li>
                                    <li>You agree not to misuse the website or attempt to disrupt its functionality.</li>
                                    <li>Unauthorized use of this website may give rise to a claim for damages.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Services & Scope</h2>
                                <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                                    <li>All services are provided based on mutually agreed project scope, timelines, and pricing.</li>
                                    <li>Any changes to the scope of work after project initiation may require additional time and cost.</li>
                                    <li>Ryqon Digital Solutions reserves the right to refuse or discontinue services if misuse, non-cooperation, or unethical practices are involved.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Payments & Pricing</h2>
                                <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                                    <li>Payments must be made as per the agreed terms before or during project execution.</li>
                                    <li>Delays in payment may result in delays or suspension of services.</li>
                                    <li>All fees paid are non-refundable unless explicitly stated in writing.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Intellectual Property</h2>
                                <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                                    <li>All designs, code, content, and materials created by Ryqon Digital Solutions remain our intellectual property until full payment is received.</li>
                                    <li>Once payment is completed, ownership of final deliverables is transferred to the client, unless otherwise agreed.</li>
                                    <li>We reserve the right to showcase completed work in our portfolio unless restricted by a confidentiality agreement.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Client Responsibilities</h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">Clients agree to:</p>
                                <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                                    <li>Provide accurate information, content, and approvals on time.</li>
                                    <li>Cooperate during the project lifecycle to avoid delays.</li>
                                    <li>Ensure that any materials provided do not violate third-party rights.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Limitation of Liability</h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">Ryqon Digital Solutions shall not be liable for:</p>
                                <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                                    <li>Any indirect, incidental, or consequential damages.</li>
                                    <li>Loss of data, revenue, or business arising from the use of our services.</li>
                                    <li>Third-party tools, platforms, or services used during project execution (e.g., hosting, ad platforms, analytics tools).</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Third-Party Services</h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Our services may involve third-party platforms such as Meta, Google, hosting providers, or analytics tools. We are not responsible for changes, downtime, or policies imposed by these platforms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Confidentiality</h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    We respect client confidentiality and will not share sensitive information unless required by law or permitted by the client.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">10. Termination</h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Either party may terminate services with written notice. Any work completed up to the termination date must be paid for as agreed.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">11. Changes to Terms</h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Ryqon Digital Solutions reserves the right to modify these Terms & Conditions at any time. Updates will be reflected on this page.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">12. Governing Law</h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    These terms shall be governed and interpreted in accordance with the laws of India.
                                </p>
                            </section>

                            <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 mt-16">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">13. Contact Us</h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">
                                    For any questions regarding these Terms & Conditions, please contact us at:
                                </p>
                                <a
                                    href="mailto:ryqonservices@gmail.com"
                                    className="text-brand-600 dark:text-brand-400 font-bold hover:underline"
                                >
                                    ryqonservices@gmail.com
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Terms;
