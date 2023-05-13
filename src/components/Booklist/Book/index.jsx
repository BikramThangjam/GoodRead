import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../redux/actions/cart-actions";

const Book = (props) => {
    const dispatch = useDispatch();

    const {id, title, image} = props.data;

    const onClickHandler = () => {
        dispatch(addToCart(props.data));
    }
    return (
        <div className="col-md-3 mb-4">
            <div className="card">
                <Link to={`/books/${id}`}>
                    <img src={image} alt="" className="card-img-top"/>
                </Link>              
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <button onClick={onClickHandler} className="btn btn-dark btn-block">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Book;