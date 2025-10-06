// src/pages/Services/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Wifi, Building, Smartphone, Cloud, Network } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'mobile',
      icon: <Phone className="w-12 h-12" />,
      title: "Mobile Services",
      description: "Comprehensive mobile plans with unlimited data, nationwide 5G coverage, and the latest devices.",
      features: ["Unlimited Data", "5G Network", "International Roaming", "Device Protection"],
      price: "Starting at $39/month"
    },
    {
      id: 'internet',
      icon: <Wifi className="w-12 h-12" />,
      title: "Internet Plans",
      description: "High-speed fiber internet for homes and businesses with speeds up to 1Gbps.",
      features: ["Fiber Optic", "Up to 1Gbps Speed", "24/7 Support", "Free Installation"],
      price: "Starting at $49/month"
    },
    {
      id: 'business',
      icon: <Building className="w-12 h-12" />,
      title: "Business Solutions",
      description: "Enterprise-grade communication solutions designed for growing businesses.",
      features: ["Dedicated Lines", "VoIP Systems", "Cloud Services", "Priority Support"],
      price: "Custom Pricing"
    },
    {
      id: 'devices',
      icon: <Smartphone className="w-12 h-12" />,
      title: "Device Management",
      description: "Latest smartphones, tablets, and accessories with flexible payment options.",
      features: ["Latest Models", "Device Protection", "Trade-in Programs", "Financing Options"],
      price: "Various Options"
    },
    {
      id: 'cloud',
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Services",
      description: "Secure cloud storage and computing solutions for modern businesses.",
      features: ["Secure Storage", "Backup Solutions", "Collaboration Tools", "Scalable Plans"],
      price: "Starting at $29/month"
    },
    {
      id: 'network',
      icon: <Network className="w-12 h-12" />,
      title: "Network Infrastructure",
      description: "Custom network design and implementation for enterprise clients.",
      features: ["Custom Design", "24/7 Monitoring", "Maintenance", "Consultation"],
      price: "Enterprise Pricing"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-white bg-gradient-to-r from-blue-900 to-purple-700">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold">Our Services</h1>
          <p className="max-w-3xl mx-auto text-xl">
            Comprehensive telecommunications solutions designed to meet the needs of individuals, 
            families, and businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="p-8 transition-all bg-white shadow-xl rounded-2xl hover:shadow-2xl hover:-translate-y-2">
                <div className="mb-6 text-blue-600">{service.icon}</div>
                <h3 className="mb-4 text-2xl font-bold text-gray-800">{service.title}</h3>
                <p className="mb-6 text-gray-600">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="mb-3 font-semibold text-gray-800">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="mr-2 text-green-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="block w-full px-6 py-3 font-semibold text-center text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Services;