import { useForm, ValidationError } from "@formspree/react";
import React from "react";
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
    <div className="min-h-screen">
      <section className="h-full transition-all duration-75 bg-transparent dark:bg-darkDarker lg:duration-500">
        <div className="max-w-screen-md px-4 py-8 mx-auto mt-8 rounded-lg lg:py-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-darkDarker dark:text-light">
            Seems like you have something on your mind!
          </h2>
          <p className="mb-8 font-light text-center lg:mb-16 text-slate-500 dark:text-slate-400 sm:text-xl">
            {
              "Want to talk about it? Please fill this form and I will instantly receive your submission!"
            }
          </p>
          <form action="#" className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mt-4 text-xl font-bold tracking-wide xl:text-3xl text-darkDarker dark:text-light"
              >
                Contact Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email@provider.com"
                className="w-full p-2 mt-4 border rounded-md bg-lighter dark:bg-darkMedium focus:outline-none focus:border-primary"
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
                className="block mt-4 text-xl font-bold tracking-wide xl:text-3xl text-darkDarker dark:text-light"
              >
                What type of project is it?
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Startup / E-Commerce / Web app / SaaS ..."
                className="w-full p-2 mt-4 border rounded-md bg-lighter dark:bg-darkMedium focus:outline-none focus:border-primary"
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
                className="block mt-4 text-xl font-bold tracking-wide xl:text-3xl text-darkDarker dark:text-light"
              >
                About the project
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full p-2 mt-4 border rounded-md bg-lighter dark:bg-darkMedium focus:outline-none focus:border-primary"
                placeholder="Please let me know what's on your mind, feel free to elaborate as much as possible."
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-row items-center justify-between mt-24">
              <button
                className="px-6 py-2 text-lg font-semibold rounded-md text-light bg-success hover:bg-success-light focus:outline-none focus:ring focus:ring-success-light"
                onClick={() => router.back()}
              >
                Back
              </button>
              <button
                type="submit"
                disabled={state.submitting}
                className="px-6 py-2 text-lg font-semibold rounded-md text-light bg-primary hover:bg-primaryHover focus:outline-none focus:ring focus:ring-primaryHover"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
