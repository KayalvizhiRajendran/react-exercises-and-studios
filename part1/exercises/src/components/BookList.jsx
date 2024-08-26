export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501187742/fire-in-the-sky-9781501187742_lg.jpg";
   let book2 = "https://www.booklistqueen.com/wp-content/uploads/everyone-here-is-lying-shari-lapena.jpg";
   let book3 = "https://www.booklistqueen.com/wp-content/uploads/hello-stranger-katherine-center.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Fire in the Sky" />
         <img src={book2} alt="Everyone Here is Lying" />
         <img src={book3} alt="Hello Stranger" />
      </div>      
   );
}