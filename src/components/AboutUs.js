import React from "react";
import about_us from "../assets/dd5.png";
import lady from "../assets/eyowo-lady.png";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about-us" className="relative isolate pt-14 xl:mt-16">
      <div className="flex sm:flex-row flex-col gap-16 max-w-[1200px] mx-auto justify-center px-5 sm:px-0">
        <div className="w-full sm:w-[500px]">
          <img
            src={lady}
            className="w-full sm:w-[unset] sm:min-w-[500px] h-80 sm:h-[600px] rounded-xl"
            alt="lady in the about section"
          />
        </div>
        <div className="max-w-[550px] flex flex-col gap-14 mt-3">
          <div className="flex flex-col gap-2">
            <p className="text-2xl sm:text-3xl font-semibold !tracking-wider mb-3 text-appcolor-600">
              Africa’s Real Estate Value Chain Infrastructure.
            </p>
            <p className="text-lg leading-8">
              At dweller we are building solutions to integrate processes in the
              real estate value chain. This is to help users harness the full
              potential of their properties hereby improving productivity while
              maximising profit. Dweller is building solutions across major
              sectors in the real estate industry.
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-semibold mb-3 text-appcolor-600">
              We are cutting across:
            </p>
            <ul className="flex flex-col gap-1">
              <li>
                1. Improving facility operations and digitising all facility
                processes.
              </li>
              <li>
                2. Making Access to property financing easy for customers.
              </li>
              <li>
                {" "}
                3. Simplifying real estate operations such as managing
                construction, property financing,
                {/* maximising cost, providing */}
                {/* coordinated market place */}
                etc{" "}
              </li>
              <li>
                4. To build thirdparty services to aid new protechs to innovate
                quickly.
              </li>
            </ul>
            <div className="mt-10">
              <Button text={"Get Dweller"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
