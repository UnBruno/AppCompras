import React, {useState, useContext} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import ItemsList from '../../components/ItemsList';
import {useNavigation} from '@react-navigation/native';
import {CartContext} from '../../contexts/cart'

import {Background, ContainerTitle, Titulo, ButtomCarrinho, AreaList, List, Quantity, QuantityText} from './styles';

export default function Home() {

  const {cart, addCart} = useContext(CartContext);

  const navigation = useNavigation();
  const [items, setItems] = useState([
    {
      id: '1',
      name: "Coca cola",
      price: 19.90
    },
    {
      id: '2',
      name: "Chocolate",
      price: 6.50
    },
    {
      id: '3',
      name: "Pão de forma",
      price: 5.29
    },
    {
      id: '4',
      name: "Queijo 500g",
      price: 15
    },
    {
      id: '5',
      name: "Batata frita",
      price: 23.90
    },
    {
      id: '6',
      name: "Guarana lata",
      price: 6.00
    },
    {
      id: '7',
      name: "Óleo de soja",
      price: 3.99
    },
    {
      id: '8',
      name: "Sabonete",
      price: 1.79
    },
    {
      id: '9',
      name: "Cebola",
      price: 2.49
    },
    {
      id: '10',
      name: "Feijão",
      price: 7.99
    },
  ]);

  function handleAddCart(item){
    addCart(item)
  }

  return (
    <Background>
      
      <ContainerTitle>

        <Titulo>Lista de Produtos</Titulo>
        <ButtomCarrinho onPress = {() => navigation.navigate("Carrinho")} >
          {
            cart.length >= 1 && (

            <Quantity>
              <QuantityText>
                {cart?.length}
              </QuantityText>
            </Quantity>
          
          )}
          <Feather
            name = "shopping-cart"
            size = {35}
            color = "#000"
          />
        </ButtomCarrinho>
        
      </ContainerTitle>

      <AreaList>
      
        <List
          showsVerticalScrollIndicator = {false}
          data = {items}
          keyExtractor = {item => String(item.id)}
          renderItem = {({item}) => ( <ItemsList data = {item} addToCart={() => handleAddCart(item)} />) }
        />
      
      </AreaList>

    </Background>
  );
}