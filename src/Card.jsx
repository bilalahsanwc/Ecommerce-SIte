// <div className="card" key={index}>
//   <div className="img-container">
//     <img src={singleData.image} alt="Product Image" />
//   </div>
//   <div className="product-text">
//     <span>{singleData.title}</span>
//     <span className="card-price">${singleData.price}</span>
//     <h6>Category: {singleData.category}</h6>
//     <p>
//       Ratings: {singleData.rating.rate} (
//       {singleData.rating.count}
//       sold)
//     </p>
//   </div>
// </div>

import PropTypes from "prop-types";

function Card({
  title,
  src,
  category,
  ratings,
  sold,
  price,
  onAddToCart,
  onCardClick,
}) {
  return (
    <div onClick={onCardClick} className="card">
      <div className="img-container">
        <img src={src} alt="Product Image" />
      </div>
      <div className="product-text">
        <span>{title}</span>
        <span className="card-price">${price}</span>
        <h6>Category: {category}</h6>
        <p>
          Ratings: {ratings} ({sold}
          sold)
        </p>
      </div>
      <button
        onClick={() => {
          onAddToCart(title);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  sold: PropTypes.number.isRequired,
  ratings: PropTypes.number.isRequired,
};

export default Card;
