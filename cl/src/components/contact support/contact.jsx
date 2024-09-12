import React from 'react';
import { FaGlobe, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaGooglePlusG, FaDribbble, FaPinterestP } from 'react-icons/fa';

const ContactPageSection = () => {
  return (
    <section className="contact-page-section py-28">
      <div className="container mx-auto">
        <div className="sec-title text-center pb-10">
          <div className="title text-[#11B4F5] text-lg font-bold mb-4">Contact Us</div>
          <h2 className="text-gray-800 text-4xl font-bold">Let's Get in Touch.</h2>
        </div>

        <div className="inner-container bg-[#11B4F5] p-10 shadow-lg rounded-lg relative z-10">
          <div className="row flex flex-wrap -mx-4">
            
            {/* Form Column */}
            <div className="form-column w-full md:w-2/3 px-4">
              <div className="inner-column bg-white p-10 rounded-lg">
                {/* Contact Form */}
                <div className="contact-form">
                  <form method="post" action="sendemail.php" id="contact-form">
                    <div className="flex flex-wrap -mx-2">
                      <div className="form-group w-full md:w-1/2 px-2 mb-4">
                        <input type="text" name="name" placeholder="Name" required 
                          className="w-full h-14 p-4 border border-gray-300 focus:border-[#11B4F5] rounded" />
                      </div>
                      <div className="form-group w-full md:w-1/2 px-2 mb-4">
                        <input type="email" name="email" placeholder="Email" required 
                          className="w-full h-14 p-4 border border-gray-300 focus:border-[#11B4F5] rounded" />
                      </div>
                      <div className="form-group w-full md:w-1/2 px-2 mb-4">
                        <input type="text" name="subject" placeholder="Subject" required 
                          className="w-full h-14 p-4 border border-gray-300 focus:border-[#11B4F5] rounded" />
                      </div>
                      <div className="form-group w-full md:w-1/2 px-2 mb-4">
                        <input type="text" name="phone" placeholder="Phone" required 
                          className="w-full h-14 p-4 border border-gray-300 focus:border-[#11B4F5] rounded" />
                      </div>
                      <div className="form-group w-full px-2 mb-4">
                        <textarea name="message" placeholder="Message" 
                          className="w-full h-64 p-4 border border-gray-300 focus:border-[#11B4F5] rounded resize-none"></textarea>
                      </div>
                      <div className="form-group w-full px-2">
                        <button type="submit" className="theme-btn bg-[#11B4F5] text-white py-4 px-10 rounded font-bold hover:bg-transparent hover:text-[#11B4F5] border-2 border-[#11B4F5] transition">
                          Send Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* End Contact Form */}
              </div>
            </div>
            
            {/* Info Column */}
            <div className="info-column w-full md:w-1/3 px-4 mt-10 md:mt-0">
              <div className="inner-column text-white p-10">
                <h2 className="text-2xl font-bold mb-10">Contact Info</h2>
                <ul className="list-info mb-10">
                  <li className="mb-6 flex items-start">
                    <FaGlobe className="h-6 w-6 text-white mr-4" />
                    <span>123 lorem ispum Abc, Street Chandigarh.</span>
                  </li>
                  <li className="mb-6 flex items-start">
                    <FaEnvelope className="h-6 w-6 text-white mr-4" />
                    <span>example@test</span>
                  </li>
                  <li className="flex items-start">
                    <FaPhone className="h-6 w-6 text-white mr-4" />
                    <span>1-234-567-890 <br /> 1-234-567-890</span>
                  </li>
                </ul>
                <ul className="social-icon-four flex items-center">
                  <li className="follow font-bold text-2xl mr-6">Follow on:</li>
                  <li><a href="#" className="text-white hover:text-gray-900 transition mr-4"><FaFacebookF className="h-6 w-6" /></a></li>
                  <li><a href="#" className="text-white hover:text-gray-900 transition mr-4"><FaTwitter className="h-6 w-6" /></a></li>
                  <li><a href="#" className="text-white hover:text-gray-900 transition mr-4"><FaGooglePlusG className="h-6 w-6" /></a></li>
                  <li><a href="#" className="text-white hover:text-gray-900 transition mr-4"><FaDribbble className="h-6 w-6" /></a></li>
                  <li><a href="#" className="text-white hover:text-gray-900 transition"><FaPinterestP className="h-6 w-6" /></a></li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageSection;
