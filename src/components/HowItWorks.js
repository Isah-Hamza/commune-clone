import React from "react";

const HowItWorks = () => {
  return (
    <section
      id="services"
      className="relative isolate mt-16 xl:mt-32 lg:mt-40 mx-auto max-w-[1440px] px-3 sm:px-8 md:px-16 2xl:px-0"
    >
      <h2
        data-aos="fade-up"
        id="how-it-works"
        className="dark:text-appcolor-500 text-center font-bold  text-xl lg:text-4xl 2xl:text-5xl"
      >
        Our Solutions{" "}
      </h2>
      <div className="mx-auto md:mx-[unset] grid md:grid-cols-2 gap-6 md:gap-10 mt-10">
        <div
          data-aos="fade-down-right"
          className={`min-h-40 border rounded purple`}
        >
          <div className="text-white opacity-90 flex items-start flex-col gap-5 sm:p-10 p-5">
            <p className="text-lg font-semibold">Dweller Manager</p>
            <p>
              This is an all-in-one application for facility companies and
              landlords to manage all property-related operations, including
              property management, community management, staff management,
              visitor management, bill collection management, security and
              emergency management, smart asset management, and more.
            </p>
            <button className="text-sm px-5 py-2 rounded bg-appcolor-600 text-white">
              Login
            </button>
          </div>
        </div>
        <div
          data-aos="fade-down-left"
          className={`min-h-40 border rounded green`}
        >
          <div className="text-white opacity-90 flex items-start flex-col gap-5 sm:p-10 p-5">
            <p className="text-lg font-semibold">Dweller Finance</p>
            <p>
              This is an application for financiers to connect directly to the
              market and third-party companies like real estate companies. With
              this application, financiers can easily track their investments,
              validate their investments, manage their customers, and auto-debit
              payments using payment instructions.
            </p>
            <button className="text-sm px-5 py-2 rounded bg-appcolor-600 text-white">
              Coming Soon
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up-right"
          className={`min-h-40 border rounded blue`}
        >
          <div className="text-white opacity-90 flex items-start flex-col gap-5 sm:p-10 p-5">
            <p className="text-lg font-semibold">Dweller RealEstate</p>
            <p>
              This is an application for real estate companies to manage the
              process of acquiring properties and generating leads for potential
              investors. The application integrates with Dweller Manager and
              Dweller Finance, providing a seamless flow of operations for all
              players involved in the property management process.
            </p>
            <button className="text-sm px-5 py-2 rounded bg-appcolor-600 text-white">
              Coming Soon
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          className={`min-h-40 border rounded darkBlue`}
        >
          <div className="text-white opacity-90 flex items-start flex-col gap-5 sm:p-10 p-5">
            <p className="text-lg font-semibold">Dweller Finance</p>
            <p>
              This is an application for real estate companies to manage the
              process of acquiring properties and generating leads for potential
              investors. The application integrates with Dweller Manager and
              Dweller Finance, providing a seamless flow of operations for all
              players involved in the property management process.
            </p>
            <button className="text-sm px-5 py-2 rounded bg-appcolor-900 text-white">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
