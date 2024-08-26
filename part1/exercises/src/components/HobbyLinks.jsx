export default function HobbyLinks(){
    let hobbyLinks = ["https://www.autodraw.com/","https://scratch.mit.edu/","https://wynk.in/music"];
    return(
        <div><h3>My Hobbies List</h3>
        <a href = {hobbyLinks[0]}>Auto Draw</a><br></br>
        <a href = {hobbyLinks[1]}>Scartch Coding</a><br></br>
        <a href = {hobbyLinks[2]}>Wynk Music</a>
        </div>
    );
}