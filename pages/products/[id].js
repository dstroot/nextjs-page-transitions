// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Link from "next/link";
import data from "../../db/db.json";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

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

const Product = (props) => (
  <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
    <div className="">
      <div className="flex">
        <motion.div
          className="w-1/2 h-screen bg-[#dfdfdf] flex items-center justify-center"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <motion.img
            key={props.product.image}
            src={props.product.image}
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          />
        </motion.div>
        <div className="flex items-center justify-center w-1/2 px-20">
          <motion.div variants={stagger}>
            <Link href="/">
              <motion.div
                variants={fadeInUp}
                className="mb-12 text-lg font-semibold cursor-pointer"
              >
                <a>&lt; Back to products</a>
              </motion.div>
            </Link>
            <motion.div variants={fadeInUp}>
              <span className="text-gray-600">Protein</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="mt-8 mb-8 text-5xl font-extrabold text-black"
            >
              {props.product.name}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-800">
              {props.product.details}
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-6 mb-6">
              <span className="px-6 py-1 mr-4 border rounded-full bg-slate-200">
                Soy Free
              </span>
              <span className="px-6 py-1 border rounded-full bg-slate-200">
                Gluten Free
              </span>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-between mt-4"
            >
              <div className="inline-flex items-center space-x-4">
                <button class="bg-gray-200 outline px-2 rounded-full cursor-not-allowed">
                  -
                </button>
                <div className="">1</div>
                <button class="bg-transparent outline px-2 rounded-full">
                  +
                </button>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {props.product.price}
              </span>
              {/* price */}
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-6 mb-24">
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                Add to cart
              </button>
              <button className="px-4 py-2 ml-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
                Subscribe
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

Product.getInitialProps = async function (context) {
  const { id } = context.query;

  // const res = await fetch(
  //   `https://my-json-server.typicode.com/wrongakram/demo/products/${id}`
  // );
  // const product = await res.json();

  // simulate API
  const product = data.find((data) => data.id === id);
  return { product };
};

export default Product;
