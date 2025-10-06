import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const benefits = [
    "Ultra-fast 5G Network",
    "24/7 Customer Support",
    "No Hidden Fees",
    "Easy Device Management"
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-blue-600 text-blue-100 px-4 py-2 rounded-full text-sm font-medium">
                  🚀 New 5G Network Available
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Connect Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Digital Life
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                Experience lightning-fast internet, reliable mobile services, and seamless device 
                connectivity with Zuree Telecom's cutting-edge technology.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="group bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Explore Plans</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-blue-200 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-blue-200 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-blue-200 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              {/* Smartphone mockup */}
              <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  {/* Phone screen content */}
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 h-full flex flex-col">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                      <span>9:41</span>
                      <span>●●●●● 5G</span>
                    </div>
                    
                    {/* App content */}
                    <div className="flex-1 px-6 py-4 space-y-4">
                      <h3 className="text-white text-xl font-bold">Zuree App</h3>
                      
                      {/* Data usage card */}
                      <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
                        <div className="text-white text-sm mb-2">Data Usage This Month</div>
                        <div className="text-white text-2xl font-bold">15.2 GB</div>
                        <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mt-2">
                          <div className="bg-white h-2 rounded-full w-3/4"></div>
                        </div>
                      </div>
                      
                      {/* Services grid */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white bg-opacity-20 rounded-xl p-3 backdrop-blur-sm">
                          <div className="text-white text-sm">Internet</div>
                          <div className="text-white font-semibold">1 Gbps</div>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-xl p-3 backdrop-blur-sm">
                          <div className="text-white text-sm">Mobile</div>
                          <div className="text-white font-semibold">Unlimited</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-2xl shadow-lg animate-bounce">
                <div className="text-sm font-bold">5G</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-2xl shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                <div className="text-sm font-bold">WiFi 6</div>
              </div>
            </div>

            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-30 scale-110"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;