"use client"
import React, { useState } from 'react';

const CallToAction = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleForm = () => setFormVisible(!isFormVisible);

  return (
    <div
      id="cta"
      className=" px-4 py-12 text-center bg-gradient-to-r from-blue-400 to-blue-200 text-white"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Ready to Book Your Session?
      </h2>
      <p className="text-lg mb-8">
        Start your journey to relaxation and renewal today!
      </p>
      <button
        onClick={toggleForm}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg"
      >
        Book a Session
      </button>

      {isFormVisible && (
        <div className="mt-8 bg-white text-black p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Booking Form</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Preferred Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CallToAction;
