import React from "react";

const ContactUs = () => {
  return (
    <section id="contact-us" className="mt-24">
      <div className="text-center">
        <h2 className="text-primary-base dark:text-[#6489d0] font-semibold text-xl lg:text-2xl">
          {" "}
          Have Questions?{" "}
        </h2>
        <p>Please send a message</p>
      </div>
      <form
        name="contactUs"
        className="ui-form dark-theme max-w-xs lg:max-w-lg mx-auto grid gap-y-5 mt-6 mb-20 lg:mt-12"
        id="contact-us-form"
      >
        <div data-uit="" className="">
          <div data-uit="" className="flex flex-col gap-1 ">
            <label data-uit="" htmlFor="uit-27" className="label">
              Full Name
            </label>
            <input
              data-uit=""
              id="uit-27"
              type="name"
              placeholder="Mark Hillary"
              className="py-3 border px-3 rounded outline-none"
              autocomplete="name"
              required=""
            />
          </div>
        </div>
        <div data-uit="" className="root rounded dark:border-divider-d">
          <div
            data-uit=""
            className="flex flex-col gap-1  main fill-before-after"
          >
            <label data-uit="" htmlFor="uit-28" className="label">
              Email
            </label>
            <input
              data-uit=""
              id="uit-28"
              type="email"
              placeholder="Jane@gmail.com"
              className="py-3 border px-3 rounded outline-none"
              pattern="^.{2,99}$"
              autocomplete="email"
              required=""
            />
          </div>
        </div>
        <div data-uit="" className="root textarea">
          <div data-uit="" className="flex flex-col gap-1">
            <label data-uit="" htmlFor="uit-29" className="label">
              Message
            </label>
            <textarea
              data-uit=""
              id="uit-29"
              type="textarea"
              placeholder="Enter your message"
              className="ipy-3 border px-3 rounded outline-none h-32"
              required=""
            />
          </div>
        </div>
        <button
          type="submit"
          className="fill-before justify-self-center min-w-[16rem] bg-customBlue fill-before px-10 py-4 text-white text-lg rounded-lg font-medium cursor-pointer"
        >
          Send{" "}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
