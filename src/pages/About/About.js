// src/pages/About/About.js
import React from 'react';
import { Users, Award, Globe, TrendingUp, Shield, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Reliability",
      description: "Delivering consistent, dependable service you can count on 24/7."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Innovation",
      description: "Leading the industry with cutting-edge technology and solutions."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Customer First",
      description: "Your satisfaction and success are our top priorities."
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Global Reach",
      description: "Connecting communities worldwide with seamless communications."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "15+ years in telecommunications leadership"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Expert in network infrastructure and 5G technology"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Customer Experience",
      bio: "Dedicated to exceptional customer service excellence"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-white bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold">About Zuree Telecom</h1>
          <p className="max-w-3xl mx-auto text-xl">
            For over a decade, we've been at the forefront of telecommunications innovation, 
            connecting people and businesses with reliable, cutting-edge communication solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-800">Our Mission</h2>
              <p className="mb-8 text-lg text-gray-600">
                To provide world-class telecommunications services that connect communities, 
                enable digital transformation, and empower businesses to thrive in an 
                increasingly connected world.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="w-12 h-12 text-blue-600" />
                <div>
                  <h3 className="font-bold text-gray-800">Industry Leader</h3>
                  <p className="text-gray-600">Recognized for excellence and innovation</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-blue-50 rounded-2xl">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted telecommunications provider, enabling seamless 
                connectivity and digital experiences that improve lives and drive economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">Our Values</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="p-6 text-center bg-white shadow-lg rounded-xl">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">Leadership Team</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Meet the experienced professionals leading Zuree Telecom into the future.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <div key={index} className="p-8 text-center bg-white shadow-lg rounded-xl">
                <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="mb-3 font-medium text-blue-600">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;