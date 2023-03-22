import React, {createContext, useState} from "react";

export const CartContext = createContext({});

export default function CartProvider({children}) {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function addCart(newItem){
    //Verificar se o item já exixte no carrinho
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if(indexItem !== -1){
      //Item existe no carrinho, adicionar +1 a qntd
      let cartList = cart;
      cartList[indexItem].qnt = cartList[indexItem].qnt + 1;
      cartList[indexItem].total = cartList[indexItem].qnt * cartList[indexItem].price;

      setCart(cartList);
      calcTotal(cartList);
      return;

    }
    //Item não existe no carrinho, adicionar item
    let data = {
      ...newItem,
      qnt: 1,
      total: newItem.price
    }
    setCart(items => [...items, data]);
    calcTotal([...cart, data]);

  }

  function rmvCart(product){
    const indexItem = cart.findIndex((item) => item.id === product.id);

    if(cart[indexItem]?.qnt > 1){
      //Há mais de um do item em questão, diminui um da qnt
      let cartList = cart;
      cartList[indexItem].qnt = cartList[indexItem].qnt - 1;
      cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

      setCart(cartList);
      calcTotal(cartList);
      return;
    }
    //Apenas um do item no carrinho, remove o item do carrinho
    const removeItem = cart.filter(item => item.id !== product.id);
    setCart(removeItem);
    calcTotal(removeItem);

  }

  function calcTotal(items){
    let myCart = items;
    let result = myCart.reduce((acc, obj) => {return acc + obj.total}, 0);
    setTotal(result);
  }

  return (

    <CartContext.Provider value = {{cart, addCart, rmvCart, total}}>
      {children} 
    </CartContext.Provider>

  );
}