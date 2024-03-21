const BasketItem = ({ item, addToBasket, removeFromBasket }) => {
  return (
    // eslint-disable-next-line react/jsx-key
    <div className="d-flex flex-column flex-md-row gap-3 align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <div className="rounded bg-white">
          <img
            className="object-fit-contain"
            src={item.image}
            width={60}
            height={60}
          />
        </div>
        <h4 className="text-truncate">{item.title.slice(0, 30) + "..."}</h4>
      </div>
      <div className="d-flex align-items-center gap-1">
        <h3 className="text-success text-nowrap">{item.price}₺</h3>
        <p className="d-flex align-items-center text-nowrap gap-1">
          <span>Miktar:</span>
          <span className="fw-bold">{item.amount}</span>
        </p>
        <div className="d-flex gap-2">
          <button
            onClick={() => removeFromBasket(item.id)}
            className="btn btn-danger"
          >
            -
          </button>
          <button onClick={() => addToBasket(item)} className="btn btn-success">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
