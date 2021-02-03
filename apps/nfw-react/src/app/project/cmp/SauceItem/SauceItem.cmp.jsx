import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SauceItem = ({ sauce, addSauce }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <li
      className={activeItem ? 'sauce sauce--selected' : 'sauce'}
      onClick={() => setActiveItem(!activeItem)}
    >
      <div className="sauce__name">{sauce.name}</div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="sauce__open"
            key={sauce.id}
            initial="closed"
            exit="closed"
            animate={activeItem ? 'open' : 'closed'}
            variants={{
              open: { opacity: 1, height: 'auto' },
              closed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.button
              className="button"
              onClick={() =>
                addSauce({ id: `${sauce.id}`, price: sauce.price })
              }
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ADD {sauce.price}$
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
