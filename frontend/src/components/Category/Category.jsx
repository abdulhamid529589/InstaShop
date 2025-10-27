import React from "react";
import Heading from "../Heading/Heading";
import FruitsCategory from "../../assets/fruits-and-veggies.png";
import DairyCategory from "../../assets/dairy-and-eggs.png";
import SeaFood from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button";
import { motion } from "framer-motion";

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCategory,
  },
  {
    id: 2,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeaFood,
  },
  {
    id: 3,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCategory,
  },
];

const Category = () => {
  return (
    <section className="relative bg-gradient-to-b from-orange-50 via-white to-orange-50 py-20 overflow-hidden">
      {/* Subtle glowing blobs for background depth */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-orange-200 opacity-30 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-200 opacity-30 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-[1350px] mx-auto px-6 md:px-10">
        {/* Section Heading */}
        <Heading highlight="Shop" heading="by Category" />

        {/* Category Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {category.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{
                  scale: 1.04,
                  rotateX: 2,
                  rotateY: -2,
                }}
                className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-orange-100 hover:border-orange-300"
              >
                {/* Image Section */}
                <div className="overflow-hidden bg-gradient-to-tr from-orange-100 to-orange-50 flex justify-center items-center p-10 relative">
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    className="w-52 h-52 object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col items-center text-center space-y-4">
                  <motion.h3
                    whileHover={{ color: "#f97316" }}
                    className="text-2xl font-semibold text-gray-800 transition-colors"
                  >
                    {card.title}
                  </motion.h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {card.description}
                  </p>

                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Button content="See All" />
                  </motion.div>
                </div>

                {/* Glow effect behind card */}
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-orange-400 opacity-20 blur-2xl rounded-full -z-10 group-hover:opacity-40 transition-all"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
