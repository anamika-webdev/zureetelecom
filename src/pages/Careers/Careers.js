// src/pages/Careers/Careers.js
import React from 'react';
import { MapPin, Clock, Users, TrendingUp } from 'lucide-react';

const Careers = () => {
  const jobs = [
    {
      title: "AI/ML Telecom Engineer",
      department: "Engineering",
      location: "New York, NY",
      type: "Full-time",
      description: "Join our AI/ML team to develop next-generation telecom solutions."
    },
    {
      title: "Integration and Test Engineer for LTE",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Lead LTE integration and testing initiatives."
    },
    {
      title: "Java Full Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build scalable web applications for our telecom platforms."
    },
    {
      title: "RF Optimization SME",
      department: "Network Operations",
      location: "Dallas, TX",
      type: "Full-time",
      description: "Optimize RF networks for maximum performance and coverage."
    },
    {
      title: "Technical Recruiter - USA Market",
      department: "Human Resources",
      location: "Remote",
      type: "Full-time",
      description: "Recruit top technical talent for our growing team."
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health insurance",
    "Flexible work arrangements",
    "Professional development funds",
    "Unlimited PTO policy",
    "State-of-the-art technology"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-white bg-gradient-to-r from-blue-900 to-purple-700">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold">Join Our Team</h1>
          <p className="max-w-3xl mx-auto text-xl">
            Build the future of telecommunications with us. We're looking for passionate, innovative 
            professionals to help shape the connected world of tomorrow.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-800">Why Work at Zuree Telecom?</h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              We're not just building networks—we're building careers, communities, and the future of communication.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 text-center bg-blue-50 rounded-2xl">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="mb-4 text-xl font-bold text-gray-800">Growth Opportunities</h3>
              <p className="text-gray-600">Advance your career with continuous learning and development programs.</p>
            </div>
            <div className="p-8 text-center bg-green-50 rounded-2xl">
              <Users className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="mb-4 text-xl font-bold text-gray-800">Collaborative Culture</h3>
              <p className="text-gray-600">Work with talented, diverse teams in an inclusive environment.</p>
            </div>
            <div className="p-8 text-center bg-purple-50 rounded-2xl">
              <Clock className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="mb-4 text-xl font-bold text-gray-800">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible schedules and remote work options to fit your lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-gray-800">Benefits & Perks</h2>
          <div className="grid max-w-4xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-4 space-x-3 bg-white rounded-lg shadow">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-gray-800">Open Positions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="p-8 transition-shadow bg-white border border-gray-200 rounded-xl hover:shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-gray-800">{job.title}</h3>
                    <p className="mb-4 text-gray-600">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="px-6 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">Don't See Your Role?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-blue-100">
            We're always looking for talented individuals. Send us your resume and tell us how you'd like to contribute.
          </p>
          <button className="px-8 py-4 font-semibold text-blue-600 transition-colors bg-white rounded-lg hover:bg-gray-100">
            Send Your Resume
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;