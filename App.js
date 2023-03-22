import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import Routes from './src/routes/index';
import CartProvider from './src/contexts/cart'

export default function CarrinhoCompras() {
  return (
    <NavigationContainer>
      <CartProvider>
        <Routes/>
      </CartProvider>
    </NavigationContainer>
  );
}
