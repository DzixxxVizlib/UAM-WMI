import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Nav } from '../Nav';

export const Cart = ({ props }) => {
  return (
    <>
      <Nav />

      <div className="cart">
        <h1 className="cart__heading">Your order:</h1>
        <div
          className={
            props.order.total
              ? 'cart__container'
              : 'cart__container cart__container--empty'
          }
        >
          {props.order.total ? (
            <ul className="cart__list">
              {props.order.pizza.map((p, i) => (
                <AnimatePresence key={i}>
                  <motion.li
                    className="cart__item"
                    whileTap={{ opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    onClick={() =>
                      props.deletePizzaFromCart({
                        id: p.id,
                        ingredients: p.ingredients,
                      })
                    }
                  >
                    <p>{props.pizzasById[p.id]?.name}</p>
                    <ul className="extra-ingredients">
                      {props.pizzasById[p.id].ingredients.length !==
                        p.ingredients.length && (
                        <li className="extra-ingredients__item">+</li>
                      )}
                      {p.ingredients.map((ing, i) => {
                        if (props.pizzasById[p.id].ingredients.length <= i) {
                          return (
                            <li className="extra-ingredients__item" key={i}>
                              {props.ingredientsById[ing].name}
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </motion.li>
                </AnimatePresence>
              ))}
              {props.order.sauce.map((s, i) =>
                s.count === 0 ? null : s.count === 1 ? (
                  <AnimatePresence key={i}>
                    <motion.li
                      className="cart__item"
                      whileTap={{ opacity: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      onClick={() =>
                        props.deleteSauceFromCart({
                          id: s.id,
                          price: props.saucesById[s.id]?.price,
                        })
                      }
                    >
                      {props.saucesById[s.id]?.name}
                    </motion.li>
                  </AnimatePresence>
                ) : (
                  <AnimatePresence key={i}>
                    <motion.li
                      className="cart__item"
                      whileTap={{ opacity: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      onClick={() =>
                        props.deleteSauceFromCart({
                          id: s.id,
                          price: props.saucesById[s.id]?.price,
                        })
                      }
                    >
                      {s.count}x {props.saucesById[s.id]?.name}
                    </motion.li>
                  </AnimatePresence>
                )
              )}
            </ul>
          ) : (
            <AnimatePresence>
              <motion.div
                className="cart__empty"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: [0.04, 0.62, 0.23, 0.98],
                }}
              >
                <h1 className="cart__heading cart__heading--one">
                  Your cart is empty
                </h1>
                <motion.h1
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link to="/menu" className="cart__heading cart__heading--two">
                    Go back to menu
                  </Link>
                </motion.h1>
              </motion.div>
            </AnimatePresence>
          )}
          {props.order.total ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="button"
              onClick={() => props.postOrder()}
            >
              PAY {props.order.total}$
            </motion.button>
          ) : null}
        </div>
      </div>
    </>
  );
};
