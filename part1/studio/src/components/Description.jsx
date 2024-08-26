import React from "react";
import styles from "./Description.module.css";

function RecipeAuthor() {
  const authorLink = "https://cookieandkate.com/best-granola-bars-recipe/";
  const authorPhoto =
    "https://cookieandkate.com/images/2024/08/kate-in-kitchen-2-550x392.jpg";
  const authorName = "Cookie and Kate";
  return (
    <div className={styles.recipeAuthorBlock}>
      <img
        src={authorPhoto}
        alt="Image of author, Kate"
        className={styles.imageUpdates}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Cookie + Kate</a>
      </div>
    </div>
  );
}

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Easy No-Bake Granola Bars</h1>
          <p>
            This granola bar recipe is so easy and delicious! These wholesome
            granola bars are naturally sweetened, gluten free, and the perfect
            healthy snack. Recipe yields 16 bars.
          </p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

export default RecipeDescription;