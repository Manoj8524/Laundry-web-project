import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/images/aboubg.webp";
import teamImage1 from "../assets/images/FN.webp"; // Import your team images
import teamImage2 from "../assets/images/FN.webp"; // Import your team images
import teamImage3 from "../assets/images/FN.webp"; // Import your team images
import {
  CheckCircleIcon,
  TruckIcon,
  ClockIcon,
  HandThumbUpIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import mc from "../assets/images/mc.png";
import eco from "../assets/images/eco.png";
import sb from "../assets/images/sb.png";
import det from "../assets/images/det.png";
import mm from "../assets/video/vi.mp4";

const services = [
  {
    icon: <CheckCircleIcon className="w-6 h-6 text-primary" />,
    title: "Wash & Fold",
    description:
      "Professional washing and folding services for all your garments.",
  },
  {
    icon: <TruckIcon className="w-6 h-6 text-primary" />,
    title: "Pickup & Delivery",
    description: "Convenient door-to-door pickup and delivery options.",
  },
  {
    icon: <ClockIcon className="w-6 h-6 text-primary" />,
    title: "Express Service",
    description: "Quick turnaround for those urgent laundry needs.",
  },
];

const features = [
  {
    icon: <HandThumbUpIcon className="w-8 h-8 text-primary" />,
    title: "Quality Guaranteed",
    description:
      "We use the best detergents and state-of-the-art machines to ensure your clothes are treated with care.",
  },
  {
    icon: <UsersIcon className="w-8 h-8 text-primary" />,
    title: "Expert Staff",
    description:
      "Our team of laundry professionals is trained to handle all types of fabrics and stains.",
  },
  {
    icon: <ClockIcon className="w-8 h-8 text-primary" />,
    title: "Timely Service",
    description:
      "We value your time and always strive to deliver your laundry on schedule.",
  },
  {
    icon: <TruckIcon className="w-8 h-8 text-primary" />,
    title: "Convenient Solutions",
    description:
      "With our pickup and delivery service, doing laundry has never been easier.",
  },
];

const team = [
  { name: "Jane Doe", role: "Founder & CEO", image: teamImage1 },
  { name: "John Smith", role: "Operations Manager", image: teamImage2 },
  { name: "Emily Brown", role: "Customer Service Lead", image: teamImage3 },
];

export default function AboutPage() {
  const navigate = useNavigate(); 

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto shadow-lg rounded-lg bg-neutral-50">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[500px] rounded-t-lg">
  <video
    src={mm}
    autoPlay
    loop
    muted
    playsInline
    className="object-cover w-full h-full rounded-t-lg"
  />
  <div className="absolute inset-x-0 top-0 flex flex-col items-center justify-center text-white px-6 text-center h-full">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-title">We're reimagining</h1>
    <h2 className="text-2xl md:text-3xl lg:text-4xl">laundry and dry cleaning.</h2>
    <p className="mt-2 text-sm md:text-base lg:text-lg">Bringing hassle-free laundry & dry cleaning services.</p>
    <div className="flex space-x-4 mt-4">
        <button
                  onClick={() => navigate("/prices")}
                  className="bg-primary text-white rounded-md px-4 py-2 lg:px-6 lg:py-3 lg:text-lg"
                >
                  View Packages
                </button>

      <button 
      onClick={() => navigate("/contact")}
               className="bg-none text-primary rounded-md px-4 py-2 lg:px-6 lg:py-3 lg:text-lg">Contact Us</button>
    </div>
  </div>
</div>


          {/* Image Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-6 my-8">
            {[eco, det, mc].map((img, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-md bg-neutral-50 shadow-md p-4"
              >
                <img
                  src={img}
                  alt={`Laundry ${idx + 1}`}
                  className="rounded-md w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-cover"
                />
                <p className="mt-2 text-center text-sm sm:text-base">
                  {idx === 0 && "Eco friendly solutions"}
                  {idx === 1 && "Quality detergents"}
                  {idx === 2 && "Certified machinery"}
                </p>
              </div>
            ))}
          </div>

          {/* Large Image */}
          <div className="py-6 rounded-b-lg bg-bg-neutral-50 flex justify-center">
            <img
              src={sb}
              alt="Other Services"
              className="rounded-md w-full max-w-4xl object-cover"
            />
          </div>
        </div>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Services
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg">
                  <div className="p-6">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2010, CleanPress has been at the forefront of the
                  laundry industry, providing top-notch services to our valued
                  customers.
                </p>
                <p className="text-gray-700 mb-4">
                  We've grown from a small local shop to a trusted name in
                  laundry services, all while maintaining our commitment to
                  quality, sustainability, and customer satisfaction.
                </p>
              </div>
              <div className="relative h-64 md:h-full">
                <img
                  src={bg}
                  alt="CleanPress Laundry Facility"
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose CleanPress?
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 text-primary flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Meet Our Team
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg">
                  <div className="p-6 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-700">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
