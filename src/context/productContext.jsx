import axios from "axios";
import { createContext, useEffect, useState } from "react";
axios;

/* 
* Contenxt API
* *Uygulamada birden çok bileşenin ihtiyacı olan verileri 
* Bileşenlerden bağımsız bir şekilde konumlanana merkezlerde 
* yönetmeye yarar.
* Context yapısı içerisinde verilerin state şni ve verleirni değiştir
* meye yarayab fonksiyonlar tutabilir.

* Context, tuttuğumuz değişkenleri bileşenlere doğrudan aktarım yapar
* Merkezi state yönetim aracıdır.

*/
//! COntext yapısının temelini oluşturma

export const ProductContext = createContext();

//! Sağlayıcı ve onun tuttuğu verileri tanımla
export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState("all");

  console.log(category);
  useEffect(() => {
    // önceki ürünleri kaldır-> bunu yaptığımız zaman tekrar yükleniyor çıkar
    setProducts(null);
    //! bütün verileir almak için
    //* https://fakestoreapi.com/products
    //!belirli katagorideki verileri al
    //*  'https://fakestoreapi.com/products/category/jewelery'

    //! aşağıda hangi url e istek atılacağını koşula göre belirle

    const url =
      category === "all"
        ? " https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;

    //! aşağıdaki kod ile de isteği atıyoruz
    axios
      .get(url)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [category]);

  //context yapısında tuttuğumuz verileri bileşenlere sağla
  // value olarak eklenen veriler projedeki bütün bileşenler tarafından
  //erişilebilir olur
  return (
    <ProductContext.Provider value={{ products, category, setCategory }}>
      {children}
    </ProductContext.Provider>
  );
}
