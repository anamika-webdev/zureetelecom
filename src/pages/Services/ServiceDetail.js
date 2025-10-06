// src/pages/Services/ServiceDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';

const ServiceDetail = () => {
  const { category } = useParams();
  
  const serviceDetails = {
    mobile: {
      title: "Mobile Services",
      description: "Stay connected with our comprehensive mobile plans featuring unlimited data, nationwide 5G coverage, and premium device selection.",
      plans: [
        {
          name: "Essential",
          price: "$39/month",
          features: ["Unlimited Talk & Text", "25GB High-Speed Data", "Mobile Hotspot", "Basic Support"]
        },
        {
          name: "Premium",
          price: "$59/month",
          features: ["Unlimited Talk & Text", "Unlimited High-Speed Data", "Mobile Hotspot", "International Roaming", "Priority Support"]
        },
        {
          name: "Business",
          price: "$79/month",
          features: ["Everything in Premium", "Business Features", "Dedicated Support", "Device Management"]
        }
      ]
    },
    internet: {
      title: "Internet Plans",
      description: "Experience lightning-fast internet with our fiber-optic network, delivering speeds up to 1Gbps for seamless streaming, gaming, and productivity.",
      plans: [
        {
          name: "Home Basic",
          price: "$49/month",
          features: ["100 Mbps Speed", "Unlimited Data", "Free Installation", "24/7 Support"]
        },
        {
          name: "Home Pro",
          price: "$69/month",
          features: ["500 Mbps Speed", "Unlimited Data", "Wi-Fi Equipment", "Priority Support"]
        },
        {
          name: "Gigabit",
          price: "$99/month",
          features: ["1 Gbps Speed", "Unlimited Data", "Premium Wi-Fi", "White Glove Service"]
        }
      ]
    },
    business: {
      title: "Business Solutions",
      description: "Empower your business with enterprise-grade telecommunications solutions designed to scale with your growth and enhance productivity.",
      plans: [
        {
          name: "Small Business",
          price: "$199/month",
          features: ["VoIP Phone System", "Business Internet", "Email Solutions", "Basic Support"]
        },
        {
          name: "Enterprise",
          price: "$499/month",
          features: ["Advanced VoIP", "Dedicated Internet", "Cloud Services", "Priority Support"]
        },
        {
          name: "Custom",
          price: "Contact Us",
          features: ["Tailored Solutions", "Dedicated Account Manager", "24/7 Premium Support", "SLA Guarantee"]
        }
      ]
    }
  };

  const service = serviceDetails[category];

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">Service Not Found</h1>
          <Link to="/services" className="text-blue-600 hover:text-blue-700">← Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-white bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container px-4 mx-auto">
          <Link to="/services" className="inline-flex items-center mb-8 text-blue-200 hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="mb-6 text-5xl font-bold">{service.title}</h1>
          <p className="max-w-3xl text-xl">{service.description}</p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-gray-800">Choose Your Plan</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {service.plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 ${index === 1 ? 'ring-4 ring-blue-500 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="px-4 py-2 mb-6 text-sm font-semibold text-center text-white bg-blue-500 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="mb-4 text-2xl font-bold text-gray-800">{plan.name}</h3>
                <div className="mb-6 text-4xl font-bold text-blue-600">{plan.price}</div>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Need Help Choosing?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600">
            Our experts are here to help you find the perfect plan for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contact Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
};
export default ServiceDetail;