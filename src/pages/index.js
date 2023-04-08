import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import HowItWorks from "../components/HowItWorks";
import guyWithPhone from "../assets/Dweller-Guy-with-phone01-min.png";
import dwellerProduct from "../assets/Dweller-product.png";
import { SlMouse } from "react-icons/sl";
import Button from "../components/Button";
import hand from "../assets/eyowo-hand.png";
import iphone from "../assets/Phone.png";

const Index = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      id="app"
      className="h-full w-full overflow-x-hidden text-sm sm:text-base bg-[#fafafa]"
    >
      <div className="h-[1px] mt-[1px] lg:mt-8"></div>
      <a
        href="#footer"
        className="z-[9] absolute bottom-5 cursor-pointer left-1/2 -translate-x-1/2 w-fit animate-bounce"
      >
        <SlMouse size={50} />
      </a>
      <Header {...{ setShowModal }} />
      <section className="relative isolate mt-[72px] desktop-md:mt-[unset] mx-auto max-w-[1500px]">
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
        <div className="lg:px-16 flex-col lg:flex-row flex lg:pt-48 text-center lg:text-left lg:space-x-4">
          <div
            data-aos="fade-down"
            data-aos-offset="50"
            className="lg:max-w-[600px] order-2 lg:order-1 px-4 lg:px-0 lg:-mt-16 -2xl:mt-10"
          >
            <h2 className="leading-[1.5] text-primary-base dark:text-appcolor-500 font-bold text-2xl lg:text-5xl lg:!leading-[1.25] ">
              {" "}
              <p className="whitespace-nowrap">Connecting People, </p>
              <p className="whitespace-nowrap">Properties and Solutions</p>{" "}
            </h2>
            <p className="text-sm sm:text-base lg:text-xl 2xl:text-2xl mt-4 lg:mt-6 opacity-90">
              You can now interact with your community/estate, get access to
              property financing(rents and sale), pay bills, run errands, IOT,
              manage home finances/loans, own and rent properties all with
              Dweller.
            </p>

            <a href="#services">
              <Button
                onClick={() => setShowModal(true)}
                // onClick={() => navigate("/payment")}
                type="button"
                className="relative isolate px-10 py-3.5 mt-7 mx-auto sm:mx-[unset]"
                text={"Our Solutions"}
              />
            </a>
          </div>
          <div
            // data-aos="slide-up"
            data-aos-offset="50"
            className="order-1 lg:order-2 mb-10 mt-20 lg:-mt-48 lg:!ml-auto slide-up-fade-in dec-item"
          >
            <div className="flex justify-center lg:justify-end">
              {/* <span className="lg:max-w-[min(30rem,45%)] lg:h-auto lg:w-auto h-[min(14rem,95vw)] w-[min(14rem,95vw)] inline-block"> */}
              <img
                src={guyWithPhone}
                alt="Globes"
                className="Img max-w-[650px] 2xl:max-w-[750px] w-full md:w:unset"
                style={{ "--transition": "opacity 200ms linear 0ms" }}
              />
              {/* </span> */}
            </div>
          </div>
        </div>
      </section>
      <AboutUs />
      {/* <KeyOfferings /> */}
      <HowItWorks />
      {/* <OurPartners /> */}
      {/* <ContactUs /> */}
      <section className="md:h-[550px] overflow-y-hidden pb-0 sm:pb-10 p-4 sm:p-10 rounded-3xl bg-white my-10 mt-14 sm:mt-28 max-w-[1150px] mx-auto flex flex-col md:flex-row items-center gap-5">
        <div className=" flex flex-col gap-5 sm:w-3/5">
          <p className="text-3xl sm:text-[2.9rem] sm:!leading-[55px] font-semibold text-appcolor-600">
            Make Living Simple, Classy and Luxurious.
          </p>
          <p className="text-xl sm:text-xl opacity-80 my-3">
            {" "}
            Discover luxurious living with our expertly curated properties. Our
            unmatched expertise ensures an elegant and sophisticated living
            experience. Manage your dream home today.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <button
              color="#fff"
              className="w-1/2 sm:w-52"
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
              className="w-1/2 sm:w-52"
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
        </div>
        <div className="mt-10 sm:mt-0">
          <img
            src={iphone}
            alt="hand"
            className="w-[500px] [h-350px] sm:h-[450px]"
          />
        </div>
      </section>
      {/* <section className="grid justify-center mb-8 mt-24">
        <p
          data-aos="fade-down"
          data-aos-offset="100"
          className="text-lg mb-6 md:text-2xl text-center font-semibold"
        >
          {" "}
          Available soon on{" "}
        </p>
        <div className="grid md:grid-cols-2 w-full md:max-w-lg gap-5 md:gap-8">
          <button
            data-aos="fade-right"
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
            data-aos="fade-left"
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
      </section> */}
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
              You can contact the team at Dweller through the following outlet.
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
  );
};

export default Index;
