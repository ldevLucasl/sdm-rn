import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: #282a36;

  justify-content: space-between;
`;

export const Input = styled.TextInput`
  height: 40px;
  border-radius: 5px;
  background-color: #f5f5f5;
  margin-bottom: 10px;
  padding: 0 10px;
  font-size: 16px;
  color: #282a36;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f5f5f5;
  margin-top: 20px;
`;

export const DescriptionInput = styled.TextInput`
  height: 100px;
  border-radius: 5px;
  background-color: #f5f5f5;
  margin-bottom: 10px;
  padding: 0 10px;
  font-size: 16px;
  color: #282a36;

  align-items: flex-start;
`;

export const Image = styled.TouchableOpacity``;

export const Label = styled.Text`
  font-size: 12px;
  color: #c2c2c2;
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

export const Wrapper = styled.ScrollView``;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: #282a36;
`;

export const DateButton = styled.TouchableOpacity`
  height: 40px;
  border-radius: 5px;
  background-color: #f5f5f5;
  margin-bottom: 10px;
  padding: 0 10px;
  color: #282a36;

  justify-content: center;
`;

export const DateText = styled.Text`
  color: #282a36;
`;
