import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useRouter } from "next/router";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mvoypdar");
  const router = useRouter();

  if (state.succeeded) {
    return (
      <p className="text-xl">
        Thanks for your submission, I will read it as soon as possible!
      </p>
    );
  }
  return (
    <section className="bg-white dark:bg-slate-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md xl:py-40">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-slate-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-slate-500 dark:text-slate-400 sm:text-xl">
          Want to build your online business and need a developer? Need to know
          details about plans? Let me know.
        </p>
        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm lg:text-md xl:text-lg font-medium text-slate-900 dark:text-slate-300"
            >
              Your email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="user@provider.com"
              className="shadow-sm bg-slate-50 border border-slate-300 text-slate-900 text-sm lg:text-md xl:text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500 dark:shadow-sm-light"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm lg:text-md xl:text-lg font-medium text-slate-900 dark:text-slate-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm lg:text-md xl:text-lg text-slate-900 bg-slate-50 rounded-lg border border-slate-300 shadow-sm focus:ring-sky-500 focus:border-sky-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500 dark:shadow-sm-light"
              placeholder="Let me know how I can help you"
              required
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm lg:text-md xl:text-lg font-medium text-slate-900 dark:text-slate-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm lg:text-md xl:text-lg text-slate-900 bg-slate-50 rounded-lg shadow-sm border border-slate-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
              placeholder="Leave a comment..."
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <span
              className="py-3 px-5 text-sm lg:text-md xl:text-lg font-medium text-center text-slate-900 dark:text-white hover:underline cursor-pointer rounded-lg sm:w-fit inline-flex items-center gap-2"
              onClick={() => router.back()}
            >
              <HiArrowNarrowLeft />
              {"Click here to go back"}
            </span>
            <button
              type="submit"
              disabled={state.submitting}
              className="py-3 px-5 text-sm lg:text-md xl:text-lg font-medium text-center text-white rounded-lg bg-emerald-700 sm:w-fit hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 transition-transform duration-300"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

// fazer form de raiz
