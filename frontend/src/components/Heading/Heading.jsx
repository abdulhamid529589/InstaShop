import React from "react";

const Heading = (props) => {
  return (
    <div className="w-full">
      <div className="w-fit mx-auto text-center relative">
        {/* Heading Text */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          <span className="text-orange-500">{props.highlight}</span>{" "}
          {props.heading}
        </h2>

        {/* Decorative line under heading */}
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-4 rounded-full"></div>
      </div>
    </div>
  );
};

export default Heading;
