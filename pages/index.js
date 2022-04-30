import Link from "next/link";
// import fetch from "isomorphic-unfetch";
// import { motion } from "framer-motion";
import { LazyMotion, m } from "framer-motion";

import data from "../db/db.json";

// motion features (domAnimation)
const loadFeatures = () =>
  import("../lib/features.js").then((res) => res.default);

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Index = (props) => (
  <LazyMotion strict features={loadFeatures}>
    <m.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className="flex flex-col items-center justify-center h-screen">
        {/* fullscreen  */}
        <m.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <h1 className="mb-12 text-4xl">Select a Protein</h1>
        </m.div>
        <m.div
          variants={stagger}
          className="flex flex-wrap justify-center md:space-x-12"
        >
          {props.products.map((product) => (
            <Link
              key={product.id}
              href="/products/[id]"
              as={`/products/${product.id}`}
              passHref
            >
              <m.a
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="max-w-md min-w-[80%] md:min-w-[40%] p-16 mb-6 overflow-hidden bg-white shadow-lg cursor-pointer rounded-xl md:mb-0"
              >
                <div className="mb-6 text-gray-700">Protein</div>
                <m.img
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  key={product.image}
                  src={product.image}
                  width={250}
                />
                <div className="flex items-center mt-6 space-x-4">
                  <h4 className="font-bold text">{product.name}</h4>
                  <span>{product.price}</span>
                </div>
              </m.a>
            </Link>
          ))}
        </m.div>
      </div>
    </m.div>
  </LazyMotion>
);

Index.getInitialProps = async function () {
  // const res = await fetch(
  //   "https://my-json-server.typicode.com/wrongakram/demo/products"
  // );
  // const data = await res.json();

  return {
    products: data,
  };
};

export default Index;
