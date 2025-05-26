import React, { Component } from 'react'
import  testi from './testimonials.json'
const Testimonials = () => {
  return (
   
   
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
              What People Say About Us
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testi.map((i, index) => (
                <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                  <p className="text-gray-700 italic">"{i.feedback}"</p>
                  <div className="flex items-center mt-4">
                    <img
                      src={i.image}
                      alt={i.name}
                      className="w-12 h-12 rounded-full border border-gray-300"
                    />
                    <div className="ml-3">
                      <p className="font-semibold text-blue-700">{i.name}</p>
                      <p className="text-sm text-gray-500">{i.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };
    
    
export default Testimonials