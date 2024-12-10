const Team = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Team Member 1 */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                        <img className="h-32 w-32 rounded-full object-cover mb-4" src="https://via.placeholder.com/150" alt="Team Member 1" />
                        <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
                        <p className="text-gray-600">CEO</p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                        <img className="h-32 w-32 rounded-full object-cover mb-4" src="https://via.placeholder.com/150" alt="Team Member 2" />
                        <h3 className="text-xl font-semibold text-gray-900">Jane Smith</h3>
                        <p className="text-gray-600">Lead Developer</p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                        <img className="h-32 w-32 rounded-full object-cover mb-4" src="https://via.placeholder.com/150" alt="Team Member 3" />
                        <h3 className="text-xl font-semibold text-gray-900">Alice Johnson</h3>
                        <p className="text-gray-600">Project Manager</p>
                    </div>

                    {/* Team Member 4 */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                        <img className="h-32 w-32 rounded-full object-cover mb-4" src="https://via.placeholder.com/150" alt="Team Member 4" />
                        <h3 className="text-xl font-semibold text-gray-900">Bob Lee</h3>
                        <p className="text-gray-600">Designer</p>
                    </div>
                </div>
            </div>
            {/* Gradient background effect */}
            <div
                className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                ></div>
            </div>
        </section>
    );
};

export default Team;
