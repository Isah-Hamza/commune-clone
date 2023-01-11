import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

import globe from "../assets/Globe_qi8why.png";

import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import HowItWorks from "../components/HowItWorks";

import KeyOfferings from "../components/KeyOfferings";
import OurPartners from "../components/OurPartners";
import ContactUs from "../components/ContactUs";

const Index = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div
        id="app"
        className="h-full w-full overflow-x-hidden text-sm sm:text-base"
      >
        <div className="h-[1px] mt-[1px] lg:mt-8"></div>
        <Header {...{ setShowModal }} />
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
              <h2 className="leading-[1.5] text-primary-base dark:text-appcolor-500 font-bold text-2xl lg:text-4xl lg:!leading-[1.35] ">
                {" "}
                Bringing people together, through technology.{" "}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg mt-4 lg:mt-6 opacity-90">
                {/* {" "}
                Craeting value through digitization of properties. With dweller,
                you can now manage your properties, make payments effortless and
                live connectedly{" "} */}
                Welcome to Dweller, the comprehensive property management
                software that helps you streamline your work and better serve
                your community. Listing your properties to find potential
                customer (either to buy or rent) has also being made easy with
                Dweller
              </p>
              <button
                onClick={() => setShowModal(true)}
                // onClick={() => navigate("/payment")}
                type="button"
                className="relative isolate bg-appcolor-500 px-10 py-4 text-white text-base rounded-lg font-semibold mt-7 cursor-pointer"
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
        <AboutUs />
        {/* <KeyOfferings /> */}
        <HowItWorks />
        {/* <OurPartners /> */}
        {/* <ContactUs /> */}
        <section className="grid justify-center mb-8 mt-24">
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
        <Footer />
        {showModal ? (
          <div className="grid place-content-center z-10 fixed inset-0 bg-black/50 ">
            <div className=" bg-white rounded m-auto w-[95%] sm:w-[400px] p-16 px-6 text-center relative">
              <IoCloseOutline
                onClick={() => setShowModal(false)}
                size={22}
                className="absolute right-4 top-4 cursor-pointer opacity-70 hover:opacity-100"
              />
              <p className="font-semibold text-center">Contact Dweller</p>
              <p className="text-center mb-3 text-sm">
                You can contact the team at Dweller through the following
                outlet.
              </p>
              <div className="mt-10 text-center">
                <p className="flex items-center justify-center gap-1 text-center">
                  <span className="font-semibold">Phone: </span>
                  <p>08162283793</p>
                </p>
                <p className="flex items-center justify-center gap-1 ">
                  <span className="font-semibold">Email: </span>
                  <p>support@dweller.africa</p>
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Index;
