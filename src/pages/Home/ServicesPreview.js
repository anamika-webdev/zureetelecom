import React from 'react';

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service cards will go here */}
          <div className="text-center p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Mobile Plans</h3>
            <p>Flexible mobile plans for everyone</p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Internet</h3>
            <p>High-speed fiber internet</p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Business</h3>
            <p>Enterprise solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;