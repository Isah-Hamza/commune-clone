import React from "react";

import manager2 from "../assets/manager_two-removebg-preview.png";

import finance4 from "../assets/finance_4-removebg-preview.png";
import realestate from "../assets/realestate2-removebg-preview.png";

const HowItWorks = () => {
  return (
    <section
      id="services"
      className="relative isolate mt-16 xl:mt-28 lg:mt-40 mx-auto max-w-[1440px] px-3 sm:px-8 md:px-16 2xl:px-0"
    >
      <h2
        data-aos="fade-down"
        id="how-it-works"
        className="dark:text-appcolor-500 text-center font-bold  text-xl lg:text-4xl 2xl:text-5xl"
      >
        Our Solutions{" "}
      </h2>
      <div className="flex-col lg:flex-row flex lg:text-left lg:space-x-4 pt-4 lg:pt-8 gap-10 xl:gap-14">
        <div data-aos="fade-right" className="lg:w-[50%] relative">
          {/* <div className="absolute inset-0 bg-black/50"></div> */}
          <div className="flex justify-center desktop-md:justify-start ml-0 sm:ml-10 lg:ml-0">
            <span className="w-[min(32rem,50vw)] inline-block">
              <img
                alt="how it works"
                aria-label="Image"
                src={manager2}
                className="w-full h-full lg:min-h-[350px] xl:min-w-[650px]"
                style={{
                  display: "inline-block",
                  pointerEvents: "none"
                }}
              />
            </span>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="mt-8 lg:mt-28 w-full px-4 lg:px-0 grid gap-y-8 lg:gap-y-16 content-start lg:w-[50%] "
        >
          <div>
            <h3 className="dark:text-appcolor-500 font-semibold text-xl lg:text-2xl">
              Dweller Manager
            </h3>
            <p className="text-sm sm:text-base lg:text-xl 2xl:text-2xl 2xl:!leading-relaxed mt-5">
              This is an all-in-one application for facility companies and
              landlords to manage all property-related operations, including
              property management, community management, staff management,
              visitor management, bill collection management, security and
              emergency management, smart asset management, and more.
            </p>
            <button className="text-white bg-appcolor-700 px-8 py-2 rounded mt-5">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="flex-col justify-center items-center lg:flex-row-reverse flex lg:text-left lg:space-x-4 pt-4 lg:pt-8 mt-16 gap-10 lg:gap-16">
        <div data-aos="fade-left" className="lg:w-[50%] lg:mt-14">
          <div className="flex justify-center desktop-md:justify-start">
            {/* <span className="w-[min(32rem,50vw)] inline-block"> */}
            <img
              alt="how it works"
              aria-label="Image"
              className="w-full h-full lg:min-h-[370px] xl:min-w-[650px] 2xl:min-w-[670px]"
              src={finance4}
              style={{
                display: "inline-block",
                pointerEvents: "none"
              }}
            />
            {/* </span> */}
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="mt-8 grid gap-y-8 lg:gap-y-16 content-start"
        >
          <div>
            <h3 className="text-primary-base dark:text-appcolor-500 font-semibold text-xl lg:text-2xl">
              Dweller Finance
            </h3>
            <p className="text-sm sm:text-base lg:text-xl 2xl:text-2xl 2xl:!leading-relaxed mt-5">
              This is an application for financiers to connect directly to the
              market and third-party companies like real estate companies. With
              this application, financiers can easily track their investments,
              validate their investments, manage their customers, and auto-debit
              payments using payment instructions. This app is both for
              institutions and individuals who want to lend out money either for
              rent or to buy properties. This will give investors an
              auto-investment opportunity.
            </p>
            <button className="text-white bg-appcolor-700 px-5 py-2 rounded mt-3">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
      <div className="flex-col lg:flex-row flex lg:text-left lg:space-x-4 pt-4 lg:pt-8 gap-10 lg:gap-16 items-center mt-5">
        <div data-aos="fade-right" className="lg:w-[50%] lg:mt-14">
          <div className="flex justify-center desktop-md:justify-start ">
            <img
              alt="how it works"
              aria-label="Image"
              src={realestate}
              className="w-full h-full lg:min-w-[650px] 2xl:min-w-[800px]"
              style={{
                display: "inline-block",
                pointerEvents: "none"
              }}
            />
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="mt-8 lg:mt-10 px-4 lg:px-0 grid gap-y-8 lg:gap-y-16 content-start"
        >
          <div>
            <h3 className="dark:text-appcolor-500 font-semibold text-xl lg:text-2xl">
              Dweller RealEstate
            </h3>
            <p className="text-sm sm:text-base lg:text-xl 2xl:text-2xl 2xl:!leading-relaxed mt-5">
              This is an application for real estate companies to manage the
              process of acquiring properties and generating leads for potential
              investors. The application integrates with Dweller Manager and
              Dweller Finance, providing a seamless flow of operations for all
              players involved in the property management process
            </p>
            <button className="text-white bg-appcolor-700 px-5 py-2 rounded mt-4">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
