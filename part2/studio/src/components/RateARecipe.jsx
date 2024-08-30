let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function GiveRating(props) {
  const rating = props.rating <1 || props.rating >5 ? null : <h3> {stars[props.rating - 1]}</h3>;
  return rating;

}

function RateARecipe(props) {
  return (
    <GiveRating rating={props.rating}/>
  )
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
