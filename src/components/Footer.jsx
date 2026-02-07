import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold">Ryqon</h3>
                        <p className="text-gray-400 text-sm mt-2">Building digital experiences that matter.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                        <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-8 text-center md:text-left">
                    <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Ryqon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
