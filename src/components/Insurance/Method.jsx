import { CheckCircle, XCircle, AlertTriangle, Lightbulb, Calendar, Shield, FileText, TrendingUp, DollarSign, Award } from "lucide-react";

export default function Method() {
    const steps = [
        { num: "01", title: "Assess Needs", icon: FileText, color: "blue", desc: "Check state minimums, evaluate car value, consider driving habits" },
        { num: "02", title: "Research Providers", icon: TrendingUp, color: "green", desc: "Get 5-7 quotes, check ratings (A.M. Best, J.D. Power), read reviews" },
        { num: "03", title: "Understand Coverage", icon: Shield, color: "purple", desc: "Learn Liability, Collision, Comprehensive, PIP, Gap Insurance" },
        { num: "04", title: "Gather Documents", icon: FileText, color: "orange", desc: "License, VIN, registration, current insurance, driving records" },
        { num: "05", title: "Compare Quotes", icon: DollarSign, color: "red", desc: "Same limits from each company, check fees, get in writing" },
        { num: "06", title: "Review Policy", icon: CheckCircle, color: "yellow", desc: "Read everything, understand deductibles and exclusions" },
        { num: "07", title: "Purchase & Setup", icon: Award, color: "green", desc: "Choose start date, set auto-pay, download docs, cancel old policy AFTER" }
    ];

    const timeline = [
        { when: "30 Days", action: "Research & gather documents", priority: "High" },
        { when: "14 Days", action: "Request 5-7 quotes", priority: "High" },
        { when: "7 Days", action: "Compare & narrow to top 3", priority: "Medium" },
        { when: "3 Days", action: "Review policy details", priority: "High" },
        { when: "Purchase Day", action: "Confirm active before canceling old", priority: "Critical" }
    ];

    const dos = [
        "Compare 5-7 quotes from different companies",
        "Bundle home + auto for 15-25% savings",
        "Maintain good credit",
        "Ask about ALL discounts",
        "Higher deductibles = lower premiums",
        "Review annually - life changes, coverage should too",
        "Anti-theft devices = 5-15% discount",
        "Defensive driving courses = 5-10% discount",
        "Keep records of all communications",
        "Report claims within 24-48 hours"
    ];

    const donts = [
        "Don't accept first quote",
        "Don't lie on application",
        "Don't let policy lapse",
        "Don't ignore renewal notices",
        "Don't choose minimum coverage to save money",
        "Don't make claims under $1000",
        "Don't skip reading fine print",
        "Don't cancel old before new is active"
    ];

    const risks = [
        { risk: "Premium Increases", desc: "20-40% jump after accident", solution: "Accident forgiveness, pay small damages yourself" },
        { risk: "Coverage Gaps", desc: "1 day gap = 10-30% rate increase", solution: "Auto-pay, start new before canceling old" },
        { risk: "Claim Denials", desc: "10-15% claims denied", solution: "Document everything, report within 24-48hrs" },
        { risk: "Underinsured", desc: "Personal liability for thousands", solution: "Get 100/300/100 minimum, consider umbrella policy" },
        { risk: "Hidden Fees", desc: "$100-300 extra annually", solution: "Ask upfront, pay annually not monthly" }
    ];

    const colors = {
        blue: "from-blue-500 to-blue-600", green: "from-green-500 to-green-600",
        purple: "from-purple-500 to-purple-600", orange: "from-orange-500 to-orange-600",
        red: "from-red-500 to-red-600", yellow: "from-yellow-500 to-yellow-600"
    };

    return (
        <div className="w-full min-h-screen bg-white px-4 md:px-8 lg:pl-[17vw] lg:pr-8 py-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-blue-400 mb-6 ">Procedure to Follow</h1>

            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-4 md:p-6 max-h-[120vh] overflow-y-scroll">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
                    <img 
                        src='/insuproc.webp' 
                        className="w-full h-full object-cover opacity-30 md:opacity-50"
                        alt="Background"
                    />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                    {/* Steps */}
                    <div className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-900 mb-4">Step-by-Step Process</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            {steps.map((step, i) => {
                                const Icon = step.icon;
                                return (
                                    <div key={i} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200 p-3 md:p-4 hover:shadow-md transition-all hover:border-blue-300">
                                        <div className="flex items-start gap-3">
                                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${colors[step.color]} flex items-center justify-center flex-shrink-0`}>
                                                <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-lg md:text-xl font-bold font-serif text-blue-600">{step.num}</span>
                                                    <h3 className="text-base md:text-lg font-bold text-gray-800">{step.title}</h3>
                                                </div>
                                                <p className="text-xs md:text-sm font-bold text-gray-600 dm-serif">{step.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5 md:w-6 md:h-6 text-blue-600 font-serif" /> When to Act
                        </h2>
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 p-3 md:p-4 space-y-2">
                            {timeline.map((item, i) => {
                                const priorityColors = { Critical: "bg-red-500", High: "bg-orange-500", Medium: "bg-yellow-500" };
                                return (
                                    <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                                        <div className="bg-gray-400 text-white px-3 py-1 rounded-md font-bold min-w-[90px] text-center text-xs md:text-sm font-serif">
                                            {item.when}
                                        </div>
                                        <div className={`w-2 h-2 rounded-full ${priorityColors[item.priority]} hidden sm:block flex-shrink-0 dm-serif`}></div>
                                        <p className="text-gray-700 flex-1 text-xs md:text-sm font-medium dm-serif">{item.action}</p>
                                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${priorityColors[item.priority]} text-white font-serif`}>
                                            {item.priority}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Do's and Don'ts */}
                    <div className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 font-serif">Do's and Don'ts</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="bg-green-50/90 backdrop-blur-sm rounded-lg border border-green-200 p-3 md:p-4">
                                <h3 className="text-base md:text-lg font-bold text-green-600 mb-3 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 font-serif" /> What To Do
                                </h3>
                                <ul className="space-y-1.5">
                                    {dos.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-xs dm-serif md:text-sm text-gray-700">
                                            <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-red-50/90 backdrop-blur-sm rounded-lg border border-red-200 p-3 md:p-4">
                                <h3 className="text-base md:text-lg font-bold text-red-600 mb-3 flex items-center gap-2">
                                    <XCircle className="w-4 h-4 md:w-5 md:h-5 font-serif" /> What Not To Do
                                </h3>
                                <ul className="space-y-1.5">
                                    {donts.map((item, i) => (
                                        <li key={i} className="flex dm-serif items-start gap-2 text-xs md:text-sm text-gray-700">
                                            <XCircle className="w-3 h-3 md:w-4 md:h-4 text-red-600 flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Risks & Solutions */}
                    <div className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-orange-600 font-serif" /> Risks & Solutions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {risks.map((item, i) => (
                                <div key={i} className="bg-orange-50/90 backdrop-blur-sm rounded-lg border border-orange-200 p-3 md:p-4">
                                    <h3 className="font-bold text-orange-600 mb-1 text-sm md:text-base font-serif">⚠️ {item.risk}</h3>
                                    <p className="text-xs md:text-sm text-gray-600 mb-2 dm-serif">{item.desc}</p>
                                    <div className="bg-green-50 p-2 rounded border border-green-200">
                                        <div className="flex items-start gap-2">
                                            <Lightbulb className="w-3 h-3 md:w-4 md:h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            <p className="text-xs md:text-sm text-gray-700 font-serif"><strong>Solution:</strong> {item.solution}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pro Tips */}
                    <div className="mb-4">
                        <div className=" bg-blue-400  rounded-lg shadow-lg p-4 md:p-6 text-white">
                            <h2 className="text-lg md:text-2xl font-bold font-serif mb-4 flex items-center gap-2">
                                <Award className="w-5 h-5 md:w-6 md:h-6" /> Expert Pro Tips
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div className="bg-white/20 backdrop-blur-sm p-3 rounded">
                                    <h4 className="font-bold mb-1 text-xs md:text-sm font-serif">💰 Max Savings</h4>
                                    <p className="text-xs dm-serif">Combine 3-4 discounts to save 40-60%</p>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm p-3 rounded">
                                    <h4 className="font-bold mb-1 text-xs md:text-sm font-serif">📱 Use Apps</h4>
                                    <p className="text-xs dm-serif">Usage-based apps save safe drivers 30-40%</p>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm p-3 rounded">
                                    <h4 className="font-bold mb-1 text-xs md:text-sm font-serif">🔄 Review Yearly</h4>
                                    <p className="text-xs dm-serif">Shop every 6-12 months, save $300-800</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
