

import "./Book.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../redux/actions/cart-actions";
import StarRatings from "react-star-ratings";

const Book = (props) => {
    const dispatch = useDispatch();

    const {id, title, image, rating} = props.data;

    const onClickHandler = () => {
        dispatch(addToCart(props.data));
    }
    return (
        <div className="col-md-3 col-sm-12 col-xs-12 mb-4">
            <div className="card my-card mx-auto">
                <Link to={`/books/${id}`}>
                    <img src={image} alt="" className="card-img-top"/>
                </Link>              
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <div className="text-center mb-2">
                        <StarRatings rating={rating && rating} starEmptyColor="grey" starRatedColor="orange" numberOfStars={5} starDimension="15px" starSpacing="2px"/>
                        <span className="fs-6"> ({rating && rating})</span>
                    </div>
                    <button onClick={onClickHandler} className="btn btn-dark btn-block">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Book;