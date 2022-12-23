import React from "react";
import pexel1 from "../assets/pexels-andrea.jpg";
import pexel2 from "../assets/pexels-balljinder.jpg";
import pexel3 from "../assets/pexels-pavel.jpg";
import pexel4 from "../assets/pexels-tim.jpg";

import wallet from "../assets/wallets-africa.svg";
import crowdForce from "../assets/cforce.svg";
import cowryWise from "../assets/cowrywise.svg";
import thrive from "../assets/thrive.svg";
import bankly from "../assets/bankly.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurPartners = () => {
  let settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    fade: true,
    autoplay: true,
  };

  return (
    <section id="partners" className="mt-28">
      <h2
        id="how-it-works"
        className="text-primary-base dark:text-[#6489d0] text-center font-bold text-xl lg:text-3xl mb-10"
      >
        Our Partners{" "}
      </h2>
      <div className="flex flex-col gap-10 max-w-[1000px] mx-auto px-5 md:px-10">
        <Slider {...settings}>
          <div className="item !flex flex-col md:flex-row !rounded-xl bg-white !shadow-sm overflow-hidden">
            <div className="w-full sm:w-[400px]">
              <img
                className="h-80 min-h-full w-full object-cover"
                src={pexel1}
                alt="pexels"
              />
            </div>
            <div className="flex flex-col md:pl-14 px-5 sm:px-10 md:px-24  py-10 md:py-16 max-w-[550px] text-sm">
              <span>
                <svg
                  width="58"
                  height="41"
                  viewBox="0 0 58 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.4167 0L12.25 16.3333H24.5V40.8333H0V16.3333L8.16667 0H20.4167ZM53.0833 0L44.9167 16.3333H57.1667V40.8333H32.6667V16.3333L40.8333 0H53.0833Z"
                    fill="#FDB515"
                  ></path>
                </svg>
              </span>
              <p className="mt-5 text-[13px] opacity-60 leading-relaxed">
                dweller is currently solving one of the biggest challenges we
                had in collecting payments. The innovation has drastically
                helped us improve our efficiency as a business.
              </p>
              <div className="mt-10">
                <p className="text-sm font-semibold">Edward Popoola</p>
                <p className="text-xs opacity-50">CTO - CirlceWind</p>
              </div>
            </div>
          </div>
          <div className="item !flex flex-col md:flex-row !rounded-xl bg-white !shadow-sm overflow-hidden">
            <div className="w-full sm:w-[400px]">
              <img
                className="h-80 min-h-full w-full object-cover"
                src={pexel3}
                alt="pexels"
              />
            </div>
            <div className="flex flex-col md:pl-14 px-5 sm:px-10 md:px-24  py-10 md:py-16 max-w-[550px] text-sm">
              <span>
                <svg
                  width="58"
                  height="41"
                  viewBox="0 0 58 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.4167 0L12.25 16.3333H24.5V40.8333H0V16.3333L8.16667 0H20.4167ZM53.0833 0L44.9167 16.3333H57.1667V40.8333H32.6667V16.3333L40.8333 0H53.0833Z"
                    fill="#FDB515"
                  ></path>
                </svg>
              </span>
              <p className="mt-5 text-[13px] opacity-60 leading-relaxed">
                dweller is Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Quisquam corporis quos repudiandae fuga doloremque sint
                placeat..
              </p>
              <div className="mt-10">
                <p className="text-sm font-semibold">Edward Popoola</p>
                <p className="text-xs opacity-50">CTO - CirlceWind</p>
              </div>
            </div>
          </div>
          <div className="item !flex flex-col md:flex-row !rounded-xl bg-white !shadow-sm overflow-hidden">
            <div className="w-full sm:w-[400px]">
              <img
                className="h-80 min-h-full w-full object-cover"
                src={pexel2}
                alt="pexels"
              />
            </div>
            <div className="flex flex-col md:pl-14 px-5 sm:px-10 md:px-24  py-10 md:py-16 max-w-[550px] text-sm">
              <span>
                <svg
                  width="58"
                  height="41"
                  viewBox="0 0 58 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.4167 0L12.25 16.3333H24.5V40.8333H0V16.3333L8.16667 0H20.4167ZM53.0833 0L44.9167 16.3333H57.1667V40.8333H32.6667V16.3333L40.8333 0H53.0833Z"
                    fill="#FDB515"
                  ></path>
                </svg>
              </span>
              <p className="mt-5 text-[13px] opacity-60 leading-relaxed">
                dweller is currently solving one of the biggest challenges we
                had in collecting payments. The innovation has drastically
                helped us improve our efficiency as a business.
              </p>
              <div className="mt-10">
                <p className="text-sm font-semibold">Edward Popoola</p>
                <p className="text-xs opacity-50">CTO - CirlceWind</p>
              </div>
            </div>
          </div>
          <div className="item !flex flex-col md:flex-row !rounded-xl bg-white !shadow-sm overflow-hidden">
            <div className="w-full sm:w-[400px]">
              <img
                className="h-80 min-h-full w-full object-cover"
                src={pexel4}
                alt="pexels"
              />
            </div>
            <div className="flex flex-col md:pl-14 px-5 sm:px-10 md:px-24  py-10 md:py-16 max-w-[550px] text-sm">
              <span>
                <svg
                  width="58"
                  height="41"
                  viewBox="0 0 58 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.4167 0L12.25 16.3333H24.5V40.8333H0V16.3333L8.16667 0H20.4167ZM53.0833 0L44.9167 16.3333H57.1667V40.8333H32.6667V16.3333L40.8333 0H53.0833Z"
                    fill="#FDB515"
                  ></path>
                </svg>
              </span>
              <p className="mt-5 text-[13px] opacity-60 leading-relaxed">
                dweller is currently solving one of the biggest challenges we
                had in collecting payments. The innovation has drastically
                helped us improve our efficiency as a business.
              </p>
              <div className="mt-10">
                <p className="text-sm font-semibold">Edward Popoola</p>
                <p className="text-xs opacity-50">CTO - CirlceWind</p>
              </div>
            </div>
          </div>
        </Slider>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          <div className="w-[140px] h-[65px] px-5 py-3 border rounded-md shadow-sm cursor-pointer">
            <img className="w-full h-full" src={wallet} alt="wallet" />
          </div>
          <div className="w-[140px] h-[65px] px-5 py-3 border rounded-md shadow-sm cursor-pointer">
            <img className="w-full h-full" src={crowdForce} alt="crowdForce" />
          </div>
          <div className="w-[140px] h-[65px] px-5 py-3 border rounded-md shadow-sm cursor-pointer">
            <img className="w-full h-full" src={thrive} alt="thrive" />
          </div>
          <div className="w-[140px] h-[65px] px-5 py-3 border rounded-md shadow-sm cursor-pointer">
            <img className="w-full h-full" src={bankly} alt="bankly" />
          </div>
          <div className="w-[140px] h-[65px] px-5 py-3 border rounded-md shadow-sm cursor-pointer">
            <img className="w-full h-full" src={cowryWise} alt="cowryWise" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
