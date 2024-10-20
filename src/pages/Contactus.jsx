// import styles from "./Contactus.module.css"
// function Contactus() {
//   return (
//   <body>
    
//     <section className={styles.contact} id="contact">
//         <h2>Contact Us</h2>
//         <p>Reach out to us for any inquiries or feedback.</p>
//         <div class={styles.row}>
//           <div class="information" className={styles.col}>
//             <div class="contact-details">
//               <p><i class="fas fa-map-marker-alt"></i> 123 Prayagraj, Uttar Pradesh, India 121011</p>
//               <p><i class="fas fa-envelope"></i> info@servicescribe.com</p>
//               <p><i class="fas fa-phone"></i> 1234567890</p>
//               <p><i class="fas fa-clock"></i> Monday - Friday: 8:00 AM - 7:00 PM</p>
//               <p><i class="fas fa-clock"></i> Saturday: 9:00 AM - 6:00 PM</p>
//               <p><i class="fas fa-clock"></i> Sunday: Closed</p>
//               <p><i class="fas fa-globe"></i> www.servicescribe.com</p>
//             </div>          
//           </div>
//           <div class="form" className={styles.col} >
//             <form>
//               <input type="text" placeholder="Name*" required/>
//               <input type="email" placeholder="Email*" required/>
//               <textarea placeholder="Message*" required></textarea>
//               <button id="submit" type="submit">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </section>

// </body>
// );
// }
// export default Contactus;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SalesForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companySize: '',
    country: '',
    discussion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-white flex justify-center items-center min-h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-screen max-w-4xl flex">
        <div className="w-1/2 pr-8">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Talk with our team
          </h1>
          <p className="mb-4">
            Fill out your information and our representative will reach out to you. Have a simple question?
            <a className="text-blue-600" href="#">
              <Link to="/faq">Check out our FAQ.</Link>
            </a>
          </p>
        </div>
        <div className="w-1/2 bg-white p-8 rounded-lg shadow">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">First Name *</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="e.g., John"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name *</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Smith"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Company Email *</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="name@company.com"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number *</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="+1 555 655 6566"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Service *</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
              >
                <option value="">Select...</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Area *</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select...</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">What would you like to discuss? *</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Tell us about your team and provide some details about a project or process you would like to track."
                name="discussion"
                value={formData.discussion}
                onChange={handleChange}
              />
            </div>
            <button className="bg-black text-white px-4 py-2 rounded" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SalesForm;
