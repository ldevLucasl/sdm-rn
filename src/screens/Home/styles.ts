import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";

export interface Props {
  codigo?: string;
  nome: string;
  descricao: string;
  imagen: string;
  cidade: string;
  estado: string;
  telefone: string;
  data: string;
}

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: #282a36;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f5f5f5;
  margin-top: 20px;
`;

export const List = styled(
  FlatList as unknown as React.ComponentType<FlatListProps<Props>>
)``;

export const Box = styled.TouchableOpacity`
  flex: 1;
  margin: 0px 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  margin-top: 15px;
`;

export const ItemTitle = styled.Text`
  font-size: 16px;
  color: #f5f5f5;
`;

export const ItemPrice = styled.Text`
  font-size: 12px;
  color: #c2c2c2;
`;

export const ItemBlock = styled.Text`
  font-size: 12px;
  color: #c2c2c2;
`;

export const ItemImage = styled.Image`
  width: 100%;
  height: 100px;

  border-radius: 5px;
`;

export const NoContent = styled.Text`
  font-size: 20px;
  color: #282a36;
  align-self: center;

  margin-top: 100px;
  padding: 10px;

  background-color: #f5f5f5;
  border-radius: 5px;
`;
