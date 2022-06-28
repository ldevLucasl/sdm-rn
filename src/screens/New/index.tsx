import React from "react";

import * as S from "./styles";
import useFetch from "../Home/data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const New: React.FC = () => {
  const { handlers } = useFetch();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [token, setToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    const load = async () => {
      const token = await AsyncStorage.getItem("token");
      setToken(token);
    };
    load();
  }, []);

  const data = {
    codigo: token,
    nome: title,
    descricao: description,
    imagen: "https://i.imgur.com/RyQEZkO.jpg",
    cidade: city,
    estado: state,
    telefone: telephone,
    data: date,
  };

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>Criar novo facilitador</S.Title>
        <S.Label>Título:</S.Label>
        <S.Input
          value={title}
          onChangeText={setTitle}
          placeholder="Digite..."
        />

        <S.Label>Descrição:</S.Label>
        <S.DescriptionInput
          value={description}
          onChangeText={setDescription}
          placeholder="Digite..."
        />

        <S.Label>Estado:</S.Label>
        <S.Input
          value={state}
          onChangeText={setState}
          placeholder="Digite..."
        />

        <S.Label>Cidade:</S.Label>
        <S.Input value={city} onChangeText={setCity} placeholder="Digite..." />

        <S.Label>Telefone:</S.Label>
        <S.Input
          value={telephone}
          onChangeText={setTelephone}
          placeholder="Digite..."
        />

        <S.Label>Data:</S.Label>
        <S.DateButton onPress={showDatepicker}>
          <S.DateText>{date.toLocaleDateString()}</S.DateText>
        </S.DateButton>
      </S.Wrapper>

      <S.Button onPress={() => handlers.handleCreate(data)}>
        <S.ButtonText>Criar</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default New;
