import { useNavigate } from "react-router-dom";

export default function Fuel() {
    const navigator = useNavigate();

    function Navigate() {
        navigator('/fuel');
    }

    return (
        <div className="
            w-full h-auto min-h-[160vh] relative overflow-hidden
            bg-[url('/fuelGraph.webp')]
            bg-cover bg-[50%_65%] bg-fixed
            bg-no-repeat rounded-4xl
        ">
            {/* blur + dark overlay */}
            <div className="absolute inset-0 bg-gray-700/40 backdrop-blur-sm" />

            {/* content */}
            <div className="relative z-10 flex flex-col justify-center items-center gap-6 md:gap-10 w-full h-full px-4 sm:px-6 md:px-8 lg:px-10 py-10 md:py-0">
                {/* Section heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-blue-200 text-center px-4">
                    Track Fuel Updation
                </h1>

                {/* Cards container */}
                <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-8 p-4 md:p-0">
                    {/* Card 1 */}
                    <div className="h-auto min-h-[300px] w-full lg:w-[90%] xl:w-[32%] rounded-3xl md:rounded-4xl border-2 border-r-white flex flex-col justify-center items-center p-4 md:p-6 transition-all hover:scale-[1.02] lg:hover:scale-105">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mb-3 border-b-2 border-white/50 pb-2 text-center">
                            Ups and Down
                        </h2>
                        <p className="text-white text-center dm-serif text-base sm:text-lg md:text-base lg:text-lg">
                            Track and visualize all the rises and drops in fuel prices over time with detailed, easy-to-read charts, helping you spot trends, compare periods, and make informed decisions efficiently.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="h-auto min-h-[300px] w-full lg:w-[90%] xl:w-[32%] rounded-3xl md:rounded-4xl border-2 border-r-white flex flex-col justify-center items-center p-4 md:p-6 transition-all hover:scale-[1.02] lg:hover:scale-105">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mb-3 border-b-2 border-white/50 pb-2 text-center">
                            Graphical Data
                        </h2>
                        <p className="text-white text-center dm-serif text-base sm:text-lg md:text-base lg:text-lg">
                            Monitor monthly detailed raw data, uncover patterns, analyze trends, and make smarter decisions to optimize consumption and reduce unnecessary costs effectively.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="h-auto min-h-[300px] w-full lg:w-[90%] xl:w-[32%] rounded-3xl md:rounded-4xl border-2 border-r-white flex flex-col justify-center items-center p-4 md:p-6 transition-all hover:scale-[1.02] lg:hover:scale-105">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mb-3 border-b-2 border-white/50 pb-2 text-center">
                            Information
                        </h2>
                        <p className="text-white text-center dm-serif text-base sm:text-lg md:text-base lg:text-lg">
                            Use historical fuel data to accurately forecast future needs, anticipate demand changes, prevent shortages, and make smarter decisions that ensure consistent supply and efficient resource management over time.
                        </p>
                    </div>
                </div>

                {/* Button */}
                <div className="w-full sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[15%] h-[50px] sm:h-[60px] md:h-[5%] min-h-[50px] bg-blue-200 flex justify-center items-center rounded-3xl md:rounded-4xl transition-all duration-300 ease-out hover:bg-blue-400 hover:scale-[1.02] lg:hover:scale-105 hover:shadow-lg mt-4 md:mt-0">
                    <button className="text-extrabold text-lg sm:text-xl dm-serif w-full h-full" onClick={Navigate}>
                        Have A View
                    </button>
                </div>
            </div>
        </div>
    );
}