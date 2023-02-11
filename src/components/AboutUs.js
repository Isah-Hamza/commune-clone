import React from "react";
import about_us from "../assets/dd5.png";

const AboutUs = () => {
  return (
    <section id="about-us" className="relative isolate pt-14 xl:mt-10">
      <h2
        data-aos="fade-down"
        id="about-us"
        className="text-primary-base dark:text-appcolor-500 text-center font-bold text-2xl lg:text-4xl 2xl:text-5xl"
      >
        {" "}
        About Dweller{" "}
      </h2>
      <div className="flex-col justify-center lg:flex-row flex lg:text-left lg:space-x-4 pt-4 lg:pt-8">
        <div className="mx-auto text-center lg:min-w-[950px] lg:max-w-lg px-4 lg:px-0">
          {/* <h3 className="font-semibold text-xl lg:text-2xl mb-7 lg:mb-9 text-appcolor-500">
            {" "}
            Real Estate solutions for modern Africa{" "}
          </h3> */}
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            className="grid gap-y-4 lg:gap-y-6 text-sm sm:text-base lg:text-xl 2xl:text-2xl"
          >
            <p>
              {" "}
              At Dweller, we are integrating technology into property operations
              from finding properties, managing properties, financing
              properties, connecting to major property infrastructure to give
              our users a the best experience in managing thier homes and
              properties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
