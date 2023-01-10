import React from "react";

import facility from "../assets/png-facility.png";
import resident from "../assets/Png-residential.png";

const HowItWorks = () => {
  return (
    <section id='services' className="relative isolate mt-16 xl:mt-28 lg:mt-40">
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
                src={facility}
                className="w-full h-full"
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
              For Managers (Facility Managers and Landlords)
            </h3>
            <p className="text-sm leading-loose mt-5">
              As a property manager working for a company that uses Dweller's
              facility management platform, I want to be able to easily track
              and manage the maintenance and repair requests for the properties
              under my care. I also want to be able to keep track of the assets
              for each property and make sure they are in good condition. In
              addition, I want to be able to efficiently collect bills from
              residents and communicate with them about any issues or concerns
              they may have. To do this, I will use the workorder, asset
              management, and bills collection modules provided by Dweller. I
              will also use the community management module to stay informed
              about any community events or activities and to facilitate
              communication between residents and the management team.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-col justify-center lg:flex-row-reverse flex lg:text-left lg:space-x-4 pt-4 lg:pt-8 mt-16">
        <div className="lg:w-[50%]">
          <div className="flex justify-center desktop-md:justify-start ml-0 sm:ml-10 lg:ml-24">
            <span className="w-[min(32rem,50vw)] inline-block">
              <img
                alt="how it works"
                aria-label="Image"
                className="w-full h-full"
                src={resident}
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
              For Residents
            </h3>
            <p className="text-sm leading-loose mt-5">
              As a resident of a community managed by Dweller, I want to be able
              to easily request services and report any issues or emergencies
              that arise in my living space. I also want to be able to pay my
              bills and manage any visits from guests or service providers
              through the Dweller platform. Additionally, I want to be able to
              participate in community activities and stay informed about what
              is happening in my community. To do this, I will use the
              workorder, asset management, bills collection, and community
              management modules provided by Dweller.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
