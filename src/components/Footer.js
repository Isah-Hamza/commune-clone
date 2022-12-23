import React from "react";
import dwellerLogo from "../assets/dweller-logo.png";


const Footer = () => {
  return (
    <footer className="bg-[#e1e7eb] px-5 sm:px-10 xl:px-20 py-20 pb-10 text-[13px] mt-24">
      <div className="grid sm:grid-cols-2 gap-y-10 lg:flex justify-between">
        <div>
          <img className="max-w-[200px]" src={dwellerLogo} alt="dweller logo" />
        </div>
        <div>
          <p className="capitalize font-semibold text-base mb-4">products</p>
          <ul className="flex flex-col gap-3">
            <li>
              {" "}
              <a href="#">Pricing</a>
            </li>
            <li>
              {" "}
              <a href="#">Frequently Asked Questions</a>
            </li>
            <li>
              {" "}
              <a href="#">Contacts</a>
            </li>
            <li>
              {" "}
              <a href="#">Terms of Privacy</a>
            </li>
            <li>
              {" "}
              <a href="#">Privacy Policies</a>
            </li>
            <li>
              {" "}
              <a href="#">Dispute Resolution</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="capitalize font-semibold text-base mb-4">contact</p>
          <ul className="flex flex-col gap-3">
            <li>
              {" "}
              <a href="#">
                Lorem ipsum dolor sit amet consectutur, Abuja, Nigeria
              </a>
            </li>
            <li>
              {" "}
              <a href="#">support@teamlead.com</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="capitalize font-semibold text-base mb-4">Community</p>
          <ul className="flex items-center gap-5">
            <li>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8751 0H3.12506C1.40162 0 6.10352e-05 1.40156 6.10352e-05 3.125V21.875C6.10352e-05 23.5984 1.40162 25 3.12506 25H12.5001V16.4062H9.37506V12.5H12.5001V9.375C12.5001 6.78594 14.5985 4.6875 17.1876 4.6875H20.3126V8.59375H18.7501C17.8876 8.59375 17.1876 8.5125 17.1876 9.375V12.5H21.0938L19.5313 16.4062H17.1876V25H21.8751C23.5985 25 25.0001 23.5984 25.0001 21.875V3.125C25.0001 1.40156 23.5985 0 21.8751 0Z"
                  fill="#063A4F"
                ></path>
              </svg>
            </li>
            <li>
              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8543 0H8.47931C4.16525 0 0.666809 3.49844 0.666809 7.8125V17.1875C0.666809 21.5016 4.16525 25 8.47931 25H17.8543C22.1684 25 25.6668 21.5016 25.6668 17.1875V7.8125C25.6668 3.49844 22.1684 0 17.8543 0ZM23.3231 17.1875C23.3231 20.2031 20.8699 22.6562 17.8543 22.6562H8.47931C5.46368 22.6562 3.01056 20.2031 3.01056 17.1875V7.8125C3.01056 4.79688 5.46368 2.34375 8.47931 2.34375H17.8543C20.8699 2.34375 23.3231 4.79688 23.3231 7.8125V17.1875Z"
                  fill="#063A4F"
                ></path>
                <path
                  d="M13.1668 6.25C9.71525 6.25 6.91681 9.04844 6.91681 12.5C6.91681 15.9516 9.71525 18.75 13.1668 18.75C16.6184 18.75 19.4168 15.9516 19.4168 12.5C19.4168 9.04844 16.6184 6.25 13.1668 6.25ZM13.1668 16.4062C11.0137 16.4062 9.26056 14.6531 9.26056 12.5C9.26056 10.3453 11.0137 8.59375 13.1668 8.59375C15.3199 8.59375 17.0731 10.3453 17.0731 12.5C17.0731 14.6531 15.3199 16.4062 13.1668 16.4062Z"
                  fill="#063A4F"
                ></path>
                <path
                  d="M19.8855 6.6139C20.3454 6.6139 20.7183 6.24104 20.7183 5.7811C20.7183 5.32115 20.3454 4.94828 19.8855 4.94828C19.4256 4.94828 19.0527 5.32115 19.0527 5.7811C19.0527 6.24104 19.4256 6.6139 19.8855 6.6139Z"
                  fill="#063A4F"
                ></path>
              </svg>
            </li>
            <li>
              <svg
                width="26"
                height="21"
                viewBox="0 0 26 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.3333 2.74844C24.4036 3.15625 23.4129 3.42656 22.3801 3.55781C23.4426 2.92344 24.2536 1.92656 24.6348 0.725C23.6442 1.31562 22.5504 1.73281 21.3848 1.96563C20.4442 0.964063 19.1036 0.34375 17.6411 0.34375C14.8036 0.34375 12.5192 2.64688 12.5192 5.47031C12.5192 5.87656 12.5536 6.26719 12.6379 6.63906C8.377 6.43125 4.60669 4.38906 2.07388 1.27813C1.63169 2.04531 1.37231 2.92344 1.37231 3.86875C1.37231 5.64375 2.28638 7.21719 3.64888 8.12812C2.82544 8.1125 2.01763 7.87344 1.33325 7.49688C1.33325 7.5125 1.33325 7.53281 1.33325 7.55312C1.33325 10.0437 3.10981 12.1125 5.4395 12.5891C5.02231 12.7031 4.56763 12.7578 4.09575 12.7578C3.76763 12.7578 3.43638 12.7391 3.12544 12.6703C3.7895 14.7 5.67388 16.1922 7.9145 16.2406C6.17075 17.6047 3.95669 18.4266 1.55981 18.4266C1.1395 18.4266 0.736377 18.4078 0.333252 18.3563C2.60356 19.8203 5.29419 20.6562 8.19575 20.6562C17.627 20.6562 22.7833 12.8438 22.7833 6.07187C22.7833 5.84531 22.7754 5.62656 22.7645 5.40938C23.7817 4.6875 24.6364 3.78594 25.3333 2.74844Z"
                  fill="#063A4F"
                ></path>
              </svg>
            </li>
          </ul>
          <div className="mt-10 flex flex-col gap-3">
            <p>
              Stay Excited, <br /> Subscribe to Our Newsletter
            </p>
            <div className="relative">
              <input
                type="email"
                className="py-3 w-full sm:w-72 bg-[#d4dce2] px-3 pr-16 outline-none rounded-lg"
              />
              <div className="absolute top-1/2 -translate-y-1/2 right-2 bg-white px-4 py-[2px] rounded-lg cursor-pointer">
                {" "}
                <span className="text-xl">&rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20 text-center opacity-50">
        <p>© 2021 TeamLead, Ltd. All rights reserved</p>
        <p className="mt-5 text-justify sm:text-center">
          © 2018 TeamApt, Ltd. All rights reserved All text, graphics, audio
          files, code, downloadable material, and other works on this web site
          are the copyrighted works of TeamApt, Inc. All Rights Reserved. Any
          unauthorized redistribution or reproduction of any copyrighted
          materials on this web site is strictly prohibited. Other product and
          company names are trademarks of their respective owners. This web site
          contains simulated images; actual appearance may vary.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
