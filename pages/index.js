import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import stuff from "../db.json";

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
  <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
    <div className="h-screen flex items-center container mx-auto">
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <h1 className="text-3xl">Select a protein</h1>
      </motion.div>
      <motion.div variants={stagger} className="flex w-full -mx-2 items-center">
        {props.products.map((product) => (
          <Link
            key={product.id}
            href="/products/[id]"
            as={`/products/${product.id}`}
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="max-w-md p-24 cursor-pointer rounded-lg overflow-hidden shadow-lg"
            >
              <span className="category">Protein</span>
              <motion.img
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                key={product.image}
                src={product.image}
                width={250}
              />
              <div className="flex items-center space-x-4">
                <h4 className="text font-bold">{product.name}</h4>
                <span>{product.price}</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  </motion.div>
);

Index.getInitialProps = async function () {
  // const res = await fetch(
  //   "https://my-json-server.typicode.com/wrongakram/demo/products"
  // );
  // const data = await res.json();

  const data = stuff;

  return {
    products: data,
  };
};

export default Index;
