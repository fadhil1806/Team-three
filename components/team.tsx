// import { FaUserCircle, FaCode, FaTasks, } from "react-icons/fa";

import { FaCode, FaTasks, FaUserCircle } from "react-icons/fa";

// const Team = () => {
//     return (
//         <section className="relative isolate overflow-hidden bg-gray-50 py-16 sm:py-24 lg:py-32">
//             <div className="mx-auto max-w-7xl px-6 lg:px-8">
//                 <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {/* Team Member 1 */}
//                     <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
//                         <div className="bg-green-500 text-white p-4 rounded-full mb-4">
//                             <FaCode size={32} />
//                         </div>
//                         <h3 className="text-xl font-semibold text-gray-900">Fadhil Rabbani</h3>
//                         <p className="text-gray-600">Back End</p>
//                     </div>

//                     {/* Team Member 2 */}
//                     <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
//                         <div className="bg-green-500 text-white p-4 rounded-full mb-4">
//                             <FaCode size={32} />
//                         </div>
//                         <h3 className="text-xl font-semibold text-gray-900">Hafith M Fauzan</h3>
//                         <p className="text-gray-600">Front End</p>
//                     </div>

//                     {/* Team Member 3 */}
//                     <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
//                         <div className="bg-yellow-500 text-white p-4 rounded-full mb-4">
//                             <FaTasks size={32} />
//                         </div>
//                         <h3 className="text-xl font-semibold text-gray-900">Sahrul Romadhon</h3>
//                         <p className="text-gray-600">Dashboard</p>
//                     </div>

//                     {/* Team Member 4 */}
//                     <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
//                         <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
//                             <FaUserCircle size={32} />
//                         </div>
//                         <h3 className="text-xl font-semibold text-gray-900">Muhammad Ibrahim</h3>
//                         <p className="text-gray-600">Form Developer</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Team;

const Team = () => {
    return (
        <section className="relative isolate overflow-hidden bg-gray-50 dark:bg-gray-900 py-16 sm:py-24 lg:py-32" id="team">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
                        <div className="bg-green-500 text-white p-4 rounded-full mb-4">
                            <FaCode size={32} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Fadhil Rabbani</h3>
                        <p className="text-gray-600 dark:text-gray-400">Lead Front-End & Back-End</p>
                    </div>
                    <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
                        <div className="bg-green-500 text-white p-4 rounded-full mb-4">
                            <FaCode size={32} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Muhammad Ibrahim</h3>
                        <p className="text-gray-600 dark:text-gray-400">Front-End</p>
                    </div>
                    <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
                        <div className="bg-green-500 text-white p-4 rounded-full mb-4">
                            <FaTasks size={32} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Hafith M Fauzan</h3>
                        <p className="text-gray-600 dark:text-gray-400">Front-End</p>
                    </div>
                    <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
                        <div className="bg-green-500 text-white p-4 rounded-full mb-4">
                            <FaUserCircle size={32} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Sahrul Romadhon</h3>
                        <p className="text-gray-600 dark:text-gray-400">Front-End</p>
                    </div>

            

                 

                </div>
            </div>
        </section>
    );
};

export default Team