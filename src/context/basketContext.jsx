import { createContext, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { toast } from "react-toastify";

//1 context yapısı tanımlamalıyız

export const BasketContext = createContext();

//2) constext te tutlan verileri uygulamaya
//aktaracak bir sağlayıcı bileşeni tanımlamalıyız

export function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);
  //!sepete urun ekler

  const addToBasket = (newProduct) => {
    // 1)yeni eklenen ürün sepette var mı kontrol et
    // console.log(basket, newProduct);
    const found = basket.find((i) => i.id === newProduct.id);
    //console.log(found);

    if (found) {
      //! 2) urun sepette var sa ürünün miktarını 1 arttır
      //!a) öncelikle ürünün miktarını 1 arttırmalıyız
      const updated = { ...found, amount: found.amount + 1 };
      //!b) sepet dizisindeki eski urun adetinin yerine
      //!güncel adetini yazmalıyız
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );
      //!c) state i guncelle

      setBasket(newBasket);
      toast.info(`ürün miktarı arttırıldı (${updated.amount})`);
    } else {
      //! 3) urun sepette yoksa ürünü sepete ekle ve miktari 1 e eşitle

      setBasket([...basket, { ...newProduct, amount: 1 }]);
      toast.info("sepete ürün eklendi");
      //console.log(basket);
    }
    console.log(basket);
  };

  const removeFromBasket = (delete_id) => {
    //sepetteki urrunu bul

    const found = basket.find((i) => i.id === delete_id);
    if (found.amount > 1) {
      //miktrı 1 den fazlaysa miktarını 1 eksilt
      const updated = { ...found, amount: found.amount - 1 };

      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      setBasket(newBasket);
      toast.warning(`urun miktarı azaltıldı (${updated.amount})`);
    } else {
      //miktarı 1 e eşiktse ürünü diziden kaldır
      const filtred = basket.filter((i) => i.id !== delete_id);
      setBasket(filtred);
      toast.error("ürün sepetten kaldırıldı.");
    }
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}
