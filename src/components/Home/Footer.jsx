import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert(`Thanks for subscribing with ${email}!`);
        setEmail('');
    };

    return (
        <footer className="w-full rounded-4xl text-white py-8 sm:py-12 lg:py-16
       bg-[url('/footer.png')]
      bg-cover bg-center sm:bg-[50%_-20%] bg-fixed
      bg-no-repeat 
      relative
      
        ">
             <div className="absolute inset-0 bg-blue-400/40 backdrop-blur-sm rounded-4xl" />
             
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">

                    {/* Brand */}
                    <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-2">
                          
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif">Gari Sheba</h2>
                        </div>
                        <p className="text-gray-100 text-sm sm:text-base lg:text-lg dm-serif leading-relaxed">
                            Your trusted partner. Delivering reliable services anytime, anywhere.
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <p className="text-green-300 text-xs sm:text-sm font-semibold dm-serif">Available 24/7</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-serif mb-3 sm:mb-4 lg:mb-6">Our Motto</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {['A1 Services', 'Great Deals', 'Safe Routes', 'Secured Journey'].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-gray-100 dm-serif hover:text-amber-400 transition-colors text-sm sm:text-base flex items-center gap-2 group">
                                        <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Developer */}
                    <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-serif mb-3 sm:mb-4 lg:mb-6">Developer</h3>
                        <div className="space-y-3 sm:space-y-4">
                            <div>
                                <p className="text-white font-semibold text-base sm:text-lg dm-serif">
                                    Afiujjaman Mursalin
                                </p>
                                <p className="text-gray-200 text-xs sm:text-sm dm-serif">
                                    Full Stack Developer
                                </p>
                            </div>
                            <a 
                                href="https://afiujjaman.netlify.app/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs sm:text-sm lg:text-base bg-blue-600 hover:bg-blue-700 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg dm-serif font-semibold"
                            >
                                View Portfolio
                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-serif mb-3 sm:mb-4 lg:mb-6">Stay Updated</h3>
                        <p className="text-gray-100 text-xs sm:text-sm mb-3 sm:mb-4 dm-serif">Subscribe for updates and announcements.</p>
                        <form onSubmit={handleSubscribe} className="flex flex-col gap-2 sm:gap-3">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white/20 text-sm sm:text-base transition-all"
                                required
                            />
                            <button 
                                type="submit"
                                className="bg-amber-300 hover:bg-amber-400 text-gray-900 dm-serif font-semibold px-4 py-2 sm:py-2.5 rounded-lg transition-all duration-300 text-sm sm:text-base hover:shadow-lg transform hover:scale-105"
                            >
                                Subscribe Now
                            </button>
                        </form>

                        {/* Social Links */}
                        <div className="mt-4 sm:mt-6">
                            <p className="text-gray-200 text-xs sm:text-sm mb-2 sm:mb-3">Follow Us</p>
                            <div className="flex gap-2 sm:gap-3">
                                {[
                                    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                                    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                                    { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' }
                                ].map((social) => (
                                    <button
                                        key={social.name}
                                        className="p-2 sm:p-2.5 bg-white/10 hover:bg-amber-400 rounded-lg transition-all duration-300 hover:scale-110"
                                        aria-label={social.name}
                                    >
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={social.icon} />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t-3 border-white/90">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                        <p className="text-gray-100 text-xs sm:text-sm lg:text-base dm-serif text-center sm:text-left">
                            © 2024 Gari Sheba. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm lg:text-base">
                            <a href="#" className="text-gray-100 hover:text-amber-400 transition-colors dm-serif">Privacy Policy</a>
                            <span className="text-gray-400">•</span>
                            <a href="#" className="text-gray-100 hover:text-amber-400 transition-colors dm-serif">Terms of Service</a>
                            <span className="text-gray-400">•</span>
                            <a href="#" className="text-gray-100 hover:text-amber-400 transition-colors dm-serif">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
