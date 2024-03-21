import Loader from "../components/Loader";
import Card from "../components/Card";

//1. adım) useContext hook u bir context yapısına abone olmamızı sağlar
import { useContext } from "react";

// 2.adım) abone olmak istediğimiz contexti çağır

import { ProductContext } from "../context/productContext";

useContext;

const HomePage = () => {
  //context yapısında tutulan bir veriye projedeki
  //bileşen içerisinde erişmek istiyorsak bileşenden
  //ilgli context yapısına abone oluruz

  const { products, category } = useContext(ProductContext);
  //!console.log(products);

  return (
    <div className="container">
      <h2 className="my-4">{category && category}</h2>

      <div className="container d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4 my-5">
        {/* Veriler gelmediyse yükleniyor bas */}
        {!products && <Loader />}

        {/* veriler geldiyse her biri için kart bas */}

        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
