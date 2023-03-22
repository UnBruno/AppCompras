import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Carrinho from '../pages/Carrinho';
import Home from '../pages/Home';


const StackRoute = createStackNavigator();

export default function Routes() {
  return (
    <StackRoute.Navigator>

      <StackRoute.Screen
      
        name = "Home"
        component = {Home}
        options = {{headerShown: false}}

      />

      <StackRoute.Screen
      
        name = "Carrinho"
        component={Carrinho}
        options = {{
          headerTitle: 'Meu Carrinho'
        }}
      />

    </StackRoute.Navigator>
  );
}