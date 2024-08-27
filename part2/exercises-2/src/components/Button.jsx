import './styles.css';
function onLearnMore(){
      alert('Slipsh Splash!');
}
function Button() {

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;