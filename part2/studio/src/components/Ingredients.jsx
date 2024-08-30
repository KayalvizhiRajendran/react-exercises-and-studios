import recipedata from "./recipe.json";
import "./styling.css";

function IngredientList() {
  return (
    <div>
      <h3>Ingredients</h3>
      <ol>
        {recipedata.map((recepie) =>
          recepie.ingredients.map((item, index) => <li key={index}> {item}</li>)
        )}
      </ol>
    </div>
  );
}

export default IngredientList;

//import json file for the data
//use a nested map to get inside the inner array
