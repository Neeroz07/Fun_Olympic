import React, { useState } from 'react';
import contactImg from './contact-img.svg';
import 'animate.css';


const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here if needed
    // ...
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="bg-dry py-12" id="connect">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="w-6/12">
            <img
              className="animate__animated animate__zoomIn"
              src={contactImg}
              alt="Contact Us"
            />
          </div>
          <div className="w-full">
            <div className="animate__animated animate__fadeIn">
              <h2 className="text-3xl font-semibold mb-6 text-star text-center">Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-text text-star"
                  />
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                    className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-text text-star"
                  />
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                    className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-text text-star"
                  />
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                    className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-text text-star"
                  />
                </div>
                <textarea
  rows="6"
  value={formDetails.message}
  placeholder="Message"
  onChange={(e) => onFormUpdate('message', e.target.value)}
  className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-text mb-4 w-full text-star" // Add "w-full" class
></textarea>

<button
  type="submit"
  className="bg-subMain text-white py-2 px-5 rounded mx-auto flex w-20" // Add "mx-auto block" classes
>
  Send
</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
