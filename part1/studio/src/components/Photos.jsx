import React from "react";
import styles from "./Description.module.css";

const RecipePhoto = () => {
  return (
    <img
      src="https://cookieandkate.com/images/2020/04/best-granola-bars-recipe-1-550x824.jpg"
      alt="Photo of granola bars"
      className={styles.imageUpdates}
    />
  );
};

export default RecipePhoto;