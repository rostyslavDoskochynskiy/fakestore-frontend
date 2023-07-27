import { Dispatch, SetStateAction, createContext, useState } from "react";
import { IProduct } from "./product-context";

export interface ICart {
  value: number;
  product: IProduct;
}
interface ICartContext {
  purchases: ICart[];
  setPurchases: Dispatch<SetStateAction<ICart[]>>;
  addPurchasesValue: (product: IProduct) => void;
  subtractPurchasesValue: (id: number) => void;
  removePurchase: (id: number) => void;
  successfulPurchase: boolean;
  setSuccessfulPurchase: Dispatch<SetStateAction<boolean>>;
}

export const CartData = createContext<ICartContext | null>(null);

const CartContext = ({ children }: any) => {
  const [purchases, setPurchases] = useState<ICart[]>([]);
  const [successfulPurchase, setSuccessfulPurchase] = useState<boolean>(false);

  const addPurchasesValue = (product: IProduct) => {
    setSuccessfulPurchase(false);
    setPurchases((prev: any) => {
      if (prev?.find((obj: ICart) => obj?.product?.id === product.id)) {
        const changedCart = prev.map((arr: ICart) => {
          if (arr?.product.id === product.id) {
            return { value: arr.value + 1, product: arr.product };
          }
          return arr;
        });

        return changedCart;
      }
      return [...prev, { value: 1, product }];
    });
  };

  const subtractPurchasesValue = (id: number) => {
    setPurchases((prev: any) => {
      const changedCart = prev.map((arr: ICart) => {
        if (arr?.product.id === id) {
          return { value: arr.value - 1, product: arr.product };
        }
        return arr;
      });
      const filteredCart = changedCart.filter((obj: ICart) => obj.value > 0);

      return filteredCart;
    });
  };

  const removePurchase = (id: number) => {
    setPurchases((prev: any) => {
      const filteredCart = prev.filter((obj: ICart) => obj.product.id !== id);
      return filteredCart;
    });
  };

  return (
    <CartData.Provider
      value={{
        purchases,
        setPurchases,
        addPurchasesValue,
        subtractPurchasesValue,
        removePurchase,
        successfulPurchase,
        setSuccessfulPurchase,
      }}
    >
      {children}
    </CartData.Provider>
  );
};
export default CartContext;
