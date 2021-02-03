import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Formik, Field } from 'formik';

export const PizzaItem = ({ pizza, props }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [additionalIngredientsPrice, setAdditionalIngredientsPrice] = useState(
    0
  );

  return (
    <li
      className={activeItem ? 'pizza-item pizza-item--selected' : 'pizza-item'}
    >
      <motion.div
        className="pizza-item__name"
        onClick={() => setActiveItem(!activeItem)}
      >
        {pizza.name}
      </motion.div>
      <ul className="pizza-item__ingredients">
        {pizza.ingredients.map((i) => (
          <li className="ingredient" key={i}>
            {props.ingredientsById[i]?.name}
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {activeItem && (
          <Formik
            initialValues={{
              checked: [],
            }}
            onSubmit={(values) => {
              if (additionalIngredientsPrice === 0) {
                props.addPizzaToCart({
                  id: `${pizza.id}`,
                  ingredients: pizza.ingredients,
                  price: pizza.price,
                });
                setTimeout(() => setActiveItem(!activeItem), 250);
              } else {
                props.addPizzaToCart({
                  id: `${pizza.id}`,
                  ingredients: pizza.ingredients.concat(values.checked),
                  price: pizza.price + additionalIngredientsPrice,
                });
                setTimeout(() => setActiveItem(!activeItem), 250);
              }
            }}
          >
            {(p) => (
              <motion.form
                onSubmit={p.handleSubmit}
                className="pizza-item__open"
                initial="closed"
                exit="closed"
                animate={activeItem ? 'open' : 'closed'}
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  closed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                key={pizza.id}
              >
                <motion.ul className="additional-ingredients">
                  <p className="additional-ingredients__heading">
                    Additional ingredients:
                  </p>
                  {props.ingredientsAllIds.map((ing) => {
                    return (
                      <motion.li
                        className="additional-ingredients__item"
                        key={ing}
                      >
                        <motion.label className="checkbox-container">
                          {props.ingredientsById[ing]?.name}
                          <Field
                            type="checkbox"
                            name="checked"
                            value={props.ingredientsById[ing]?.id}
                            onClick={() => {
                              if (
                                p.values.checked.includes(
                                  props.ingredientsById[ing]?.id
                                )
                              ) {
                                setAdditionalIngredientsPrice(
                                  additionalIngredientsPrice -
                                    props.ingredientsById[ing]?.price
                                );
                              } else {
                                setAdditionalIngredientsPrice(
                                  additionalIngredientsPrice +
                                    props.ingredientsById[ing]?.price
                                );
                              }
                            }}
                          />
                          <span className="checkbox"></span>
                        </motion.label>
                      </motion.li>
                    );
                  })}
                </motion.ul>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="button"
                  type="submit"
                >
                  ADD {pizza.price + additionalIngredientsPrice}.00$
                </motion.button>
              </motion.form>
            )}
          </Formik>
        )}
      </AnimatePresence>
    </li>
  );
};
