import { useState, useContext, createContext, ReactNode } from "react";

//home state
import { useHomeScreen } from "../views/screens/home/use-home-screen";
const { status, products } = useHomeScreen();
console.log(products, 2222);

export const BCartContext = createContext({
  //this is the state
  items: [],
  getItemQuantity: () => {},
  IncreseCartQuantity: () => {}, //also works as add to cart
  DecreaseCartQuantity: () => {},
  RemoveFromCart: () => {},
  GetTotalCost: () => {},
});

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type cartItem = {
  id: number;
  quantity: number;
};

export const BCartProvider = ({ children }) => {
  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const IncreseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
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
    setCartItems((currItems) => {
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
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  const GetTotalCost = () => {
    let totalCOst = 0;
  };

  const [cartItems, setCartItems] = useState<cartItem[]>([]);

  const contextValue = {
    items: cartItems,
    getItemQuantity,
    IncreseCartQuantity, //also works as add to cart
    DecreaseCartQuantity,
    RemoveFromCart,
    GetTotalCost,
  };

  return (
    <BCartContext.Provider value={contextValue}>
      {children}
    </BCartContext.Provider>
  );
};
