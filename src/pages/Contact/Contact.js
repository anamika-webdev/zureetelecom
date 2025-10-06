
// src/pages/Contact/Contact.js
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "info@zureetelecom.com",
      description: "Send us an email anytime"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      info: "123 Telecom Ave, New York, NY 10001",
      description: "Visit our headquarters"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      info: "24/7 Support Available",
      description: "We're always here to help"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-white bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-xl">
            Get in touch with our team. We're here to help you with all your telecommunications needs.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 mb-16 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="p-6 text-center bg-white shadow-lg rounded-xl">
                <div className="flex justify-center mb-4 text-blue-600">{info.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-gray-800">{info.title}</h3>
                <p className="mb-2 font-semibold text-blue-600">{info.info}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-white shadow-xl rounded-2xl">
              <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 font-medium text-gray-700">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe how we can help you..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;