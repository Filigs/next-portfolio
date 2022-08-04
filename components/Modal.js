import React, { useState } from "react";

import { useForm, ValidationError } from "@formspree/react";
import { HiOutlineX } from "react-icons/hi";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [state, handleSubmit] = useForm("mvoypdar");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }
  return (
    <>
      <button
        className="transition-all duration-150 inline-flex items-center py-4 px-8 text-xl lg:text-xl font-semibold text-center text-white bg-emerald-600 rounded-xl hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-600 focus:ring-emerald-100 focus:ring-4"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Say Hello
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm dark:backdrop-brightness-50">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className=" rounded-xl border-0 shadow-lg relative flex flex-col w-max bg-white dark:bg-slate-800 outline-2 focus:outline-none ring-2 ring-slate-100 dark:ring-slate-700">
                {/* header */}
                <div className="flex flex-col items-center justify-center p-5 gap-4">
                  <div className="flex flex-row-reverse items-center">
                    <p className="text-xl font-semibold">Hello there!</p>

                    <p className="text-md font-normal text-slate-600 dark:text-slate-300"></p>
                  </div>
                </div>
                {/* body */}
                <div className="relative p-6 flex-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="p-5">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-lg font-medium text-slate-900 dark:text-slate-300"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="user@provider.com"
                        className="bg-slate-100 dark:bg-slate-700"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                    <div className="p-5">
                      <label
                        htmlFor="message"
                        className="block mb-2 text-lg font-medium text-slate-900 dark:text-slate-300"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Let me know how I can help you"
                        className="bg-slate-100 dark:bg-slate-700 caret-indigo-600 dark:caret-sky-500"
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                  </form>
                </div>
                {/* footer */}
                <div className="flex items-center justify-between p-6">
                  <button
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-fit hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-500 sm:w-fit hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
