import Review from "./Review";
import reviewsData from "../../data/reviewsData";

const Reviews = () => {

  return (
    <div className="pt-2 pb-3">
      <h3 className="font-weight-bold mb-3">Community Reviews</h3>
      {
        reviewsData.map(review => (
              <ul>
                <Review key={review.id} comment={review.comment}/>
              </ul>
            ))
      }
    </div>
  );
};

export default Reviews;
