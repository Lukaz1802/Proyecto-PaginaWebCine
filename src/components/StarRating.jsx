import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "../styles/Star.module.css";
import { useState } from "react";

export const StarRating = () => {

    const [rating, setRating] = useState(null);

  return (
    <div className={styles.div}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
           
          <label>
            <input className={styles.input} type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
            <FaStar className={styles.faStar} color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"} size={30} />
          </label>
           
        );
      })}
    </div>
  );
};
