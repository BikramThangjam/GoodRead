import Reviews from "../Reviews";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "./BookDetail.css"

const BookDetail = (props) => {
    const {id, image, title, description, author, rating} = props.data;
    return (
        <div className="container pt-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="wrapper pt-3 mb-4 w-100 ">
                        <img src={image} alt="" className="img-fluid book-img box" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="wrapper ">
                        <h1 className="font-weight-bold">{ title }</h1>
                        <h3><span>By </span>{author}</h3>
                        <div className="pt-3 pb-3 d-flex align-items-center">
                            <StarRatings className="" rating={rating && rating} starEmptyColor="grey" starRatedColor="orange" numberOfStars={5} starDimension="27px" starSpacing="2px"/>
                            <h2 className="mb-0 ">{rating}</h2>
                        </div>
                        <p className="font-weight-bold">{ description }</p>
                    </div>
                    <hr />
                    <div className="text-center p-4">
                        <h1 className="pb-4">What do you think?</h1>
                        <Link to={`/AddReview/${id}`} className="button Button-large">
                                Write a Review
                        </Link>
                    </div>                   
                </div>
            </div>
            <hr />
            <div className="row p-5">
                <Reviews/>
            </div>
        </div>
    )
}

export default BookDetail;