"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import FadeIn from "../components/FadeIn";
import SectionTitle from "../components/SectionTitle";

import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
  type: "success" | "error" | "";
  message: string;
}>({
  type: "",
  message: "",
});

const [form, setForm] = useState({
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
});

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};
const sendEmail = async (
  e: React.FormEvent<HTMLFormElement>
) => {

  e.preventDefault();

  setLoading(true);

  try {

    await emailjs.send(

      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,

      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,

      form,

      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

    );

    setStatus({
  type: "success",
  message: "✅ Thank you! Your message has been sent successfully.",
});
setTimeout(() => {
  setStatus({
    type: "",
    message: "",
  });
}, 5000);

    setForm({
      from_name: "",
      from_email: "",
      subject: "",
      message: "",
    });

  } catch (error) {

    console.error(error);

    setStatus({
  type: "error",
  message: "❌ Failed to send the message. Please try again.",
});
setTimeout(() => {
  setStatus({
    type: "",
    message: "",
  });
}, 5000);

  }

  setLoading(false);

};
  return (
    <FadeIn>
      <section
        id="contact"
        className="scroll-mt-24 py-20 bg-slate-950 text-white"
      >
        <div className="max-w-7xl mx-auto px-8">

          <SectionTitle
            title="Let's Connect"
            subtitle="Contact"
          />

          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT */}

            <div>

              <h2 className="text-4xl font-bold">
                Let's Build Something Amazing 🚀
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                I'm actively looking for AI Engineer,
                Machine Learning Engineer,
                Data Scientist,
                Data Analyst and GenAI opportunities.

                Feel free to reach out for collaborations,
                internships or full-time roles.
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex items-center gap-4">

                  <FaEnvelope className="text-cyan-400 text-2xl"/>

                  <span>
                    piyushpratapsingh739@gmail.com
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <FaPhone className="text-cyan-400 text-2xl"/>

                  <span>
                    +91 6204386595
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <FaLinkedin className="text-cyan-400 text-2xl"/>

                  <a
                    href="https://linkedin.com/in/piyush-pratap-singh-22995029a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400"
                  >
                    LinkedIn
                  </a>

                </div>

                <div className="flex items-center gap-4">

                  <FaGithub className="text-cyan-400 text-2xl"/>

                  <a
                    href="https://github.com/1616piyu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <form
  onSubmit={sendEmail}
  className="bg-slate-900/70 backdrop-blur-lg rounded-3xl border border-slate-800 p-8"
>

              <div className="grid md:grid-cols-2 gap-5">

                <input
  type="text"
  name="from_name"
  value={form.from_name}
  onChange={handleChange}
  disabled={loading}
  placeholder="Your Name"
  required
  className="bg-slate-800 rounded-xl p-4 outline-none focus:border-cyan-400 border border-slate-700"
/>
                  
                  
                
                

             <input
  type="email"
  name="from_email"
  value={form.from_email}
  onChange={handleChange}
  disabled={loading}
  placeholder="Email Address"
  required
  className="bg-slate-800 rounded-xl p-4 outline-none focus:border-cyan-400 border border-slate-700"
/>   
                  
            

              </div>

              <input
  type="text"
  name="subject"
  value={form.subject}
  onChange={handleChange}
  disabled={loading}
  placeholder="Subject"
  required
  className="w-full mt-5 bg-slate-800 rounded-xl p-4 outline-none focus:border-cyan-400 border border-slate-700"
/>

              <textarea
  rows={6}
  name="message"
  value={form.message}
  onChange={handleChange}
  disabled={loading}
  placeholder="Your Message..."
  required
  className="w-full mt-5 bg-slate-800 rounded-xl p-4 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 border border-slate-700 resize-none transition"
/>
{status.message && (
  <div
    className={`mt-6 rounded-xl px-4 py-3 text-sm font-medium ${
      status.type === "success"
        ? "bg-green-500/20 text-green-300 border border-green-500"
        : "bg-red-500/20 text-red-300 border border-red-500"
    }`}
  >
    {status.message}
  </div>
)}

              <button
  type="submit"
  disabled={loading}
  className="
    mt-8
    w-full
    rounded-xl
    bg-cyan-500
    py-4
    font-semibold
    transition-all
    hover:bg-cyan-600
    disabled:cursor-not-allowed
    disabled:bg-slate-600
  "
>
  {loading ? (
    <span className="flex items-center justify-center gap-2">
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
      Sending...
    </span>
  ) : (
    "Send Message"
  )}
</button>

            </form>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}