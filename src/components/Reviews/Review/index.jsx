const Review = ({comment}) => {

  const style = {
    listStyle: "none",
  }

  return (
    <li style={style}>{comment}</li>
  );
};

export default Review;
