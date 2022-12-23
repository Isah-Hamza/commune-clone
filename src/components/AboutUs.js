import React from "react";

const AboutUs = () => {
  return (
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
              We create a central infrastructure for day-to-day activities in
              the real estate community. These activities range from finding
              properties, Easy access to Property Finacing, Property Management,
              Property Insurance, real estate agencies, Digital Community
              Living, and promoting shared community.{" "}
            </p>
            <p>
              {" "}
              We believe that properties can be represented with digital
              representation and this can promote next evolution of the reasl
              estate community.{" "}
            </p>
            <p>
              Sign up today on dweller to tap into the power of of the digital
              economy. Let go paperless with dweller.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
