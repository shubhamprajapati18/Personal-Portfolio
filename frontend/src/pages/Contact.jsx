import React from "react";

const Contact = () => {
  return (
    <div className="border border-neutral-800">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 md:px-8 lg:px-10 ml-0 sm:ml-4 md:ml-9">
        {/* Title */}
        <h2 className="michroma-font text-lg sm:text-3xl md:text-5xl lg:text-7xl mb-4 text-black dark:text-white max-w-4xl">
          Contact .
        </h2>
        <p className="mozilla-headline-font text-neutral-700 dark:text-neutral-300 text-sm sm:text-base md:text-lg max-w-sm">
          "Start small, dream big — every great project began with a single idea."
        </p>

        {/* Form Section */}
        <div className="mt-10 sm:mt-16 md:mt-20 max-w-2xl">
          <form className="flex flex-col gap-6">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-4 sm:py-5 text-base sm:text-lg bg-transparent border border-neutral-500 text-neutral-700 dark:text-neutral-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-500 outline-none transition-all duration-300 hover:border-lime-500"
              required
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-4 sm:py-5 text-base sm:text-lg bg-transparent border border-neutral-500 text-neutral-700 dark:text-neutral-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-500 outline-none transition-all duration-300 hover:border-lime-500"
              required
            />

            {/* Message */}
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-5 sm:py-6 text-base sm:text-lg bg-transparent border border-neutral-500 text-neutral-700 dark:text-neutral-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-500 outline-none transition-all duration-300 resize-none hover:border-lime-500"
              required
            ></textarea>

            {/* Email Info */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400">
              📧 My Email:{" "}
              <span className="text-white dark:text-lime-500 font-semibold hover:text-lime-50 cursor-pointer">
                shubham.jitendra.prajapati@gmail.com
              </span>
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 sm:py-5 border border-neutral-500 text-neutral-500 bg-white transition-all duration-300 hover:bg-lime-500 hover:text-black hover:-translate-y-1 transform"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
