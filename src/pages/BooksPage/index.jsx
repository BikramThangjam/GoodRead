import Booklist from "../../components/Booklist"
import Navbar from "../../components/Navbar"

const BooksPage = () =>{
    return (
        <>
            <Navbar/>
            <div className="container">
                <Booklist/>
            </div>
        </>
    )
}

export default BooksPage;