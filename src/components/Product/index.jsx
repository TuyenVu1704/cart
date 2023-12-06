import { useEffect, useState } from "react";

function Product(props) {
  const { data } = props;
  const { image, title, desc, outOfStock, price, remainingAmount } = data;
  const [quantity, setQuantity] = useState(1);
  const [checkInventory, setCheckInventory] = useState(false);

  useEffect(() => {
    let newQuantity = Number(quantity);

    if (data.remainingAmount < newQuantity) {
      setCheckInventory(() => !checkInventory);
    } else {
      setCheckInventory(false);
    }
  }, [quantity]);

  function handleAddCart(data) {
    localStorage.setItem("data", JSON.stringify([data]));
    let oldData = JSON.parse(localStorage.getItem("data"));
    oldData.push({ id: data.id, title: data.title });
    console.log(oldData);
  }

  return (
    <div>
      <div className="media product">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src={`${image}`} alt="charmander" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{title}</h4>
          <p>{desc}</p>
          <input
            name="quantity-product-1"
            type="number"
            defaultValue={quantity}
            min={1}
            onChange={(e) => setQuantity(e.target.value)}
          />
          {checkInventory ? <p style={{ color: "red" }}>Sản Phẩm trong kho chỉ còn {remainingAmount}</p> : " "}
          {outOfStock || checkInventory ? (
            <span className="price">{price} USD</span>
          ) : (
            <a data-product={1} href="#" className="price" onClick={() => handleAddCart(data)}>
              {price} USD
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
