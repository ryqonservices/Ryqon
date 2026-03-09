import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white pt-24 pb-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <img src="/ryqon_logo_black.svg" alt="Ryqon Digitals Logo" className="h-10 w-auto mb-6" />
                        <p className="text-slate-400 text-lg max-w-sm mb-8">
                            Ryqon Digitals: Build Better. Market Smarter. Grow Faster. We are a specialized team focused on delivering high-impact digital solutions.
                        </p>
                        <div className="flex space-x-4">
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
                                    className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 hover:bg-brand-600 hover:border-brand-500 transition-all group"
                                >
                                    <Icon className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Services', 'Work', 'Process', 'FAQ', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a 
                                        href={item === 'Services' ? '/services' : `/#${item.toLowerCase()}`} 
                                        className="text-slate-400 hover:text-brand-400 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><a href="/privacy-policy" className="text-slate-400 hover:text-brand-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="/terms-and-conditions" className="text-slate-400 hover:text-brand-400 transition-colors">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Ryqon Digitals. All rights reserved.</p>
                    <div className="flex gap-8">
                        <p className="text-slate-500 text-sm flex items-center gap-2">
                            Built with Passion by <span className="text-white font-semibold italic">Ryqon Digitals</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
