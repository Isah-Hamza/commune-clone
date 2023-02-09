import React from "react";

import manager2 from "../assets/manager_two-removebg-preview.png";

import finance4 from "../assets/finance_4-removebg-preview.png";
import realestate from "../assets/realestate2-removebg-preview.png";

const HowItWorks = () => {
  return (
    <section id="services" className="relative isolate mt-16 xl:mt-28 lg:mt-40">
      <h2
        id="how-it-works"
        className="text-primary-base dark:text-appcolor-500 text-center font-bold text-xl lg:text-3xl"
      >
        How It Works{" "}
      </h2>
      <div className="flex-col lg:flex-row flex lg:text-left lg:space-x-4 pt-4 lg:pt-8">
        <div className="lg:w-[50%]">
          <div className="flex justify-center desktop-md:justify-start ml-0 sm:ml-10 lg:ml-16">
            <span className="w-[min(32rem,50vw)] inline-block">
              <img
                alt="how it works"
                aria-label="Image"
                src={manager2}
                className="w-full h-full lg:min-h-[350px]"
                style={{
                  display: "inline-block",
                  pointerEvents: "none"
                }}
              />
            </span>
          </div>
        </div>
        <div className="mt-8 lg:mt-28 lg:w-[min(40rem,50%)] lg:max-w-lg px-4 lg:px-0 grid gap-y-8 lg:gap-y-16 content-start">
          <div>
            <h3 className="text-primary-base dark:text-appcolor-500 font-semibold text-xl mb-1 lg:mb-2">
              Dweller Manager
            </h3>
            <p className="text-sm leading-loose mt-5">
              This is an all-in-one application for facility companies and
              landlords to manage all property-related operations, including
              property management, community management, staff management,
              visitor management, bill collection management, security and
              emergency management, smart asset management, and more.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-col justify-center lg:flex-row-reverse flex lg:text-left lg:space-x-4 pt-4 lg:pt-8 mt-16">
        <div className="lg:w-[50%] lg:mt-14">
          <div className="flex justify-center desktop-md:justify-start ml-0 sm:ml-10 lg:ml-24">
            <span className="w-[min(32rem,50vw)] inline-block">
              <img
                alt="how it works"
                aria-label="Image"
                className="w-full h-full"
                src={finance4}
                style={{
                  display: "inline-block",
                  pointerEvents: "none"
                }}
              />
            </span>
          </div>
        </div>
        <div className="mt-8 lg:mt-28 lg:w-[min(40rem,50%)] lg:max-w-lg px-4 lg:px-0 grid gap-y-8 lg:gap-y-16 content-start">
          <div>
            <h3 className="text-primary-base dark:text-appcolor-500 font-semibold text-xl mb-1 lg:mb-2">
              Dweller Finance
            </h3>
            <p className="text-sm leading-loose mt-5">
              This is an application for financiers to connect directly to the
              market and third-party companies like real estate companies. With
              this application, financiers can easily track their investments,
              validate their investments, manage their customers, and auto-debit
              payments using payment instructions. This app is both for
              institutions and individuals who want to lend out money either for
              rent or to buy properties. This will give investors an
              auto-investment opportunity.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-col lg:flex-row flex lg:text-left lg:space-x-4 pt-4 lg:pt-8">
        <div className="lg:w-[50%] lg:mt-20">
          <div className="flex justify-center desktop-md:justify-start ml-0 sm:ml-10 lg:ml-16">
            <span className="w-[min(32rem,50vw)] inline-block">
              <img
                alt="how it works"
                aria-label="Image"
                src={realestate}
                className="w-full h-full"
                style={{
                  display: "inline-block",
                  pointerEvents: "none"
                }}
              />
            </span>
          </div>
        </div>
        <div className="mt-8 lg:mt-32 lg:w-[min(40rem,50%)] lg:max-w-lg px-4 lg:px-0 grid gap-y-8 lg:gap-y-16 content-start">
          <div>
            <h3 className="text-primary-base dark:text-appcolor-500 font-semibold text-xl mb-1 lg:mb-2">
              Dweller RealEstate
            </h3>
            <p className="text-sm leading-loose mt-5">
              This is an application for real estate companies to manage the
              process of acquiring properties and generating leads for potential
              investors. The application integrates with Dweller Manager and
              Dweller Finance, providing a seamless flow of operations for all
              players involved in the property management process
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
