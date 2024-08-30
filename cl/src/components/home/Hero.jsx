import React from "react";
import { Link } from "react-router-dom";

import HeroImage from "../../assets/images/landing-img.png";

const Hero = () => {
	return (
		<div className="bg-lighter-blue">
			<div className="max-w-screen-2xl mx-auto min-h-90 px-4 flex justify-between items-center">
				<div
					data-aos-offset="500"
					className="flex flex-col items-start -mt-20 flex-wrap"
				>
					<h1
						className="text-4xl lg:text-7xl font-extrabold pb-5"
						data-aos-delay="0"
						data-aos="fade-up-right"
					>
						Save Time for more Important Things
					</h1>
					<p
						className="text-xl lg:text-2xl font-semibold pb-4 text-gray-400"
						data-aos-delay="100"
						data-aos="fade-up-right"
					>
						We'll take care all your cleanings
					</p>
					<Link
						data-aos-delay="200"
						data-aos="fade-up-right"
						className="bg-[#11B4F5] text-white py-3 px-6 sm:py-4 sm:px-8 md:py-4 md:px-12 lg:py-4 lg:px-14 rounded-full mt-6 sm:mt-8 font-semibold text-sm sm:text-base md:text-lg lg:text-lg transition-colors duration-300 hover:bg-[#9DD6F7]"
						to="/auth/register"
					>
						Get Started
					</Link>
				</div>
				<div data-aos="fade-down-left" data-aos-offset="200">
					<img src={HeroImage} alt="hero-img" className="transform scale-135" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
