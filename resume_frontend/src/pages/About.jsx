import React from "react";
import { Link } from "react-router";
import founderImg from '../assets/founder.png';


const AboutPage = () => {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">About SmartResumeScan</h1>
            <p className="py-6 text-lg">
              We’re on a mission to simplify resume building using the power of AI — helping job seekers land interviews faster and smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Building resumes shouldn’t feel like a job in itself. At SmartResumeScan, we combine intuitive design with cutting-edge AI to help you craft professional resumes that stand out — whether you're a fresh graduate or an experienced professional.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="card bg-base-100 shadow-xl p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast & Easy</h3>
              <p>No more hours spent formatting. Just describe yourself, and you're done!</p>
            </div>
            <div className="card bg-base-100 shadow-xl p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Precision Targeted</h3>
              <p>Job-specific resumes tailored to match roles in tech, business, and beyond.</p>
            </div>
            <div className="card bg-base-100 shadow-xl p-6">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">Smart AI Engine</h3>
              <p>Our proprietary AI understands context, tone, and industry expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team (Optional Placeholder Section) */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Meet the Team</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Behind SmartResumeScan is a small team of developers, designers, and career experts passionate about helping you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Example Team Member */}
            <div className="card w-60 bg-base-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img
  src={founderImg}
  alt="Founder"
  className="rounded-full w-24 h-24 object-cover"
/>
  </figure>
  <div className="card-body items-center text-center">
    <h3 className="card-title">Anjar Ansari</h3>
    <p>Founder & Full-Stack Developer</p>
  </div>
</div>


            {/* Add more members if needed */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-base-200 text-center">
        <h2 className="text-4xl font-bold mb-4">Start Building Your Resume</h2>
        <p className="mb-6 text-lg">
          Join thousands of users who’ve made the smarter move.
        </p>
        <Link to="/generate-resume" className="btn btn-primary">
          Build My Resume
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
