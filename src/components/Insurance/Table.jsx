import { useSelector } from "react-redux";

export default function Table() {
    const insuranceCompany = useSelector((state) => state.insuranceCompany || []);

    const columns = [
        "Logo",
        "Company",
        "Pay",
        "Claims",
        "Rating",
        "Satisfaction",
        "Coverage"
    ];

    return (
        <div className="w-full min-h-screen bg-blue-50 px-2 sm:px-4 md:px-8 lg:pl-[5vw] py-6 sm:py-8 md:py-12 flex flex-col items-center gap-4 sm:gap-6 md:gap-8">

            {/* Heading */}
            <div className="text-center">
                <h1 className="inline-block border-2 border-gray-500 rounded-lg sm:rounded-2xl md:rounded-3xl px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-lg">
                    <span className="text-lg sm:text-2xl md:text-3xl lg:text-5xl bg-gradient-to-r from-blue-800 via-cyan-300 to-blue-500 bg-clip-text text-transparent font-bold font-serif">Insurance <span className='text-gray-600 block sm:inline'>|   OverViews</span> </span> 
                </h1>
            </div>

            {/* Desktop Table View - Hidden on mobile */}
            <div className="hidden md:block w-full overflow-x-auto rounded-lg md:rounded-xl lg:rounded-2xl shadow-xl">
                <table className="w-full border-collapse min-w-[800px] bg-white">
                    {/* Header */}
                    <thead className="sticky top-0 z-10">
                        <tr>
                            {columns.map((col, colIndex) => (
                                <th
                                    key={col}
                                    className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm md:text-base font-serif font-bold text-gray-800
                                        ${colIndex % 2 === 0 ? "bg-blue-200" : "bg-white/70"}
                                    `}
                                >
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {insuranceCompany.map((item) => (
                            <tr
                                key={item.id}
                                className="hover:bg-blue-100 transition-colors border-b border-blue-100"
                            >
                                <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-blue-50">
                                    <img
                                        src={item.logo}
                                        alt={item.company}
                                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                                    />
                                </td>
                                <td className="px-3 sm:px-4 dm-serif md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-semibold text-gray-800 bg-blue-100/60">
                                    {item.company}
                                </td>
                                <td className="px-3 sm:px-4 md:px-6 dm-serif py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-medium text-gray-700 bg-blue-50">
                                    {item.pay}
                                </td>
                                <td className="px-3 sm:px-4 md:px-6 dm-serif py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-medium text-gray-700 bg-blue-100/60">
                                    {item.given}
                                </td>
                                <td className="px-3 sm:px-4 md:px-6 dm-serif py-2 sm:py-3 md:py-4 bg-blue-50">
                                    <span className="flex items-center gap-1 text-xs sm:text-sm md:text-base font-semibold">
                                        <span className="text-yellow-500">⭐</span>
                                        {item.rating}
                                    </span>
                                </td>
                                <td className="px-3 sm:px-4 md:px-6 dm-serif py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-extrabold text-green-600 bg-blue-100/60">
                                    {item.satisfactory}
                                </td>
                                <td className="px-3 sm:px-4 md:px-6 dm-serif py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-medium text-gray-700 bg-blue-50">
                                    {item.offering}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View - Only visible on mobile */}
            <div className="md:hidden w-full space-y-3 sm:space-y-4">
                {insuranceCompany.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100/50">
                        {/* Company Header */}
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-blue-50">
                            <div className="flex-shrink-0 bg-blue-50 rounded-lg sm:rounded-xl p-1.5 sm:p-2 border border-blue-100">
                                <img
                                    src={item.logo}
                                    alt={item.company}
                                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-serif text-base sm:text-lg font-bold text-gray-900 truncate">{item.company}</h3>
                                <div className="flex items-center gap-1 mt-1">
                                    <span className="text-yellow-500 text-sm">⭐</span>
                                    <span className="dm-serif text-xs sm:text-sm font-semibold text-gray-700">{item.rating}</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            {/* Pay */}
                            <div className="bg-blue-50/50 rounded-lg p-2 sm:p-3">
                                <p className="dm-serif text-xs sm:text-sm text-gray-600 font-medium mb-1">Pay</p>
                                <p className="dm-serif text-sm sm:text-base font-semibold text-gray-800">{item.pay}</p>
                            </div>
                            
                            {/* Claims */}
                            <div className="bg-blue-100/40 rounded-lg p-2 sm:p-3">
                                <p className="dm-serif text-xs sm:text-sm text-gray-600 font-medium mb-1">Claims</p>
                                <p className="dm-serif text-sm sm:text-base font-semibold text-gray-800">{item.given}</p>
                            </div>
                            
                            {/* Satisfaction */}
                            <div className="bg-green-50/60 rounded-lg p-2 sm:p-3">
                                <p className="dm-serif text-xs sm:text-sm text-gray-600 font-medium mb-1">Satisfaction</p>
                                <p className="dm-serif text-sm sm:text-base font-extrabold text-green-600">{item.satisfactory}</p>
                            </div>
                            
                            {/* Coverage */}
                            <div className="bg-blue-50/50 rounded-lg p-2 sm:p-3">
                                <p className="dm-serif text-xs sm:text-sm text-gray-600 font-medium mb-1">Coverage</p>
                                <p className="dm-serif text-sm sm:text-base font-semibold text-gray-800">{item.offering}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}