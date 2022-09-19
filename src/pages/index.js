import React, { useEffect, useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

import globe from "../assets/Globe_qi8why.png";
import keyOfferings from "../assets/KeyOfferings_y9gh8q.png";
import monnifyLogo from "../assets/monnify.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pexel1 from "../assets/pexels-andrea.jpg";
import pexel2 from "../assets/pexels-balljinder.jpg";
import pexel3 from "../assets/pexels-pavel.jpg";
import pexel4 from "../assets/pexels-tim.jpg";

import wallet from "../assets/wallets-africa.svg";
import crowdForce from "../assets/cforce.svg";
import cowryWise from "../assets/cowrywise.svg";
import thrive from "../assets/thrive.svg";
import bankly from "../assets/bankly.svg";

import dwellerLogo from "../assets/dweller-logo.png";

const Index = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const navigate = useNavigate();

  const hamburger = useRef(null);
  const closeBtn = useRef(null);
  const mobileHeader = useRef(null);

  let settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    fade: true,
    autoplay: true,
  };

  function toggleOpenNav() {
    setOpenMobileNav((prev) => !prev);
  }

  useEffect(() => {
    let listener = document.addEventListener("scroll", () => {
      setScrollHeight(window.scrollY);
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <div>
      <div
        id="app"
        className="h-full w-full overflow-x-hidden text-sm sm:text-base"
      >
        <div className="h-[1px] mt-[1px] lg:mt-8"></div>
        <header>
          <div
            className={`hidden desktop-md:block sticky top-0 py-3 ${
              scrollHeight > 50 &&
              "bg-[#fffc]/90 border-b !z-10 !fixed !w-full !py-2"
            } backdrop-filter backdrop-blur-xl transition-all duration-400 before:w-full before:absolute before:bottom-0 before:left-0 before:bg-divider dark:before:bg-divider-d before:transition-opacity before:opacity-0`}
          >
            <div className="px-4 lg:px-16 flex items-center justify-between">
              <a href="#/">
                <img
                  className="translate-y-[18px] w-36"
                  src={dwellerLogo}
                  alt="Dweller"
                  data-rjs="2"
                  width="110px"
                />
              </a>
              <nav>
                <ul className="flex items-center space-x-11">
                  <li>
                    <a href="https://www.getcommune.co/#about-us">About Us</a>
                  </li>
                  <li>
                    <a href="https://www.getcommune.co/#key-offerings">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getcommune.co/#contact-us">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
              <button
                onClick={() => navigate("/payment")}
                type="button"
                className="bg-customBlue fill-before px-10 py-4 text-white text-lg rounded-lg font-semibold cursor-pointer"
                data-v-682d5bac=""
              >
                {" "}
                Get Early Access{" "}
              </button>
            </div>
          </div>
          <div
            ref={mobileHeader}
            className={`z-10 block desktop-md:hidden fixed w-full top-0 py-5 ${
              scrollHeight > 50 && "bg-[#fffc]/90 border-b backdrop-blur-xl"
            }  !z-10 backdrop-filter before:w-full before:absolute before:bottom-0 before:left-0 before:bg-divider dark:before:bg-divider-d before:transition-opacity before:opacity-0`}
          >
            <div className="px-4 lg:px-16 flex items-center justify-between">
              <a href="#/">
                <img
                  src={dwellerLogo}
                  alt="Dweller"
                  data-rjs="2"
                  width="110px"
                  className="translate-y-4"
                />
              </a>
              <div>
                <div
                  onClick={toggleOpenNav}
                  ref={hamburger}
                  className="hamburger"
                >
                  <svg
                    className="scale-x-150"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                    class="text-background-d dark:text-background"
                  >
                    <g fill="currentColor">
                      <path d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"></path>
                    </g>
                  </svg>
                </div>
                <div
                  className={`${
                    openMobileNav && "!top-0"
                  } transition-all duration-500 -top-[420px] shadow-none z-10 fixed left-0 bg-white px-5 py-10 pt-7 gap-10 border-b w-full flex flex-col`}
                >
                  <div
                    onClick={toggleOpenNav}
                    ref={closeBtn}
                    className="close-btn absolute right-5 top-5 cursor-pointer"
                  >
                    <span className="text-3xl">&times;</span>
                  </div>
                  <a href="#/">
                    <img
                      src={dwellerLogo}
                      className="-translate-y-[3px]"
                      alt="Dweller"
                      data-rjs="2"
                      width="110px"
                    />
                  </a>
                  <nav>
                    <ul className="flex flex-col gap-10">
                      <li>
                        <a href="https://www.getcommune.co/#about-us">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="https://www.getcommune.co/#key-offerings">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="https://www.getcommune.co/#contact-us">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <button
                    onClick={() => navigate("/payment")}
                    type="button"
                    className=" bg-customBlue fill-before px-10 py-4 text-white text-lg rounded-lg font-semibold cursor-pointer"
                    data-v-682d5bac=""
                  >
                    {" "}
                    Get Early Access{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="relative isolate mt-[72px] desktop-md:mt-[unset]">
          <div className="absolute -z-1 top-[-8rem]">
            <svg
              width="728"
              height="657"
              viewBox="0 0 728 657"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-background dark:text-background-d"
            >
              <path
                d="M727 229.5C727 464.991 523.574 656 272.5 656C21.4259 656 -182 464.991 -182 229.5C-182 -5.99063 21.4259 -197 272.5 -197C523.574 -197 727 -5.99063 727 229.5Z"
                fill="transparent"
                stroke="#E5EAFF"
                stroke-width="2"
              ></path>
              <path
                d="M311 33C311 159.962 200.704 263 64.5 263C-71.7043 263 -182 159.962 -182 33C-182 -93.9616 -71.7043 -197 64.5 -197C200.704 -197 311 -93.9616 311 33Z"
                fill="transparent"
                stroke="#E5EAFF"
                stroke-width="2"
              ></path>
            </svg>
          </div>
          <div className="lg:px-16 flex-col lg:flex-row flex lg:pt-40 text-center lg:text-left lg:space-x-4">
            <div className="lg:max-w-[min(33rem,55%)] order-2 lg:order-1 px-4 lg:px-0">
              <h2 className="text-primary-base dark:text-[#6489d0] font-bold text-2xl lg:text-4xl">
                {" "}
                Powering digitization of the real estate ecosystem{" "}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg mt-4 lg:mt-6 opacity-90">
                {" "}
                Craeting value through digitization of properties. With dweller,
                you can now manage your properties, make payments effortless and
                live connectedly{" "}
              </p>
              <button
                onClick={() => navigate("/payment")}
                type="button"
                className="relative isolate bg-customBlue px-10 py-4 text-white text-base rounded-lg font-semibold mt-5 cursor-pointer"
              >
                {" "}
                Get Early Access{" "}
              </button>
            </div>
            <div className="lg:-mt-14 order-1 lg:order-2 mb-10">
              <div className="flex justify-center lg:justify-end">
                <span className="lg:max-w-[min(30rem,45%)] lg:h-auto lg:w-auto h-[min(14rem,95vw)] w-[min(14rem,95vw)] inline-block">
                  <img
                    src={globe}
                    alt="Globes"
                    className="Img"
                    style={{ "--transition": "opacity 200ms linear 0ms" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="relative isolate mt-16 xl:mt-28 lg:mt-40">
          <h2
            id="about-us"
            className="text-primary-base dark:text-[#6489d0] text-center font-bold text-xl lg:text-3xl"
          >
            {" "}
            About Us{" "}
          </h2>
          <div className="flex-col lg:flex-row flex lg:text-left lg:space-x-4 pt-4 lg:pt-8">
            <div className="lg:w-[50%]">
              <div className="flex justify-center desktop-md:justify-start">
                <span className="w-[min(32rem,50vw)] inline-block">
                  <img
                    aria-label="Image"
                    alt="about us"
                    src="https://res.cloudinary.com/themachine/image/upload/v1660630058/commune-web/public/AboutUs_uyaj1k.png"
                    // src='../assets/Globe_qi8why.png'
                    className="w-full h-full "
                    style={{
                      display: "inline-block",
                      pointerEvents: "none",
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="mt-8 lg:mt-20 lg:w-[min(40rem,50%)] lg:max-w-lg px-4 lg:px-0">
              <h3 className="font-semibold text-xl lg:text-2xl mb-7 lg:mb-9">
                {" "}
                Real Estate solutions for modern Africa{" "}
              </h3>
              <div className="grid gap-y-4 lg:gap-y-6">
                <p>
                  {" "}
                  We create a central infrastructure for day-to-day activities
                  in the real estate community. These activities range from
                  finding properties, Easy access to Property Finacing, Property
                  Management, Property Insurance, real estate agencies, Digital
                  Community Living, and promoting shared community.{" "}
                </p>
                <p>
                  {" "}
                  We believe that properties can be represented with digital
                  representation and this can promote next evolution of the
                  reasl estate community.{" "}
                </p>
                <p>
                  Sign up today on dweller to tap into the power of of the
                  digital economy. Let go paperless with dweller.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative isolate mt-16 xl:mt-28 lg:mt-40">
          <h2
            id="key-offerings"
            className="text-primary-base dark:text-[#6489d0] text-center font-bold text-xl lg:text-3xl"
          >
            Our Offerings{" "}
          </h2>
          <div className="flex-col lg:items-center lg:flex-row flex lg:text-left lg:space-x-16 pt-4 lg:pt-12 max-w-6xl lg:px-8 mx-auto">
            <div className="order-2 lg:order-1 lg:w-[50%] grid gap-y-6 lg:gap-y-12 content-start px-4 lg:px-0">
              <div>
                <h3 className="text-primary-base dark:text-[#6489d0] text-lg lg:text-2xl font-medium">
                  {" "}
                  List Your Property
                </h3>
                <p className="mt-2 lg:mt-4 lg:text-lg">
                  {" "}
                  No hassle and zero cost when you list your property with us.
                  We bridge the gap between homeowners and potential tenants.{" "}
                </p>
              </div>
              <div>
                <h3 className="text-primary-base dark:text-[#6489d0] text-lg lg:text-2xl font-medium">
                  {" "}
                  Find An Apartment{" "}
                </h3>
                <p className="mt-2 lg:mt-4 lg:text-lg">
                  {" "}
                  Save time and money spent in househunting - get access to
                  information on available homes - connect with a pool of
                  individuals like you seeking an easier rental experience.
                </p>
              </div>
              <div>
                <h3 className="text-primary-base dark:text-[#6489d0] text-lg lg:text-2xl font-medium">
                  {" "}
                  Find A Flatmate{" "}
                </h3>
                <p className="mt-2 lg:mt-4 lg:text-lg">
                  {" "}
                  Our preference-based matching system will suggest users with
                  similar interests and lifestyle choices as you.{" "}
                </p>
              </div>
            </div>
            <div className="lg:w-[50%] order-1 lg:order-2 px-4 lg:px-0 mb-8 lg:mb-0">
              <span className="mx-auto lg:mx-[initial] max-w-xs">
                <img
                  alt="key offerings"
                  aria-label="Image"
                  src={keyOfferings}
                  className="w-full h-full"
                  style={{
                    display: "inline-block",
                    pointerEvents: "none",
                  }}
                />
              </span>
            </div>
          </div>
        </section>
        <section className="relative isolate mt-16 xl:mt-28 lg:mt-40">
          <h2
            id="how-it-works"
            className="text-primary-base dark:text-[#6489d0] text-center font-bold text-xl lg:text-3xl"
          >
            How It Works{" "}
          </h2>
          <div className="flex-col lg:flex-row flex lg:text-left lg:space-x-4 pt-4 lg:pt-8">
            <div className="lg:w-[50%]">
              <div className="flex justify-center desktop-md:justify-start">
                <span className="w-[min(32rem,50vw)] inline-block">
                  <img
                    alt="how it works"
                    aria-label="Image"
                    src="https://res.cloudinary.com/themachine/image/upload/v1660630058/commune-web/public/HowItWorks_jmmcor.png"
                    className="w-full h-full"
                    style={{
                      display: "inline-block",
                      pointerEvents: "none",
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="mt-8 lg:mt-28 lg:w-[min(40rem,50%)] lg:max-w-lg px-4 lg:px-0 grid gap-y-8 lg:gap-y-16 content-start">
              <div>
                <h3 className="text-primary-base dark:text-[#6489d0] font-semibold lg:text-xl mb-1 lg:mb-2">
                  Managers
                </h3>
                <p>
                  Sign up on the web app, choose your real estate field and
                  start enjoying your digital workspace.
                </p>
              </div>
              <div>
                <h3 className="text-primary-base dark:text-[#6489d0] font-semibold lg:text-xl mb-1 lg:mb-2">
                  Casual Users
                </h3>
                <p>
                  Users (Residents and Agents), download our app from play store
                  or app store and follow the steps to get set up. Find
                  properties, Join communities, connect with the world around
                  you and make payments swiftly.{" "}
                </p>
              </div>
              <div>
                <h3 className="text-primary-base dark:text-[#6489d0] font-semibold lg:text-xl mb-1 lg:mb-2">
                  Issues?
                </h3>
                <p>
                  For any issues on settin up an account, kindly reach out to us
                  on <span className="text">support@dweller.africa</span>
                </p>
              </div>
            </div>
          </div>
        </section>
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
                    dweller is currently solving one of the biggest challenges
                    we had in collecting payments. The innovation has
                    drastically helped us improve our efficiency as a business.
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
                    dweller is Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Quisquam corporis quos repudiandae fuga
                    doloremque sint placeat..
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
                    dweller is currently solving one of the biggest challenges
                    we had in collecting payments. The innovation has
                    drastically helped us improve our efficiency as a business.
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
                    dweller is currently solving one of the biggest challenges
                    we had in collecting payments. The innovation has
                    drastically helped us improve our efficiency as a business.
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
                <img
                  className="w-full h-full"
                  src={crowdForce}
                  alt="crowdForce"
                />
              </div>
              <div className="w-[140px] h-[65px] px-5 py-3 border rounded-md shadow-sm cursor-pointer">
                <img className="w-full h-full" src={thrive} alt="thrive" />
              </div>
              <div className="w-[140px] h-[65px] px-5 py-3 border rounded-md shadow-sm cursor-pointer">
                <img className="w-full h-full" src={bankly} alt="bankly" />
              </div>
              <div className="w-[140px] h-[65px] px-5 py-3 border rounded-md shadow-sm cursor-pointer">
                <img
                  className="w-full h-full"
                  src={cowryWise}
                  alt="cowryWise"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="contact-us" className="mt-24">
          <div className="text-center">
            <h2 className="text-primary-base dark:text-[#6489d0] font-semibold text-xl lg:text-2xl">
              {" "}
              Have Questions?{" "}
            </h2>
            <p>Please send a message</p>
          </div>
          <form
            name="contactUs"
            className="ui-form dark-theme max-w-xs lg:max-w-lg mx-auto grid gap-y-5 mt-6 mb-20 lg:mt-12"
            id="contact-us-form"
            action="https://www.getcommune.co/"
          >
            <div data-uit="" className="">
              <div data-uit="" className="flex flex-col gap-1 ">
                <label data-uit="" htmlFor="uit-27" className="label">
                  Full Name
                </label>
                <input
                  data-uit=""
                  id="uit-27"
                  type="name"
                  placeholder="Mark Hillary"
                  className="py-3 border px-3 rounded outline-none"
                  autocomplete="name"
                  required=""
                />
              </div>
            </div>
            <div data-uit="" className="root rounded dark:border-divider-d">
              <div
                data-uit=""
                className="flex flex-col gap-1  main fill-before-after"
              >
                <label data-uit="" htmlFor="uit-28" className="label">
                  Email
                </label>
                <input
                  data-uit=""
                  id="uit-28"
                  type="email"
                  placeholder="Jane@gmail.com"
                  className="py-3 border px-3 rounded outline-none"
                  pattern="^.{2,99}$"
                  autocomplete="email"
                  required=""
                />
              </div>
            </div>
            <div data-uit="" className="root textarea">
              <div data-uit="" className="flex flex-col gap-1">
                <label data-uit="" htmlFor="uit-29" className="label">
                  Message
                </label>
                <textarea
                  data-uit=""
                  id="uit-29"
                  type="textarea"
                  placeholder="Enter your message"
                  className="ipy-3 border px-3 rounded outline-none h-32"
                  required=""
                />
              </div>
            </div>
            <button
              type="submit"
              className="fill-before justify-self-center min-w-[16rem] bg-customBlue fill-before px-10 py-4 text-white text-lg rounded-lg font-medium cursor-pointer"
            >
              Send{" "}
            </button>
          </form>
        </section>
        <section className="grid justify-center mb-8">
          <p className="text-heading mb-6 text-lg text-center font-semibold">
            {" "}
            Available soon on{" "}
          </p>
          <div className="grid md:grid-cols-2 w-full md:max-w-lg gap-5 md:gap-8">
            <button
              color="#fff"
              className="Button fill-before !p-0 max-w-[75vw] max-h-[4rem] !bg-transparent"
              href=""
              data-v-682d5bac=""
            >
              <img
                alt="appstore icon"
                aria-label="Appstore icon"
                src="https://res.cloudinary.com/themachine/image/upload/v1661027211/commune-web/public/appstore2_kj1mmc.png"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full"
              />
            </button>
            <button
              type="button"
              color="#fff"
              className="Button fill-before !p-0 max-w-[75vw] max-h-[4rem] !bg-transparent"
              href=""
              data-v-682d5bac=""
            >
              <img
                alt="playstore icon"
                aria-label="Playstore icon"
                src="https://res.cloudinary.com/themachine/image/upload/v1661027214/commune-web/public/playstore2_vfuxu1.png"
                className="w-full h-full"
              />
            </button>
          </div>
        </section>
        <footer className="bg-[#e1e7eb] px-5 sm:px-10 xl:px-20 py-20 pb-10 text-[13px] mt-24">
          <div className="grid sm:grid-cols-2 gap-y-10 lg:flex justify-between">
            <div>
              <img
                className="max-w-[200px]"
                src={dwellerLogo}
                alt="dweller logo"
              />
            </div>
            <div>
              <p className="capitalize font-semibold text-base mb-4">
                products
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  {" "}
                  <a href="#">Pricing</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Frequently Asked Questions</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Contacts</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Terms of Privacy</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Privacy Policies</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Dispute Resolution</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="capitalize font-semibold text-base mb-4">contact</p>
              <ul className="flex flex-col gap-3">
                <li>
                  {" "}
                  <a href="#">
                    Lorem ipsum dolor sit amet consectutur, Abuja, Nigeria
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">support@teamlead.com</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="capitalize font-semibold text-base mb-4">
                Community
              </p>
              <ul className="flex items-center gap-5">
                <li>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.8751 0H3.12506C1.40162 0 6.10352e-05 1.40156 6.10352e-05 3.125V21.875C6.10352e-05 23.5984 1.40162 25 3.12506 25H12.5001V16.4062H9.37506V12.5H12.5001V9.375C12.5001 6.78594 14.5985 4.6875 17.1876 4.6875H20.3126V8.59375H18.7501C17.8876 8.59375 17.1876 8.5125 17.1876 9.375V12.5H21.0938L19.5313 16.4062H17.1876V25H21.8751C23.5985 25 25.0001 23.5984 25.0001 21.875V3.125C25.0001 1.40156 23.5985 0 21.8751 0Z"
                      fill="#063A4F"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.8543 0H8.47931C4.16525 0 0.666809 3.49844 0.666809 7.8125V17.1875C0.666809 21.5016 4.16525 25 8.47931 25H17.8543C22.1684 25 25.6668 21.5016 25.6668 17.1875V7.8125C25.6668 3.49844 22.1684 0 17.8543 0ZM23.3231 17.1875C23.3231 20.2031 20.8699 22.6562 17.8543 22.6562H8.47931C5.46368 22.6562 3.01056 20.2031 3.01056 17.1875V7.8125C3.01056 4.79688 5.46368 2.34375 8.47931 2.34375H17.8543C20.8699 2.34375 23.3231 4.79688 23.3231 7.8125V17.1875Z"
                      fill="#063A4F"
                    ></path>
                    <path
                      d="M13.1668 6.25C9.71525 6.25 6.91681 9.04844 6.91681 12.5C6.91681 15.9516 9.71525 18.75 13.1668 18.75C16.6184 18.75 19.4168 15.9516 19.4168 12.5C19.4168 9.04844 16.6184 6.25 13.1668 6.25ZM13.1668 16.4062C11.0137 16.4062 9.26056 14.6531 9.26056 12.5C9.26056 10.3453 11.0137 8.59375 13.1668 8.59375C15.3199 8.59375 17.0731 10.3453 17.0731 12.5C17.0731 14.6531 15.3199 16.4062 13.1668 16.4062Z"
                      fill="#063A4F"
                    ></path>
                    <path
                      d="M19.8855 6.6139C20.3454 6.6139 20.7183 6.24104 20.7183 5.7811C20.7183 5.32115 20.3454 4.94828 19.8855 4.94828C19.4256 4.94828 19.0527 5.32115 19.0527 5.7811C19.0527 6.24104 19.4256 6.6139 19.8855 6.6139Z"
                      fill="#063A4F"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    width="26"
                    height="21"
                    viewBox="0 0 26 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.3333 2.74844C24.4036 3.15625 23.4129 3.42656 22.3801 3.55781C23.4426 2.92344 24.2536 1.92656 24.6348 0.725C23.6442 1.31562 22.5504 1.73281 21.3848 1.96563C20.4442 0.964063 19.1036 0.34375 17.6411 0.34375C14.8036 0.34375 12.5192 2.64688 12.5192 5.47031C12.5192 5.87656 12.5536 6.26719 12.6379 6.63906C8.377 6.43125 4.60669 4.38906 2.07388 1.27813C1.63169 2.04531 1.37231 2.92344 1.37231 3.86875C1.37231 5.64375 2.28638 7.21719 3.64888 8.12812C2.82544 8.1125 2.01763 7.87344 1.33325 7.49688C1.33325 7.5125 1.33325 7.53281 1.33325 7.55312C1.33325 10.0437 3.10981 12.1125 5.4395 12.5891C5.02231 12.7031 4.56763 12.7578 4.09575 12.7578C3.76763 12.7578 3.43638 12.7391 3.12544 12.6703C3.7895 14.7 5.67388 16.1922 7.9145 16.2406C6.17075 17.6047 3.95669 18.4266 1.55981 18.4266C1.1395 18.4266 0.736377 18.4078 0.333252 18.3563C2.60356 19.8203 5.29419 20.6562 8.19575 20.6562C17.627 20.6562 22.7833 12.8438 22.7833 6.07187C22.7833 5.84531 22.7754 5.62656 22.7645 5.40938C23.7817 4.6875 24.6364 3.78594 25.3333 2.74844Z"
                      fill="#063A4F"
                    ></path>
                  </svg>
                </li>
              </ul>
              <div className="mt-10 flex flex-col gap-3">
                <p>
                  Stay Excited, <br /> Subscribe to Our Newsletter
                </p>
                <div className="relative">
                  <input
                    type="email"
                    className="py-3 w-full sm:w-72 bg-[#d4dce2] px-3 pr-16 outline-none rounded-lg"
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 right-2 bg-white px-4 py-[2px] rounded-lg cursor-pointer">
                    {" "}
                    <span className="text-xl">&rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-20 text-center opacity-50">
            <p>© 2021 TeamLead, Ltd. All rights reserved</p>
            <p className="mt-5 text-justify sm:text-center">
              © 2018 TeamApt, Ltd. All rights reserved All text, graphics, audio
              files, code, downloadable material, and other works on this web
              site are the copyrighted works of TeamApt, Inc. All Rights
              Reserved. Any unauthorized redistribution or reproduction of any
              copyrighted materials on this web site is strictly prohibited.
              Other product and company names are trademarks of their respective
              owners. This web site contains simulated images; actual appearance
              may vary.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
