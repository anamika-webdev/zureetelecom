import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">"Excellent service and support!"</p>
            <p className="font-semibold">- John Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">"Fast internet, great prices!"</p>
            <p className="font-semibold">- Jane Smith</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">"Reliable mobile service!"</p>
            <p className="font-semibold">- Mike Johnson</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;