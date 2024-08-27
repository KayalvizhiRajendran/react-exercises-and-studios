function Rainy(){
    return(
       <h1>Bring your umbrella!</h1>
    );
 }
 
 function Sunny(){
    return(
       <h1>Bring your sunglasses!</h1>
    )
 }
 function RainOrShine(props){
    const isRainy = props.isRainy;
    return isRainy ?  <Rainy /> : <Sunny />
 }
 export default function Rain(){
    return(
       <div>
       <RainOrShine 
          isRainy={false}
          testWord={"thunder"}
       />
    </div>
    );
 }