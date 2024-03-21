import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import BasketItem from "../components/BasketItem";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { basket, addToBasket, removeFromBasket } = useContext(BasketContext);

  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);

  const totalPrice = basket.reduce((total, i) => total + i.price * i.amount, 0);

  return (
    <div className="container my-5">
      {/* sepette ürün yok ise */}
      {basket.length === 0 && (
        <p>
          <span className="mx-3">Öncelikle sepete bir ürün ekleyiniz</span>
          <Link to={"/"}> Ürünler</Link>
        </p>
      )}
      <div className="d-flex flex-column gap-5">
        {/* sepette ürün var is */}
        {basket?.map((item) => (
          <BasketItem
            key={item.id}
            item={item}
            addToBasket={addToBasket}
            removeFromBasket={removeFromBasket}
          />
        ))}
      </div>
      <div className="border p-5 rounded my-5 fs-4">
        <p>
          Sepetteki Urun: <span className="text-warning">{totalAmount}</span>{" "}
          Adet
        </p>
        <p>
          Toplam Fiyat{" "}
          <span className="text-success">{totalPrice.toFixed(2)} ₺</span>
        </p>
      </div>
    </div>
  );
};

export default CheckOut;
