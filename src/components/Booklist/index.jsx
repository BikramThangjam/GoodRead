import BookData from "../../data/book"
import Book from "./Book";
const Booklist = ()=>{
    return (
        <div>
            <h2 className="text-center mt-3 mb-4 display-4 font-weight-bold">All Books</h2>
            <div className="row">
                {
                    BookData.map(book => <Book data = {book}/>)
                }
            </div>
        </div>
    )
}

export default Booklist;