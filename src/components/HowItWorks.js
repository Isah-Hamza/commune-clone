import React from "react";
import { FcBriefcase, FcCustomerSupport, FcManager } from "react-icons/fc";
import { TfiWallet } from "react-icons/tfi";
import { FcHome } from "react-icons/fc";
import card from "../assets/eyowo-card.svg";
import manager from "../assets/social-media-manager.jpg";

import estate1 from "../assets/estate.jpg";
// import estate2 from "../assets/estate.2jpg.jpg";

import Button from "./Button";

const HowItWorks = () => {

  return (
    <section
      id="services"
      className="relative isolate mt-16 xl:mt-32 lg:mt-40 mx-auto max-w-[1100px] 2xl:max-w-[1000px] px-5 sm:px-8 md:px-16 2xl:px-0"
    >
      <h2
        data-aos="fade-up"
        id="how-it-works"
        className="dark:text-appcolor-500 text-center font-bold  text-xl lg:text-4xl 2xl:text-5xl"
      >
        Our Solutions{" "}
      </h2>
      <div className="mx-auto grid md:grid-cols-2 gap-6 md:gap-8 mt-10 flex justify-center">
        <div
          data-aos="fade-up"
          className={`min-h-40 rounded-lg bg-white shadow-sm w-full sm:w-[470px]`}
        >
          <div className="opacity-90 flex items-start flex-col sm:gap-5 sm:p-10 p-5">
            <div>
              <img alt="card" src={estate1} className="w-full  min-h-[250px] rounded-3xl" />
            </div>
            <p className="flex items-center gap-1.5 text-xl md:text-3xl leading-[27px] sm:!leading-[38px] md:tracking-wider font-bold my-4 mt-6 text-appcolor-600">
              {/* <FcManager /> */}
              Managing Facilities can be easy with Dweller.
              {/* (Dweller Mamager) */}
            </p>
            <p className="text-base sm:!text-lg sm:tracking-wider !leading-20">
              Manage Properties, Work Orders, Assets, Communities, Smart Devices
              and IOT, Central Vending for your communities, simplifying bills
              Collection, Improving Community Security With Our Smart Gate and
              Visitor Management
            </p>
            <a href="http://www.manager.dweller.africa">
              <Button
                className="mt-5 shadow-xl text-sm px-8 py-4"
                text={"Take me to Manager"}
              />
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className={`min-h-40 rounded-lg bg-white shadow-sm w-full sm:w-[470px]`}
        >
          <div className="opacity-90 flex items-start flex-col sm:gap-5 sm:p-10 p-5">
            <div className="w-full overflow-hidden rounded-3xl">
              <img
                alt="manager"
                src={manager}
                className="w-full min-h-[250px]"
              />
            </div>
            <p className="flex items-center gap-1.5 text-xl md:text-3xl leading-[27px] sm:!leading-[38px] md:tracking-wider font-bold my-4 mt-6 text-appcolor-600">
              {/* <FcManager /> */}
              Property Financing, Investment and Debt Recovery.
              {/* (Dweller Mamager) */}
            </p>
            <p className="text-base sm:text-lg sm:tracking-wider !leading-20">
              With Dweller property financing, institutions/investors can now
              disburse money to aid projects without worrying about recovery.
              With Dweller we connect financial institutions to projects.
            </p>
            <Button
              className="mt-5 shadow-xl text-sm px-8 py-4"
              text={"Coming Soon"}
            />
          </div>
        </div>
        {/* <div data-aos="fade-up" className={`min-h-40 rounded-lg green`}>
          <div className="text-white opacity-90 flex items-start flex-col gap-5 sm:p-10 p-5">
            <p className="flex items-center gap-2 text-lg md:text-[22px] font-semibold">
              <FcBriefcase color="coral" />
              Dweller Finance
            </p>
            <p>
              This is an application for financiers to connect directly to the
              market and third-party companies like real estate companies. With
              this application, financiers can easily track their investments,
              validate their investments, manage their customers, and auto-debit
              payments using payment instructions.
            </p>
            <button
              className="shadow-lg text-sm px-5 py-2 rounded bg-gray-200
             text-black"
            >
              Coming Soon
            </button>
          </div>
        </div>
        <div data-aos="fade-up-right" className={`min-h-40 rounded-lg blue`}>
          <div className="text-white opacity-90 flex items-start flex-col gap-5 sm:p-10 p-5">
            <p className="flex gap-2 items-center text-lg md:text-[22px] font-semibold">
              <FcHome />
              Dweller RealEstate
            </p>
            <p>
              This is an application for real estate companies to manage the
              process of acquiring properties and generating leads for potential
              investors. The application integrates with Dweller Manager and
              Dweller Finance, providing a seamless flow of operations for all
              players involved in the property management process.
            </p>
            <button
              className="shadow-md text-sm px-5 py-2 rounded bg-gray-200
             text-black"
            >
              Coming Soon
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorks;
