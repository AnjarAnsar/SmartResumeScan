import React from "react";

const Contact = () => {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-[50vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <p className="py-6 text-lg">
              Have questions, feedback, or collaboration ideas? We’d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p>
              Whether you're a user, employer, or just curious about SmartResumeScan, we're here to help.
            </p>
            <div className="space-y-2">
              <p><span className="font-semibold">📧 Email:</span> anjar_2022bite027@nitsri.ac.in</p>
              <p><span className="font-semibold">📍 Location:</span> Srinagar, India</p>
              <p><span className="font-semibold">💬 WhatsApp:</span> +91-6009045802</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="card bg-base-200 shadow-xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-center mb-4">Send a Message</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Your message..."
                rows="4"
                required
              ></textarea>
            </div>
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </section>

      {/* Optional Call to Action */}
      <section className="py-16 bg-base-200 text-center">
        <h2 className="text-3xl font-bold mb-4">Prefer Building Instead?</h2>
        <p className="mb-6 text-lg">
          Try our AI-powered resume builder today — fast, smart, and free.
        </p>
        <a href="/generate-resume" className="btn btn-primary">Generate Resume</a>
      </section>
    </div>
  );
};

export default Contact;
