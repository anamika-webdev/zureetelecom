import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import styles
import './styles/globals.css';

// Enhanced Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'Home', 'About Us', 'Our Services', 'Communities', 'Our Blogs', 'Contact Us', 'Login'
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className={`relative overflow-hidden transition-all duration-500 transform hover:scale-110 ${
              isScrolled 
                ? 'bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl' 
                : 'glass-card p-3 rounded-xl'
            }`}>
              <div className="relative z-10">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
            <div className={`transition-colors duration-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <h1 className="text-2xl font-bold">Zuree Telecom</h1>
              <p className="text-sm opacity-75">Connected Solutions</p>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="items-center hidden space-x-1 lg:flex">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl group-hover:opacity-20"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button 
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-0 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute top-5 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="p-6 glass-card rounded-2xl">
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-3 font-medium text-gray-700 transition-all duration-300 rounded-xl hover:text-blue-600 hover:bg-blue-50"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

// Enhanced Home Component
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="animate-"]');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const businessUnits = [
    { 
      title: "Blockchain", 
      description: "Next-generation blockchain solutions for secure and transparent business operations",
      icon: "🔗",
      color: "from-purple-500 to-pink-500"
    },
    { 
      title: "BI & Analytics", 
      description: "Advanced business intelligence and data analytics for informed decision making",
      icon: "📊",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "VR & AR Solutions", 
      description: "Immersive virtual and augmented reality experiences for modern businesses",
      icon: "🥽",
      color: "from-green-500 to-emerald-500"
    },
    { 
      title: "Application Development", 
      description: "Custom application development with cutting-edge technologies and frameworks",
      icon: "💻",
      color: "from-orange-500 to-red-500"
    },
    { 
      title: "Digital Services", 
      description: "Comprehensive digital transformation services for the modern enterprise",
      icon: "🌐",
      color: "from-indigo-500 to-purple-500"
    },
    { 
      title: "IT Consulting", 
      description: "Expert IT consulting and strategic technology planning for business growth",
      icon: "🚀",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const jobOpenings = [
    { title: "AI_ML Telecom JD_031021", count: 2, type: "Full-time", location: "Remote" },
    { title: "Integration and Test Engineer for LTE", count: 4, type: "Full-time", location: "New York" },
    { title: "Sr Java Full Stack Developer", count: 3, type: "Full-time", location: "San Francisco" },
    { title: "RF Optimization SME", count: 5, type: "Contract", location: "Austin" },
    { title: "Technical Recruiter - USA Market", count: 2, type: "Full-time", location: "Remote" }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: "🎯" },
    { number: "50+", label: "Global Clients", icon: "🌍" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
    { number: "24/7", label: "Support Available", icon: "🛟" }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-transparent to-purple-900/80"></div>
          
          {/* Floating Elements */}
          <div className="absolute w-20 h-20 rounded-full top-20 left-10 bg-blue-500/20 animate-bounce-slow"></div>
          <div className="absolute w-16 h-16 rounded-full top-40 right-20 bg-purple-500/20 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute w-12 h-12 rounded-full bottom-40 left-20 bg-cyan-500/20 animate-bounce-slow" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Title with Typewriter Effect */}
            <div className="mb-8">
              <h1 className="mb-6 text-6xl font-bold leading-tight text-white lg:text-8xl animate-slideInDown">
                Connected Device for
              </h1>
              <h2 className="mb-6 text-5xl font-bold lg:text-7xl gradient-text typewriter">
                Connected Workforce
              </h2>
              <h3 className="text-4xl font-bold text-white lg:text-6xl animate-fadeInUp">
                Optimized Business
              </h3>
            </div>
            
            <p className="max-w-4xl mx-auto mb-8 text-2xl leading-relaxed text-gray-200 animate-fadeInUp" style={{animationDelay: '0.5s'}}>
              Comprehensive infrastructure analysis and communications solutions, tailored to your needs!
            </p>
            
            <p className="mb-12 text-lg text-blue-200 animate-fadeInUp" style={{animationDelay: '0.7s'}}>
              Connected Device to Enable Digital - SMB Digitization Data Management for efficient Delivery - NFV
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col justify-center gap-6 sm:flex-row animate-fadeInUp" style={{animationDelay: '1s'}}>
              <button className="btn-primary group">
                <span className="flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Demo
                </span>
              </button>
              <button className="btn-secondary group">
                <span className="flex items-center justify-center">
                  Explore Solutions
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 mt-16 lg:grid-cols-4 animate-fadeInUp" style={{animationDelay: '1.2s'}}>
              {stats.map((stat, index) => (
                <div key={index} className="p-6 text-center glass-card hover-lift">
                  <div className="mb-2 text-3xl">{stat.icon}</div>
                  <div className="mb-2 text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm font-medium text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Dots */}
        <div className="absolute flex-col hidden space-y-4 transform -translate-y-1/2 right-8 top-1/2 lg:flex">
          {[0, 1, 2, 3].map((dot) => (
            <button
              key={dot}
              onClick={() => setCurrentSlide(dot)}
              className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                currentSlide === dot 
                  ? 'bg-white shadow-lg shadow-white/50' 
                  : 'bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <div className="w-6 h-10 p-1 border-2 rounded-full border-white/30">
            <div className="w-1 h-3 mx-auto bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced About Us Section */}
      <section id="animate-about" className={`section-padding bg-gradient-to-br from-gray-50 to-blue-50 ${isVisible['animate-about'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="flex items-center justify-center p-16 transition-all duration-500 cursor-pointer bg-gradient-to-br from-blue-600 to-purple-600 hover-glow group">
                  <div className="text-white transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 transition-transform duration-1000 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full"></div>
              </div>
              
              {/* Floating Elements Around Video */}
              <div className="absolute w-20 h-20 bg-orange-500 rounded-full -top-6 -right-6 opacity-20 animate-pulse"></div>
              <div className="absolute w-16 h-16 bg-blue-500 rounded-full -bottom-4 -left-4 opacity-30 animate-bounce-slow"></div>
            </div>
            
            <div>
              <h2 className="mb-8 text-5xl font-bold text-gray-800 gradient-text">About Us</h2>
              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                Zuree Telecom was founded in 2011 by experienced telecom professionals. Established as dependable 
                expert for building secure products in Asia. We've been building winning solutions in 
                <span className="font-semibold text-blue-600"> Asia, America and Middle East</span> since our inception.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4 text-center glass-card rounded-2xl">
                  <div className="text-3xl font-bold text-blue-600">12+</div>
                  <div className="font-medium text-gray-600">Years Experience</div>
                </div>
                <div className="p-4 text-center glass-card rounded-2xl">
                  <div className="text-3xl font-bold text-purple-600">3</div>
                  <div className="font-medium text-gray-600">Continents</div>
                </div>
              </div>
              
              <button className="relative px-10 py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl hover:shadow-2xl hover:scale-105 group">
                <span className="relative z-10">READ MORE</span>
                <div className="absolute inset-0 transition-transform duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-red-500 to-orange-500 group-hover:scale-x-100"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Business Units Section */}
      <section id="animate-services" className={`section-padding bg-white ${isVisible['animate-services'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
        <div className="container px-4 mx-auto">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-5xl font-bold text-gray-800">Business Units</h2>
            <div className="w-32 h-2 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Comprehensive solutions across multiple technology domains to drive your business forward
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {businessUnits.map((unit, index) => (
                              <div 
                key={index}
                className="relative overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-3xl hover:shadow-2xl floating-card"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${unit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative p-8 text-center">
                  <div className="mb-6 text-6xl animate-bounce-slow">{unit.icon}</div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-800 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                    {unit.title}
                  </h3>
                  <p className="mb-8 leading-relaxed text-gray-600">{unit.description}</p>
                  
                  <div className="flex items-center justify-center">
                    <button className="flex items-center font-semibold text-blue-600 transition-colors duration-300 transform hover:text-purple-600 group-hover:scale-110">
                      Learn More 
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Hover Gradient Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${unit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{padding: '2px'}}>
                  <div className="w-full h-full bg-white rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Current Openings Section */}
      <section id="animate-jobs" className={`section-padding bg-gradient-to-br from-gray-900 to-blue-900 ${isVisible['animate-jobs'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div 
                className="relative overflow-hidden rounded-3xl min-h-96 group"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-br from-blue-600/80 to-purple-600/80 group-hover:from-blue-500/70 group-hover:to-purple-500/70"></div>
                
                {/* Floating Stats */}
                <div className="absolute p-4 top-6 right-6 glass-card rounded-2xl">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-blue-200">Open Positions</div>
                </div>
                
                <div className="absolute p-4 bottom-6 left-6 glass-card rounded-2xl">
                  <div className="text-2xl font-bold text-white">Global</div>
                  <div className="text-sm text-blue-200">Opportunities</div>
                </div>
              </div>
            </div>
            
            <div className="text-white">
              <h2 className="mb-8 text-5xl font-bold text-white">
                Zuree Telecom <span className="gradient-text">Current Openings</span>
              </h2>
              
              <div className="space-y-4">
                {jobOpenings.map((job, index) => (
                  <div 
                    key={index} 
                    className="p-6 transition-all duration-300 cursor-pointer glass-card rounded-2xl hover:bg-white/20 group"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-blue-300">
                        {job.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 text-sm font-semibold text-blue-200 rounded-full bg-blue-500/30">
                          {job.count} positions
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
                        </svg>
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="mt-8 btn-primary">
                <span className="flex items-center">
                  View All Positions
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Innovation Section */}
      <section id="animate-innovation" className={`section-padding bg-white bg-dots ${isVisible['animate-innovation'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-5xl font-bold text-gray-800">Create, Innovate and Produce</h2>
          <p className="max-w-5xl mx-auto mb-16 text-xl leading-relaxed text-gray-600">
            Order works with agile teams Tier 1 OEMs, System Integrators, Thesis driven etc global at 5 locations with 
            modern lean infrastructure and world class knowledge ecosystems. Analytics Imaging-based tools and conditions 
            from other front line modern tech at has led them to try First of its truly online Platform
          </p>
          
          <div className="grid gap-8 mb-16 md:grid-cols-3">
            {[
              { title: "Product Engineering", desc: "End-to-end product development solutions", icon: "⚙️" },
              { title: "Agility in Manufacturing", desc: "Flexible and responsive manufacturing processes", icon: "🏭" },
              { title: "Value Delivery", desc: "Focused on delivering maximum value to our clients", icon: "🎯" }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="relative p-10 transition-all duration-500 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl hover:shadow-2xl floating-card">
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 group-hover:opacity-100 rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 text-5xl animate-bounce-slow">{service.icon}</div>
                    <h3 className="mb-4 text-2xl font-bold text-gray-800 transition-all duration-300 group-hover:gradient-text">
                      {service.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">{service.desc}</p>
                  </div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 group-hover:opacity-100" style={{padding: '2px'}}>
                    <div className="w-full h-full bg-white rounded-3xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Support Section */}
      <section id="animate-support" className={`section-padding bg-gradient-to-br from-gray-50 to-blue-50 ${isVisible['animate-support'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-5xl font-bold text-gray-800">
                We are ready to help you <span className="gradient-text">24/7</span>
              </h2>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: "💬", title: "Live Chat", desc: "Instant support via chat" },
                  { icon: "📞", title: "Phone Calls", desc: "Direct phone support" },
                  { icon: "🎫", title: "Ticket Support", desc: "Structured ticket system" },
                  { icon: "📧", title: "Mail Support", desc: "Email-based assistance" }
                ].map((support, index) => (
                  <div key={index} className="text-center group">
                    <div className="flex items-center justify-center w-20 h-20 p-6 mx-auto mb-4 transition-all duration-300 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl group-hover:scale-110 group-hover:shadow-lg">
                      <span className="text-3xl">{support.icon}</span>
                    </div>
                    <h3 className="mb-2 font-bold text-gray-800 transition-colors group-hover:text-blue-600">{support.title}</h3>
                    <p className="text-sm text-gray-600">{support.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="p-8 mt-12 glass-card rounded-3xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="mb-2 text-xl font-bold text-gray-800">Average Response Time</h4>
                    <p className="text-gray-600">We respond within minutes, not hours</p>
                  </div>
                  <div className="text-4xl font-bold gradient-text">
                    
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="relative overflow-hidden bg-center bg-no-repeat bg-cover rounded-3xl min-h-96 group"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1553775282-20af80779df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")'
                }}
              >
                <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30"></div>
                
                {/* Floating Support Indicators */}
                <div className="absolute p-4 top-6 left-6 glass-card rounded-2xl animate-pulse">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-white">Online Now</span>
                  </div>
                </div>
                
                <div className="absolute p-4 bottom-6 right-6 glass-card rounded-2xl">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-32 h-32 rounded-full top-10 left-10 bg-blue-500/10 animate-bounce-slow"></div>
          <div className="absolute w-24 h-24 rounded-full top-40 right-20 bg-purple-500/10 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute w-20 h-20 rounded-full bottom-20 left-1/4 bg-cyan-500/10 animate-bounce-slow" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-6xl font-bold text-white animate-fadeInUp">
              Great projects start with a <span className="gradient-text">great name</span>.
            </h2>
            
            <p className="mb-12 text-xl text-gray-300 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Ready to transform your business with cutting-edge technology solutions? Let's build something amazing together.
            </p>
            
            <div className="flex flex-col justify-center gap-6 sm:flex-row animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <button className="relative px-12 py-5 overflow-hidden text-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl hover:shadow-2xl hover:scale-105 group">
                <span className="relative z-10 flex items-center justify-center">
                  START YOUR PROJECT
                  <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 transition-transform duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-red-500 to-orange-500 group-hover:scale-x-100"></div>
              </button>
              
              <button className="px-12 py-5 text-xl font-bold text-white transition-all duration-300 border-2 border-white rounded-2xl hover:bg-white hover:text-gray-900 hover:scale-105">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Enhanced Footer
const Footer = () => (
  <footer className="text-white bg-gradient-to-br from-gray-900 to-black">
    <div className="container px-4 py-16 mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Enhanced Company Sections */}
        {[
          {
            title: "Web Application",
            items: ["Digital Marketing", "B2C Application", "CRM Application", "Staff Augmentation Services", "Staff Augmentation Staffing"]
          },
          {
            title: "Data Visualization",
            items: ["Social Media Marketing", "Digital Marketing", "Search Marketing", "Brand Marketing", "Social Management"]
          },
          {
            title: "1st Generation",
            items: ["Networking and WI-FI", "BI & Analytics", "VR & AR Solutions", "Application Development", "Robotic Process Automation"]
          },
          {
            title: "Contact Info",
            items: ["Our Services", "Privacy & Policy", "Communities", "Our Blogs", "Contact Us"]
          }
        ].map((section, index) => (
          <div key={index}>
            <h3 className="mb-6 text-xl font-bold gradient-text">{section.title}</h3>
            <ul className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a href="#" className="inline-block text-gray-300 transition-all duration-300 hover:text-blue-400 hover:translate-x-2">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Enhanced Footer Bottom */}
      <div className="pt-8 mt-16 border-t border-gray-800">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="flex items-center mb-4 space-x-4 lg:mb-0">
            <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold">Zuree Telecom</div>
              <div className="text-sm text-gray-400">Connected Solutions</div>
            </div>
          </div>
          
          <div className="text-center lg:text-right">
            <p className="mb-2 text-sm text-gray-400">
              © Copyright 2024 Zuree Telecom. All rights reserved
            </p>
            <p className="text-xs text-gray-500">
              Developed By Incredible Solutions Group Limited
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// Layout and other components remain the same but enhanced
const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

// Simple enhanced page components
const About = () => (
  <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container px-4 py-20 mx-auto text-center">
      <h1 className="mb-8 text-5xl font-bold gradient-text animate-fadeInUp">About Zuree Telecom</h1>
      <p className="max-w-4xl mx-auto text-xl leading-relaxed text-gray-600 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
        Founded in 2011 by experienced telecom professionals, Zuree Telecom has established itself 
        as a dependable expert for building secure products in Asia, America, and the Middle East.
        We continue to innovate and deliver world-class telecommunications solutions.
      </p>
    </div>
  </div>
);

const Contact = () => (
  <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container px-4 py-20 mx-auto">
      <div className="max-w-2xl mx-auto">
        <h1 className="mb-8 text-5xl font-bold text-center gradient-text animate-fadeInUp">Contact Us</h1>
        <div className="p-10 glass-card rounded-3xl animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-6 py-4 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full px-6 py-4 transition-all border border-gray-300 resize-none rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
            <button className="w-full py-5 text-xl btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const Login = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900">
    <div className="w-full max-w-md p-10 glass-card rounded-3xl animate-scaleIn">
      <h2 className="mb-8 text-4xl font-bold text-center text-white">Welcome Back</h2>
      <form className="space-y-6">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-6 py-4 text-white transition-all border border-white/20 rounded-xl bg-white/10 placeholder-white/60 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-6 py-4 text-white transition-all border border-white/20 rounded-xl bg-white/10 placeholder-white/60 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button className="w-full py-4 text-lg btn-primary">
          Sign In
        </button>
      </form>
    </div>
  </div>
);

const NotFound = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="text-center animate-scaleIn">
      <h1 className="mb-6 font-bold text-9xl gradient-text">404</h1>
      <h2 className="mb-6 text-3xl font-bold text-gray-800">Page Not Found</h2>
      <p className="mb-8 text-gray-600">The page you're looking for doesn't exist.</p>
      <a href="/" className="inline-flex items-center btn-primary">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Go Home
      </a>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
                