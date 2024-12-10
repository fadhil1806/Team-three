import React from "react";

export default function TaskSubmission() {
    return (
        <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32 bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Submit Your Assignment
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                            Please submit your task by clicking the button below. The deadline is approaching, so do not wait too long!
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-gray-900 dark:bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white hover:text-gray-600 dark:hover:text-gray-400"
                            >
                                Submit Task
                            </button>
                        </div>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 dark:bg-gray-800 p-2 ring-1 ring-white/10">
                                <svg
                                    className="size-6 text-black dark:text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    {/* SVG Path */}
                                </svg>
                            </div>
                            <dt className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
                                Weekly articles
                            </dt>
                            <dd className="mt-2 text-base text-gray-600 dark:text-gray-400">
                                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                            </dd>
                        </div>
                        {/* Repeat for other items */}
                    </dl>
                </div>
            </div>
        </div>
    );
}

