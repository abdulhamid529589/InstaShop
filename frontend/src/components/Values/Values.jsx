import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";
import { div } from "framer-motion/client";

const Values = () => {
  const LeftValues = value.slice(0, 2).map((item) => {
    return (
      <div className="flex flex-row-reverse">
        <div>
          <span>{item.icon}</span>
        </div>
        <div>
          <h3>{item.title}</h3>
          <p>{item.para}</p>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="max-w-[1350px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Values" />
        <div className="flex">
          <div>{LeftValues}</div>
          <div className="w-1/2">
            <img src={Basket} alt="" />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: 1,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSeedling />,
  },
];
