import React, { useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {Container, NameText, PriceText, ContainerTexts, QntText, ContainerQnt, ButtonAdd, ButtonRemove} from './styles';


export default function CartList({data, addToCart, rmvToCart}) {

  const [qnt, setQnt] = useState(data?.qnt);

  function handleIncrease(){
    //Adiciona a qnt na state do context
    addToCart();
    //Aumenta o valor da qnt na tela
    setQnt(item => item + 1);
  }

  function handleDecrease(){
    //Remove a qnt na state do context
    rmvToCart();
    //Diminui o valor da qnt na tela
    if(qnt === 0){
      setQnt(0);
      return;
    }
    
    setQnt(item => item - 1);
  }
  
  return (

    <Container>

      <ContainerTexts>
        <NameText>
          {data.name}
        </NameText>
        <PriceText>
          R$ {data.price.toFixed(2)}
        </PriceText>
      </ContainerTexts>

      <ContainerQnt>
        <ButtonRemove onPress = {handleDecrease}>
          <Feather
            name = "minus-square"
            size = {30}
            color = "#000"
          />
        </ButtonRemove>

        <QntText>
          {qnt}
        </QntText>

        <ButtonAdd onPress = {handleIncrease}>
          <Feather
            name = "plus-square"
            size = {30}
            color = "#000"
          />
        </ButtonAdd>

      </ContainerQnt>

    </Container>

  );
}