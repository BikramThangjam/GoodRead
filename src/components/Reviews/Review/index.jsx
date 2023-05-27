const Review = ({comment}) => {

  const style = {
    listStyle: "none",
    fontSize:"0.9em",
    fontWeight:"bold"
  }

  return (
    <li style={style}>{comment}</li>
  );
};

export default Review;
