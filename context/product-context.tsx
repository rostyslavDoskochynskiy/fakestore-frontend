import { createContext, useEffect, useState } from "react";

export interface IProductContext {
  products: IProduct[];
  isLoading: boolean;
}

export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export const ProductsData = createContext<IProductContext | null>(null);

const ProductContext = ({ children }: any) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    async function fetchMyAPI() {
      let response: any = await fetch("https://fakestoreapi.com/products");
      response = await response.json();
      setProducts(response);
      setIsLoading(false);
    }
    fetchMyAPI();
  }, []);
  return (
    <ProductsData.Provider value={{ products, isLoading }}>
      {children}
    </ProductsData.Provider>
  );
};
export default ProductContext;
