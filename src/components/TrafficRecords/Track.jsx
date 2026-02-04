export default function Track() {
    return (
        <div className="min-h-[110vh] w-full flex flex-col justify-center items-center overflow-hidden py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-0">
            
            {/* Header */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif bg-gradient-to-r from-blue-800 via-cyan-300 to-blue-500 bg-clip-text text-transparent mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
                Get Traffic Infos
            </h1>

            <div className='w-full max-w-7xl flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-2 sm:px-4 md:px-6'>
                
                {/* First Section - Red Theme: Traffic Statistics */}
                <div className="w-full h-auto md:h-[33vh] flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
                    <span className="w-full md:w-[65%] h-auto md:h-full text-sm sm:text-base md:text-lg font-medium dm-serif text-red-800 bg-red-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-l-4 border-red-500 shadow-lg">
                         <span className="text-lg sm:text-xl md:text-2xl text-red-600 font-bold">Track traffic records</span> in real-time. Monitor accident rates, congestion levels, and traffic flow patterns across different zones. Our system provides detailed analytics including peak hour data, average vehicle speeds, and road utilization metrics to help authorities make informed decisions for traffic management and infrastructure planning.
                    </span>
                    
                    <div className="w-full md:w-[35%] h-[250px] sm:h-[300px] md:h-full flex justify-center items-center">
                        <img
                            src='/trafficRecords.gif'
                            className="w-full h-full rounded-xl sm:rounded-2xl border-4 border-red-400 object-cover shadow-xl"
                            alt="Real-time Traffic Statistics Dashboard"
                        />
                    </div>
                </div>

                {/* Second Section - Amber Theme: Fines & Violations */}
                <div className="w-full h-auto md:h-[33vh] flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-4 sm:gap-6 md:gap-8">
                    <span className="w-full md:w-[65%] h-auto md:h-full text-sm sm:text-base md:text-lg font-medium dm-serif text-amber-900 bg-amber-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-r-4 border-amber-500 shadow-lg">
                        <span className="text-lg sm:text-xl md:text-2xl text-amber-600 font-bold">Track traffic fines</span> and violations with complete transparency. View detailed records of speeding tickets, signal violations, parking fines, and other traffic offenses. The system automatically updates payment statuses, sends reminders for pending fines, and maintains a history of all violations. Citizens can verify their records while authorities can efficiently manage enforcement activities.
                    </span>
                    
                    <div className="w-full md:w-[35%] h-[250px] sm:h-[300px] md:h-full flex justify-center items-center">
                        <img
                            src='/trafficFines.webp'
                            className="w-full h-full rounded-xl sm:rounded-2xl border-4 border-amber-500 object-cover shadow-xl"
                            alt="Traffic Fines Management System"
                        />
                    </div>
                </div>

                {/* Third Section - Violet Theme: Case Management */}
                <div className="w-full h-auto md:h-[33vh] flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
                    <span className="w-full md:w-[65%] h-auto md:h-full text-sm sm:text-base md:text-lg font-medium dm-serif text-violet-900 bg-violet-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-l-4 border-violet-500 shadow-lg">
                        <span className="text-lg sm:text-xl md:text-2xl text-violet-600 font-bold">Track cases</span> and legal proceedings through our centralized case management system. Track case status, scheduled court dates, assigned officers, and document submissions. The platform enables seamless coordination between traffic police, courts, and legal departments while maintaining complete audit trails for all case-related activities and decisions.
                    </span>
                    
                    <div className="w-full md:w-[35%] h-[250px] sm:h-[300px] md:h-full flex justify-center items-center">
                        <img
                            src='/trafficCase.webp'
                            className="w-full h-full rounded-xl sm:rounded-2xl border-4 border-violet-300 object-cover shadow-xl"
                            alt="Traffic Case Tracking System"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
