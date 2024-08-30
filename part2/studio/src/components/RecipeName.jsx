import recipedata from "./recipe.json";
import "./styling.css";

function RecipeName() {
  return (
    <div>
      {recipedata.map((recepie) => (
        <h1> {recepie.name}</h1>
      ))}
    </div>
  );
}

export default RecipeName;

//import return the name of the recipe as a level 1 header
