import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Users, 
  Globe, 
  Shield, 
  Smartphone,
  Headphones,
  Mail,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const Home = () => {
  const businessUnits = [
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Blockchain",
      description: "Secure blockchain solutions for modern businesses",
      link: "#"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "BI & Analytics",
      description: "Business intelligence and data analytics services",
      link: "#"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "VR & AR Solutions",
      description: "Virtual and Augmented Reality implementations",
      link: "#"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Application Development",
      description: "Custom application development services",
      link: "#"
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Digital Services",
      description: "Comprehensive digital transformation solutions",
      link: "#"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "IT Consulting",
      description: "Expert IT consulting and strategic planning",
      link: "#"
    }
  ];

  const jobOpenings = [
    { title: "AI_ML Telecom JD_031021", count: 2 },
    { title: "Integration and Test Engineer for LTE", count: 4 },
    { title: "Sr of Java Full Stack Developer", count: 3 },
    { title: "RF Optimization SME", count: 5 },
    { title: "Technical Recruiter - USA Market remote based", count: 2 }
  ];

  const services = [
    {
      title: "Product Engineering",
      description: "End-to-end product development and engineering solutions"
    },
    {
      title: "Agility in Manufacturing",
      description: "Flexible and responsive manufacturing processes"
    },
    {
      title: "Value Delivery",
      description: "Focused on delivering maximum value to our clients"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center min-h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80")'
          }}
        />
        
        {/* Content */}
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white lg:text-6xl">
              Connected Device for
              <br />
              <span className="text-blue-300">Connected Workforce</span>
              <br />
              Optimized Business
            </h1>
            
            <p className="max-w-2xl mb-8 text-xl text-gray-200">
              Comprehensive infrastructure analysis and communications solutions, tailored to your needs!
            </p>
            
            <p className="mb-12 text-lg text-blue-200">
              Connected Device to Enable Digital - SMB Digitization Data Management for efficient Delivery - NFV
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="flex items-center justify-center px-8 py-4 font-semibold text-white transition-all bg-blue-600 rounded-lg shadow-lg group hover:bg-blue-700 hover:shadow-xl">
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </button>
              <Link
                to="/about"
                className="px-8 py-4 font-semibold text-center text-white transition-all border-2 border-white rounded-lg hover:bg-white hover:text-gray-900"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Right side dots navigation (decorative) */}
        <div className="absolute flex-col hidden space-y-4 transform -translate-y-1/2 right-8 top-1/2 lg:flex">
          {[1, 2, 3, 4].map((dot) => (
            <div 
              key={dot}
              className={`w-3 h-3 rounded-full ${dot === 1 ? 'bg-white' : 'bg-white/30'} cursor-pointer hover:bg-white transition-colors`}
            />
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="flex items-center justify-center p-12 bg-blue-600 rounded-2xl">
                <Play className="w-16 h-16 text-white transition-transform cursor-pointer hover:scale-110" />
              </div>
            </div>
            
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-800">About Us</h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Zuree Telecom was founded in 2011 by experienced telecom professionals. Established as dependable 
                expert for building secure products in Asia. We've been building winning solutions in Asia, 
                America and Middle East since our inception.
              </p>
              <button className="px-8 py-3 font-semibold text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Units Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">Business Units</h2>
            <div className="w-24 h-1 mx-auto bg-blue-600"></div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {businessUnits.map((unit, index) => (
              <div 
                key={index}
                className="p-8 text-center transition-all duration-300 bg-gray-50 rounded-xl hover:shadow-lg hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">
                  {unit.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-800">{unit.title}</h3>
                <p className="mb-6 text-gray-600">{unit.description}</p>
                <a 
                  href={unit.link}
                  className="font-semibold text-blue-600 transition-colors hover:text-blue-700"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-2xl min-h-96"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")'
              }}
            />
            
            <div>
              <h2 className="mb-8 text-4xl font-bold text-gray-800">Zuree Telecom Current Openings</h2>
              <div className="space-y-4">
                {jobOpenings.map((job, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">{job.title}</span>
                    <span className="px-3 py-1 text-sm font-semibold text-gray-600 bg-gray-200 rounded-full">
                      {job.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create, Innovate and Produce Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800">Create, Innovate and Produce</h2>
          <p className="max-w-4xl mx-auto mb-12 text-lg text-gray-600">
            Order works with agile teams Tier 1 OEMs, System Integrators, Thesis driven etc global at 5 locations with 
            modern lean infrastructure and world class knowledge ecosystems. Analytics Imaging-based tools and conditions 
            from other front line modern tech at has led them to try First of its truly online Platform
          </p>
          
          <div className="grid gap-8 mb-12 md:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="p-6 mb-6 bg-blue-50 rounded-xl">
                  <h3 className="mb-3 text-xl font-bold text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-bold text-gray-800">We are ready to help you 24/7</h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 p-4 mx-auto mb-4 bg-blue-100 rounded-full">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 font-bold text-gray-800">Live Chat</h3>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 p-4 mx-auto mb-4 bg-blue-100 rounded-full">
                    <Headphones className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 font-bold text-gray-800">Phone Calls</h3>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 p-4 mx-auto mb-4 bg-blue-100 rounded-full">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 font-bold text-gray-800">Ticket Support</h3>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 p-4 mx-auto mb-4 bg-blue-100 rounded-full">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 font-bold text-gray-800">Mail Support</h3>
                </div>
              </div>
            </div>
            
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-2xl min-h-96"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1553775282-20af80779df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")'
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-6 text-4xl font-bold text-gray-800">
              Great projects start with a great name.
            </h2>
            <button className="px-8 py-4 font-semibold text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600">
              READ MORE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;