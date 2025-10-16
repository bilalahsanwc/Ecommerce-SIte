import React, { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [ecommerce_data, setEcommerce_Data] = useState(null);
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);
  const [cartList, setCartList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const getProducts = async () => {
    setLoading(true);
    setError(null);
    setSelectedProduct(null);
    // setCartTotal(0);
    setEcommerce_Data(null);
    try {
      const url = "https://fakestoreapi.com/products";
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      setEcommerce_Data(data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  function handleAddToCart(title) {
    setCartList([...cartList, title]);
  }

  return (
    <>
      <nav>
        <div className="nav-content">
          <div className="nav-r1">
            <img src="src/assets/favicon-removebg-preview.png" alt="favicon" />
            <a href="/">Cartify</a>
          </div>
          <ul className="nav-r2">
            {/* <div className="nav-dropdown">
              <button
                onClick={() => {
                  setOpenDropDown(!openDropDown);
                }}
              >
                Categories <i className="fa-solid fa-caret-down"></i>
              </button>
              {openDropDown && (
                <div className="dropdown-content">
                  <a href="#">Men</a>
                  <a href="#">Women</a>
                  <a href="#">Kids</a>
                </div>
              )}
            </div> */}
            <a href="">Sale</a>
            <a href="#products">Products</a>
            <a href="">Your Orders</a>
            <a className="delivery" href="">
              Delivery
            </a>
          </ul>
          <div className="nav-r3">
            <form action="" className="search-bar">
              <div className="fa-search-bar">
                <input type="text" placeholder="Search Cartify.." />
                <button className="fa-solid fa-search"></button>
              </div>
            </form>
            <div className="me-div">
              <i className="fa-solid fa-user"></i>
              <a href="" className="me">
                Me
              </a>
            </div>
            <div className="cart-div">
              <i className="fa-solid fa-cart-shopping"></i>
              <a href="" className="my-cart">
                Cart
              </a>
            </div>
            <span
              onClick={() => setOpenDialog(true)}
              className="fa-solid fa-bars"
            ></span>
          </div>
        </div>
      </nav>
      {openDialog && (
        <div className="dialog">
          <div className="dialog-content">
            <div className="dialog-r1">
              <p>Cartify</p>
              <i
                onClick={() => setOpenDialog(false)}
                className="fa-solid fa-xmark"
              ></i>
            </div>
            <ul className="dialog-r2">
              <li>Sale</li>
              <li>Products</li>
              <li>Your Orders</li>
              <li>Delivery</li>
            </ul>
            <div className="dialog-r3">
              {/* <form action="" className="search-bar">
                <div className="fa-search-bar">
                  <input type="text" placeholder="Search Cartify.." />
                  <button className="fa-solid fa-search"></button>
                </div>
              </form> */}
              <div>
                <i className="fa-solid fa-user"></i>
                <a href="" className="me">
                  Me
                </a>
              </div>
              <div>
                <i className="fa-solid fa-cart-shopping"></i>
                <a href="" className="my-cart">
                  Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading ? (
        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-grow spinner-grow-sm"
            aria-hidden="true"
          ></span>
          <span role="status">Loading...</span>
        </button>
      ) : ecommerce_data ? (
        <section id="products" className="App-container">
          <div className="cards-container">
            {ecommerce_data.map((singleData, index) => (
              <Card
                key={index}
                title={singleData.title}
                price={singleData.price}
                src={singleData.image}
                sold={singleData.rating.count}
                ratings={singleData.rating.rate}
                category={singleData.category}
                onAddToCart={handleAddToCart}
                onCardClick={() => {
                  setSelectedProduct(singleData);
                }}
              />
            ))}
          </div>
          {/* {selectedProduct && (
            <div className="dialog-container">
              <dialog className="dialog-card product-dialog ">
                <div className="product-details">
                  <h3>Product Details</h3>
                  <button
                    className="close-dialog-btn"
                    onClick={() => {
                      setSelectedProduct(null);
                    }}
                  >
                    X
                  </button>
                </div>
                <div className="img-container">
                  <img src={selectedProduct.image} alt="Product Image" />
                </div>
                <div className="product-text">
                  <span>{selectedProduct.title}</span>
                  <span className="card-price">${selectedProduct.price}</span>
                  <h6>Category: {selectedProduct.category}</h6>
                  <p>
                    Ratings: {selectedProduct.rating.rate} (
                    {selectedProduct.rating.count}
                    sold)
                  </p>
                  <p>Description: {selectedProduct.description}</p>
                </div>
              </dialog>
            </div> 
          )}*/}
          {/* {cartList.length !== 0 && (
            <div
              style={{
                height: "50vh",
                width: "30vw",
                background: "orangeRed",
                color: "white",
                position: "fixed",
                bottom: "0px",
                right: "0px",
              }}
            >
              <h6>Your Cart:</h6>
              {cartList.map((cartItem, index) => (
                <p key={index}>{cartItem}</p>
              ))}
            </div>
          )} */}
          <footer>
            <div className="footer-content">
              <div className="footer-c1">
                <h5>
                  <img
                    src="src/assets/favicon-removebg-preview.png"
                    alt="favicon"
                  />
                  Cartify
                </h5>
                <p>Where Your Cart Meets Happiness.</p>
              </div>
              <div className="footer-row">
                <div className="footer-c2">
                  <ul>
                    <p className="footer-ul-head">Pages</p>
                    <li>Products</li>
                    <li>Your Orders</li>
                    <li>Delivery</li>
                  </ul>
                </div>
                <div className="footer-c3">
                  <ul>
                    <p className="footer-ul-head">Legal</p>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Refund</li>
                  </ul>
                </div>
                <div className="footer-c4">
                  <ul>
                    <p className="footer-ul-head">Social</p>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                  </ul>
                </div>
              </div>
              <p className="copyright-para">
                Copyright &copy; 2025 Cartify. All rights reserved.
              </p>
            </div>
          </footer>{" "}
        </section>
      ) : (
        <p>Some error occured</p>
      )}
    </>
  );
}

export default App;
