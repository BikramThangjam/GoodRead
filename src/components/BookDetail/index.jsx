import Reviews from "../Reviews";
import "./BookDetail.css"

const BookDetail = (props) => {
    const {image, title, description} = props.data;
    return (
        <div className="container pt-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="wrapper pt-3 ">
                        <img src={image} alt="" className="img-fluid book-img box" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="wrapper">
                        <h1 className="font-weight-bold">{ title }</h1>
                        <p className="font-weight-bold">{ description }</p>
                    </div>
                    <hr />
                    <div className="text-center p-4">
                        <h1 className="pb-4">What do you think?</h1>
                        <a href="/AddReview" className="button Button-large">
                                Write a Review
                        </a>
                    </div>                   
                </div>
            </div>
            <hr />
            <div className="row">
                <Reviews/>
            </div>
        </div>
    )
}

export default BookDetail;