import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { Nav } from '../Nav';

export const Home = () => {
  return (
    <div>
      <Nav />
      <div className="home-container">
        <h1 className="first-heading">Welcome to LoremIpsum!</h1>
        <motion.h1 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/menu" className="second-heading">
            Place an order
          </Link>
        </motion.h1>
      </div>
    </div>
  );
};
