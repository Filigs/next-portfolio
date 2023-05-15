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
  // pages\contact-form.js:

  return (
    <div className={styles.pageContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.formContainer}>
          <h2 className={styles.formHeader}>
            Seems like you have something on your mind!
          </h2>
          <p className={styles.formSubheader}>
            {
              "Want to talk about it? Please fill this form and I will instantly receive your submission!"
            }
          </p>
          <form action="#" className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <label htmlFor="email" className={styles.label}>
                Contact Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email@provider.com"
                className={styles.input}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="subject" className={styles.label}>
                What type of project is it?
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Startup / E-Commerce / Web app / SaaS ..."
                className={styles.input}
                required
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
            <div className={styles.textAreaWrapper}>
              <label htmlFor="message" className={styles.label}>
                About the project
              </label>
              <textarea
                id="message"
                rows="6"
                className={styles.input}
                placeholder="Please let me know what's on your mind, feel free to elaborate as much as possible."
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className={styles.buttonContainer}>
              <button
                className={styles.backButton}
                onClick={() => router.back()}
              >
                Back
              </button>
              <button
                type="submit"
                disabled={state.submitting}
                className={styles.submitButton}
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
