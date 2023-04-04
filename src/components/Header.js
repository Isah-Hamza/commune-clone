import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dwellerLogo from "../assets/dweller-logo.png";
import Button from "./Button";

const Header = ({ setShowModal }) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const hamburger = useRef(null);
  const closeBtn = useRef(null);
  const mobileHeader = useRef(null);

  function toggleOpenNav() {
    setOpenMobileNav((prev) => !prev);
  }

  useEffect(() => {
    let listener = document.addEventListener("scroll", () => {
      setScrollHeight(window.scrollY);
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <header className="">
      <div
        className={`hidden desktop-md:block sticky top-0 py-3  ${
          scrollHeight > 50 &&
          "bg-[#fffc]/90 border-b !z-10 !fixed !w-full !py-2"
        } backdrop-filter backdrop-blur-xl transition-all duration-400 before:w-full before:absolute before:bottom-0 before:left-0 before:bg-divider dark:before:bg-divider-d before:transition-opacity before:opacity-0`}
      >
        <div className="px-4 lg:px-16 2xl:px-0 flex items-center justify-between mx-auto max-w-[1440px]">
          <a href="#/">
            <img
              className="translate-y-[18px] w-36"
              src={dwellerLogo}
              alt="Dweller"
              data-rjs="2"
              width="110px"
            />
          </a>
          <nav>
            <ul className="flex items-center space-x-11">
              <li>
                <a
                  className="duration-300 transition-all ease-in-out hover:underline hover:text-[#e6690d]"
                  href="#about-us"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="duration-300 transition-all ease-in-out hover:underline hover:text-[#e6690d]"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="duration-300 transition-all ease-in-out hover:underline hover:text-[#e6690d]"
                  href="#footer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <Button
            onClick={() => setShowModal(true)}
            type="button"
            className="px-10 py-3"
            text={"Our Solutions"}
          />
        </div>
      </div>
      <div
        ref={mobileHeader}
        className={`z-10 block desktop-md:hidden fixed w-full top-0 py-5 ${
          scrollHeight > 50 && "bg-[#fffc]/90 border-b backdrop-blur-xl"
        }  !z-10 backdrop-filter before:w-full before:absolute before:bottom-0 before:left-0 before:bg-divider dark:before:bg-divider-d before:transition-opacity before:opacity-0`}
      >
        <div className="px-4 lg:px-16 flex items-center justify-between">
          <a href="#/">
            <img
              src={dwellerLogo}
              alt="Dweller"
              data-rjs="2"
              width="110px"
              className="translate-y-4"
            />
          </a>
          <div>
            <div onClick={toggleOpenNav} ref={hamburger} className="hamburger">
              <svg
                className="scale-x-150"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                class="text-background-d dark:text-background"
              >
                <g fill="currentColor">
                  <path d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"></path>
                </g>
              </svg>
            </div>
            <div
              className={`${
                openMobileNav && "!top-0"
              } transition-all duration-500 -top-[420px] shadow-none z-10 fixed left-0 bg-white px-5 py-10 pt-7 gap-10 border-b w-full flex flex-col`}
            >
              <div
                onClick={toggleOpenNav}
                ref={closeBtn}
                className="close-btn absolute right-5 top-5 cursor-pointer"
              >
                <span className="text-3xl">&times;</span>
              </div>
              <a href="#/">
                <img
                  src={dwellerLogo}
                  className="-translate-y-[3px]"
                  alt="Dweller"
                  data-rjs="2"
                  width="110px"
                />
              </a>
              <nav>
                <ul className="flex flex-col gap-10">
                  <li>
                    <a
                      className="duration-300 transition-all ease-in-out hover:underline hover:text-[#e6690d]"
                      href="#about-us"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="duration-300 transition-all ease-in-out hover:underline hover:text-[#e6690d]"
                      href="#services"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      className="duration-300 transition-all ease-in-out hover:underline hover:text-[#e6690d]"
                      href="#footer"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
              {/* <button
                onClick={() => setShowModal(true)}
                // onClick={() => navigate("/payment")}
                type="button"
                className=" bg-appcolor-500 fill-before px-10 py-4 text-white text-lg rounded-lg font-semibold cursor-pointer"
                data-v-682d5bac=""
              >
                {" "}
                Get Early Access{" "}
              </button> */}
              <Button
                onClick={() => setShowModal(true)}
                type="button"
                className="px-10 py-3"
                text={"Our Solutions"}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
