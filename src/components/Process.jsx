import React from 'react';
import { Lightbulb, Cog, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
    {
        name: 'Understand Requirements',
        description: 'We start by listening to your ideas and understanding your business goals tailored to your specific needs.',
        icon: Lightbulb,
    },
    {
        name: 'Design & Develop',
        description: 'Our team creates a roadmap and builds your product using agile methodologies, ensuring transparency.',
        icon: Cog,
    },
    {
        name: 'Deliver & Support',
        description: 'We launch your product and provide ongoing support to ensure it continues to perform optimally.',
        icon: CheckCircle,
    },
];

const Process = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32" id="process">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">How We Work</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Simple 3-Step Process
                    </p>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {steps.map((step, index) => (
                        <div key={step.name} className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm ring-1 ring-gray-200 dark:ring-gray-700">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white mb-6">
                                <step.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white mb-2 text-center">{step.name}</h3>
                            <p className="text-base leading-7 text-gray-600 dark:text-gray-300 text-center">{step.description}</p>
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                    <ArrowRight className="h-6 w-6 text-gray-300 dark:text-gray-600" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Process;
