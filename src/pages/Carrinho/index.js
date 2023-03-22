import React, {useContext} from 'react';
import {Container, List, TotalText, AreaTotal} from './styles'
import { CartContext } from '../../contexts/cart';
import CartList from '../../components/CartList';


export default function Carrinho() {

  const {cart, addCart, rmvCart, total} = useContext(CartContext);  


  return (
    <Container>

      <List
        showsVerticalScrollIndicator = {false}
        data = {cart}
        keyExtractor = {item => String(item.id)}
        ListEmptyComponent = {() => <TotalText>Carrinho vazio!</TotalText>}
        renderItem = {({item}) => (
          <CartList 
            data = {item} 
            addToCart = {() => addCart(item)} 
            rmvToCart = {() => rmvCart(item)}
          />
        )}
        ListFooterComponent={ () => <TotalText> Total: R$ {total?.toFixed(2)} </TotalText>}
      />

    </Container>
  );
}