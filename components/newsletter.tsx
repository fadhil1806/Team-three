import React from "react";

export default function TaskSubmission() {
    return (
        <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32 bg-white dark:bg-gray-900">
            {/* Background Decoration */}
            <div 
                className="absolute inset-0 -z-10 bg-cover bg-center opacity-20 dark:opacity-30" 
                style={{ backgroundImage: "url('https://source.unsplash.com/featured/?technology')" }}
            ></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Submit Your Assignment
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                            Stay ahead of your deadlines! Submit your tasks easily and securely by clicking the button below.
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <button
                                type="button"
                                className="group relative flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-purple-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:from-blue-500 hover:to-purple-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                <span className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-10"></span>
                                Submit Task
                            </button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <dt className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white">
                                ✉
                            </dt>
                            <dt className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                                Fast Submission
                            </dt>
                            <dd className="mt-2 text-base text-gray-600 dark:text-gray-400">
                                Submit your tasks quickly with our optimized platform.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <dt className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white">
                                ⏳
                            </dt>
                            <dt className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                                On-Time Delivery
                            </dt>
                            <dd className="mt-2 text-base text-gray-600 dark:text-gray-400">
                                Never miss a deadline with our reminders and notifications.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
