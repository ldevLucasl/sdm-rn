import styled from "styled-components/native";
import { AntDesign, Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: #282a36;

  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f5f5f5;
  margin-top: 20px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #c2c2c2;
`;

export const Line = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #44475a;

  margin-bottom: 15px;
`;

export const ItemPrice = styled.Text`
  font-size: 12px;
  color: #f5f5f5;
  margin-left: 5px;
`;

export const ItemBlock = styled.Text`
  font-size: 12px;
  color: #f5f5f5;
  margin-left: 5px;
`;

export const ItemImage = styled.Image`
  width: 100%;
  height: 300px;

  border-radius: 10px;
  margin-top: 20px;
`;

export const ItemDescription = styled.Text`
  font-size: 12px;
  color: #f5f5f5;
  margin-left: 5px;
`;

export const Button = styled.TouchableOpacity`
  height: 40px;
  border-radius: 5px;
  background-color: #f5f5f5;
  margin-bottom: 10px;
  padding: 0 10px;
  color: #282a36;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: #282a36;
`;

export const Wrapper = styled.View``;

export const ImgBox = styled.View``;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 30px;
  left: 10px;

  width: 20px;
  height: 20px;

  justify-content: center;
  align-items: center;

  border-radius: 3px;
  background-color: #f5f5f5;
  z-index: 1;
`;

export const BackIcon = styled(AntDesign)`
  color: #282a36;
`;

export const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  top: 30px;
  right: 10px;

  width: 20px;
  height: 20px;

  justify-content: center;
  align-items: center;

  border-radius: 3px;
  background-color: #f5f5f5;
  z-index: 1;
`;

export const DeleteIcon = styled(Feather)`
  color: #282a36;
`;
