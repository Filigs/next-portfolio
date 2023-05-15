import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Form.module.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_SECRET);
  const router = useRouter();

  if (state.succeeded) {
    return (
      <p className="text-xl">
        Thanks for your submission, I will read it as soon as possible!
      </p>
    );
  }
  return (
    <div className="h-screen">
      <div className="h-full transition-all duration-75 bg-transparent dark:bg-darkDarker lg:duration-75">
        <div className="max-w-screen-md px-4 py-8 mx-auto mt-16 rounded-lg bg-light dark:bg-darkDarker lg:py-16 ">
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
              <label htmlFor="email" className={`${styles.label}`}>
                Contact Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email@provider.com"
                className={`${styles.input}`}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="subject" className={`${styles.label}`}>
                What type of project is it?
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Startup / E-Commerce / Web app / SaaS ..."
                className={`${styles.input}`}
                required
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className={`${styles.label}`}>
                About the project
              </label>
              <textarea
                id="message"
                rows="6"
                className={`${styles.input}`}
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
                className="px-6 py-2 text-lg font-semibold rounded-md text-light bg-danger hover:bg-danger-light focus:outline-none focus:ring focus:ring-danger-light"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
