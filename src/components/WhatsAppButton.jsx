"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = "919000155767";
    const message = "Hi Ryqon Digitals, I'd like to discuss a project.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-10 right-10 z-50 flex items-center justify-center h-16 w-16 bg-green-500 text-white rounded-full shadow-[0_10px_40px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-colors duration-300 group"
            title="Chat on WhatsApp"
        >
            <svg 
                viewBox="0 0 24 24" 
                className="h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M17.472 14.382c-.301-.15-.783-.377-1.106-.554l-1.545-.773c-.15-.075-.3-.15-.45-.15-.301 0-.602.226-.753.452l-.903 1.505c-.15.226-.377.301-.602.301-.15 0-.3 0-.45-.075-1.505-.677-2.709-1.881-3.386-3.386-.075-.15-.075-.3-.075-.45 0-.226.075-.452.301-.602l1.505-.903c.226-.151.452-.452.452-.753 0-.15-.075-.3-.15-.45l-.773-1.545c-.177-.323-.404-.805-.554-1.106-.15-.301-.452-.452-.753-.452-.15 0-.3 0-.45.075L7.2 5.4c-.602.301-1.054 1.13-1.054 2.107 0 .301.075.602.15.903.602 3.01 2.559 5.493 5.342 6.697.301.15.602.15.903.15 1.054 0 1.881-.452 2.257-1.054.075-.15.226-.3.301-.45l.903-1.355c.15-.3.15-.602 0-.903zM12 0C5.373 0 0 5.373 0 12c0 2.112.544 4.092 1.498 5.811L.055 23.44l5.772-1.516C7.514 22.88 9.673 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.023 0-3.905-.601-5.467-1.634l-.391-.259-3.443.904 1.066-3.364-.284-.452C2.43 15.65 1.75 13.882 1.75 12 1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25z"/>
            </svg>
            
            {/* Tooltip */}
            <span className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none scale-90 group-hover:scale-100 origin-right">
                Need Help? Chat with us
            </span>

            {/* Pulsing rings */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-[ping_2s_infinite] opacity-40 pointer-events-none" />
            <span className="absolute inset-0 rounded-full bg-green-500 animate-[ping_3s_infinite] opacity-20 pointer-events-none" />
        </motion.a>
    );
};

export default WhatsAppButton;
