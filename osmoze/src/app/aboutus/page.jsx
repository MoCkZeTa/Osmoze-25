import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="aboutus px-4 md:px-16">
      {/* Who We Are Section - Responsive */}
      <div className="flex flex-col justify-center min-h-screen w-full relative py-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-center mb-10">
          ABOUT US
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
          {/* About Us Image */}
          <Image
            src="/images/osmozeimg.jpg"
            alt="About Us"
            width={420}
            height={300}
            className="rounded-lg shadow-lg max-w-full"
          />

          {/* About Us Text */}
          <div className="w-full md:w-1/2 px-4 md:px-6 text-center md:text-left">
            <h3 className="text-yellow-400 text-3xl sm:text-4xl mb-4">
              Who are we?
            </h3>
            <p className="text-lg sm:text-xl">
              The Society of Chemical Engineers (SoChem) is a student-run
              society that aims to enhance the technical and managerial skills
              of its members. It provides students with opportunities to engage
              in industrial projects, workshops, and competitions that develop
              their knowledge in the field.
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full gap-8 py-10">
        {/* Mission Text */}
        <div className="w-full md:w-1/2 px-4 md:px-6 text-center md:text-left">
          <h3 className="text-yellow-400 text-3xl sm:text-4xl mb-4">
            Our Mission
          </h3>
          <p className="text-lg sm:text-xl">
            The society provides a platform for students to improve both their
            technical skills & personality. It also brings back the experience
            of our esteemed alumni to help budding engineers. Regular workshops,
            guest lectures, and industrial visits are organized to bridge the
            gap between academia and industry.
          </p>
        </div>

        {/* Mission Image */}
        <div className="px-4 md:px-6">
          <Image
            src="/images/osmozegrpofpeople.jpg"
            alt="Mission"
            width={350}
            height={400}
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
