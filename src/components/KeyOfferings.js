import React from "react";
import keyOfferings from "../assets/KeyOfferings_y9gh8q.png";

const KeyOfferings = () => {
  return (
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
              No hassle and zero cost when you list your property with us. We
              bridge the gap between homeowners and potential tenants.{" "}
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
  );
};

export default KeyOfferings;
