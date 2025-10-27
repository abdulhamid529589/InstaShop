import React from "react";
import grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div>
      <section>
        <div className="max-w-[1350px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-24 pt-32 min-h-screen">
          {/* Hero Content */}
          <div className="flex-1">
            <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">
              Export Best Quality ...
            </span>
            <h1 className="md:text-7xl text-5xl font-bold md:leading-normal leading-tight pt-5">
              Tasty Organic <span className="text-orange-500">Fruits</span> &{" "}
              <span className="text-orange-500">Veggies</span> In Your City
            </h1>
            <p className="text-zinc-600 text-lg max-w-[530px] mt-5 mb-5">
              Bred for a high content of beneficial substances. Our products are
              all fresh and healthy.
            </p>
            <Button content="Shop Now" />
          </div>
          {/* Hero Image */}
          <div className="flex-1">
            <img src={grocery} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
