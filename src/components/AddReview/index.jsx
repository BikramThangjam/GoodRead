import "./AddReview.css";
import StarRatings from "react-star-ratings";

const AddReview = (props) => {
   const {image, title, rating} = props.data;
  return (
    <div className="container pt-4 mb-5">
      <div className="row">
        <div className="col-md-6 ">
          <div className="card box">
            <img src={image} alt="" className="card-img-top w-100 h-100" />
            <div className="card-body">
              <h5 className="card-title text-center">{title}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-4">
          <div className="rating">
            <h3 className="mb-0">Rating: </h3>
            <StarRatings className="" rating={rating && rating} starEmptyColor="grey" starRatedColor="orange" numberOfStars={5} starDimension="25px" starSpacing="2px"/>
            <h4 className="mb-0">{rating}</h4>
          </div>
          <div className="wrapper">
            <form action="">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write a review here..."
                className="review-textarea"
              />
              <br />
              <div className="add-review-div">
                <button className="add-review-btn button-large">
                  Add Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
