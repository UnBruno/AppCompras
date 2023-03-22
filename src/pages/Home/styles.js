import styled from 'styled-components';

export const Background = styled.View`
  flex: 1;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #E6E6FA;
  padding: 10px;
  margin-bottom: 5px;
`;

export const Titulo = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
`;

export const ButtomCarrinho = styled.TouchableOpacity`

`;

export const AreaList = styled.View`
  padding: 10px;
  flex: 1;
`;

export const List = styled.FlatList`

`;

export const Quantity = styled.View`
  align-items: center;
  justify-content: center;
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 12px;
  position: absolute;
  z-index: 99;
  bottom: -2px;
  left: -4px;
`;
export const QuantityText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #000;
`;

