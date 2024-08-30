import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
   return(
    <div>
       {
       recipedata.map((recepie) => (
        <div> {recepie.author}</div>
      ))}
      {
      recipedata.map((recepie) => (
        <img className="authorImage" src={recepie.authorImage} alt="author image"/>
      ))}
       {
      recipedata.map((recepie) => (
        <a href={recepie.website}>{recepie.website} </a>
      ))}

    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 