import { useState, useContext, createContext, ReactNode } from "react";

//types
type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  IncreseCartQuantity: (id: number) => void; //also works as add to cart
  DecreaseCartQuantity: (id: number) => void;
  RemoveFromCart: (id: number) => void;
};

type cartItem = {
  id: number;
  quantity: number;
};

//create context
const ShoppingCartContext = createContext({} as ShoppingCartContext);

//use context
export const UseShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

//provider functions
const getItemQuantity = (id: number) => {
  return cartItems.find((item) => item.id === id)?.quantity || 0;
};

const IncreseCartQuantity = (id: number) => {
  setCartitems((currItems) => {
    if (currItems.find((item) => item.id === id) == null) {
      return [...currItems, { id, quantity: 1 }];
    } else {
      return currItems.map((item) => {
        if (item.id == id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    }
  });
};

const DecreaseCartQuantity = (id: number) => {
  setCartitems((currItems) => {
    if (currItems.find((item) => item.id === id)?.quantity == 1) {
      return currItems.filter((item) => item.id !== id);
    } else {
      return currItems.map((item) => {
        if (item.id == id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    }
  });
};

const RemoveFromCart = (id: number) => {
  setCartitems((currItems) => {
    return currItems.filter((item) => item.id !== id);
  });
};
//item state
const [cartItems, setCartitems] = useState<cartItem[]>([]);

//provider
export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  return (
    <>
      <ShoppingCartContext.Provider
        value={{
          getItemQuantity,
          IncreseCartQuantity,
          DecreaseCartQuantity,
          RemoveFromCart,
        }}
      >
        {children}
      </ShoppingCartContext.Provider>
    </>
  );
};
