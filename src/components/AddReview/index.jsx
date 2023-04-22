import "./AddReview.css";
const AddReview = (props) => {
   const {image, title} = props.data;
  return (
    <div className="container pt-4 mb-5">
      <div className="row">
        <div className="col-md-6  ">
          <div className="card box">
            <img src={image} alt="" className="card-img-top w-100 h-100" />
            <div className="card-body">
              <h5 className="card-title text-center">{title}</h5>
              <a href="#" className="btn btn-dark btn-block">
                Read a book
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-4">
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
