import BookDetail from "../../components/BookDetail"
import Navbar from "../../components/Navbar"

const BookDetailPage = () => {
    const book = {
        "title": "Never Let Me Go",
        "author": "Kazuo Ishiguro",
        "description": "Hailsham seems like a pleasant English boarding school, far from the influences of the city. Its students are well tended and supported, trained in art and literature, and become just the sort of people the world wants them to be. But, curiously, they are taught nothing of the outside world and are allowed little contact with it. \n Never Let Me Go breaks through the boundaries of the literary novel. It is a gripping mystery, a beautiful love story, and also a scathing critique of human arrogance and a moral examination of how we treat the vulnerable and different in our society. In exploring the themes of memory and the impact of the past, Ishiguro takes on the idea of a possible future to create his most moving and powerful book to date.",
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353048590i/6334.jpg",
        "rating": 3.84
    }
    return (
        <>
            <Navbar/>
            <BookDetail data = {book}/>
        </>
        
    )
}

export default BookDetailPage;