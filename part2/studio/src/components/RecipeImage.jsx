import recipedata from "./recipe.json";
import "./styling.css";

function RecipeImage() {
  return (
    <div>
      {recipedata.map((recepie) => (
        <img
          src={recepie.recipeImage}
          className="recipeImage"
          alt="Recepie Image"
        />
      ))}
    </div>
  );
}

export default RecipeImage;

//import json file for the data
//apply css for className recipeImage
