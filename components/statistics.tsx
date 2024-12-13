const Statistics = () => {
    return (
        <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base/7 text-gray-600 dark:text-gray-400">Total Subjects</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                            44
                        </dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base/7 text-gray-600 dark:text-gray-400">Total Students</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                            70 Person
                        </dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base/7 text-gray-600 dark:text-gray-400">Total Teachers</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                            10
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default Statistics