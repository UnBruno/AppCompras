import React from 'react';
import Feather from 'react-native-vector-icons/Feather'
import {Container, ContainerIcon, NameText, PriceText, ButtomAdd} from './styles';


export default function ItemsList({data, addToCart}) {

  return (
    <ContainerIcon>
        
    
      <Container>
        <NameText>{data.name}</NameText>
        <PriceText>R$ {data.price.toFixed(2)}</PriceText>
      </Container>

      <ButtomAdd onPress = {addToCart}>
        <Feather
          name = "plus-square"
          color= "#000"
          size = {35}
        />
      </ButtomAdd>

    </ContainerIcon>
  );
}